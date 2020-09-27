import { NextPageContext } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import useSpotifyToken from 'contexts/spotify'

type QueryCode = {
  code: string
}

export default function Index({ code }: QueryCode) {
  const { spotifyCode, generateCode, createCodeCookie } = useSpotifyToken()
  const router = useRouter()

  useEffect(() => {
    if (code) {
      createCodeCookie(code)
      router.push('/home')
    } else if (!spotifyCode) {
      generateCode()
    }
  })

  return null
}

Index.getInitialProps = ({ query }: NextPageContext) =>
  query.code ? query : { code: false }
