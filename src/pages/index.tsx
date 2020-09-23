import { useEffect } from 'react'
import { useRouter } from 'next/router'

import useSpotifyToken from 'contexts/token'

export default function Index() {
  const { spotifyToken, generateToken } = useSpotifyToken()
  const router = useRouter()

  useEffect(() => {
    if (!spotifyToken) generateToken()
    else router.push('/home')
  })

  return null
}
