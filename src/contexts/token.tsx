import { createContext, useState, useContext } from 'react'
import Cookies from 'js-cookie'

type AuxProps = {
  children: React.ReactNode
}

type ContextType = {
  spotifyToken: string
  getTokenFromUrl: () => string
  getTokenFromCookies: () => string
  generateToken: () => void
}

const TokenContext = createContext({} as ContextType)

export function SpotifyTokenProvider({ children }: AuxProps) {
  const [spotifyToken, setSpotifyTokenToken] = useState(
    Cookies.get('spotify-token') || ''
  )

  function getTokenFromUrl() {
    const queryString = window.location.search
    const url = new URLSearchParams(queryString)
    const token = url.get('code')

    if (token) {
      Cookies.set('spotify-token', token)
      setSpotifyTokenToken(token)
    }

    return token || ''
  }

  function getTokenFromCookies() {
    const token = Cookies.get('spotify-token')

    if (token) setSpotifyTokenToken(token)

    return token || ''
  }

  function generateToken() {
    const scopes = 'user-read-private user-read-email',
      clientId = 'cd55801a38d74dffbeabab42479e8dac',
      redirectUri = 'http://localhost:3000/home'

    const spotifyRedirect = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
      scopes
    )}&redirect_uri=${encodeURIComponent(redirectUri)}`

    console.log(spotifyRedirect)

    window.location.replace(spotifyRedirect)
  }

  return (
    <TokenContext.Provider
      value={{
        spotifyToken,
        getTokenFromUrl,
        getTokenFromCookies,
        generateToken
      }}
    >
      {children}
    </TokenContext.Provider>
  )
}

export default function useSpotifyToken() {
  const context = useContext(TokenContext)

  return context
}
