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
}

const TokenContext = createContext({} as ContextType)

export function SpotifyTokenProvider({ children }: AuxProps) {
  const [spotifyAccessToken, setSpotifyAccessToken] = useState(
    Cookies.get('spotify-access-token') || ''
  )
  const spotifyCode = Cookies.get('spotify-code') || ''

  function generateCode() {
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
        getFeaturedPlaylists
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