import { createContext, useState, useContext } from 'react'
import Cookies from 'js-cookie'

import api from 'api'
import { REDIRECT_URI, CLIENT_ID } from 'config/constants'

type AuxProps = {
  children: React.ReactNode
}

type ContextType = {
  spotifyCode: string
  spotifyAccessToken: string
  generateCode: () => void
  createCodeCookie: (code: string) => void
  generateAccessToken: () => Promise<string>
  getFeaturedPlaylists: () => Promise<unknown>
  playlists: Playlist[]
}

type Playlist = {
  external_urls: ExternalUrls
  name: string
  description: string
  images: Images[]
}

type ExternalUrls = {
  spotify: string
}

type Images = {
  url: string
}

const TokenContext = createContext({} as ContextType)

export function SpotifyTokenProvider({ children }: AuxProps) {
  const [spotifyAccessToken, setSpotifyAccessToken] = useState(
    Cookies.get('spotify-access-token') || ''
  )
  const [playlists, setPlaylists] = useState([])

  const spotifyCode = Cookies.get('spotify-code') || ''

  function generateCode() {
    deleteExpiredCodeCookie()
    deleteExpiredAccessTokenCookie()

    const spotifyRedirect = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}`

    window.location.replace(spotifyRedirect)
  }

  function deleteExpiredCodeCookie() {
    Cookies.remove('spotify-code')
  }

  function createCodeCookie(code: string) {
    Cookies.set('spotify-code', code)
  }

  function deleteExpiredAccessTokenCookie() {
    Cookies.remove('spotify-access-token')
  }

  function handleAccessToken(token: string) {
    if (token) {
      Cookies.set('spotify-access-token', token)
      setSpotifyAccessToken(token)
    }
  }

  async function generateAccessToken() {
    try {
      const { data } = await api.getSpotifyAccessToken({
        code: spotifyCode
      })

      handleAccessToken(data.access_token)
      deleteExpiredCodeCookie()

      return data.access_token
    } catch (err) {
      console.log(err)
      generateCode()
    }

    return ''
  }

  async function getFeaturedPlaylists() {
    const token = spotifyAccessToken || (await generateAccessToken())

    try {
      const { data } = await api.getFeaturedPlaylists({
        token
      })

      if (data.playlists.items.length) setPlaylists(data.playlists.items)

      return data
    } catch (err) {
      console.log(err)
      generateCode()
    }
  }

  return (
    <TokenContext.Provider
      value={{
        spotifyCode,
        spotifyAccessToken,
        generateCode,
        createCodeCookie,
        generateAccessToken,
        getFeaturedPlaylists,
        playlists
      }}
    >
      {children}
    </TokenContext.Provider>
  )
}

export default function useSpotify() {
  const context = useContext(TokenContext)

  return context
}
