import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import { Theme } from 'styles/theme'
import { ThemeProvider } from 'styled-components'
import { SpotifyTokenProvider } from 'contexts/spotify'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Spotifood </title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="Spotifood is a small application that uses Spotify Web API to get a list of featured playlists from Spotify"
        />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <SpotifyTokenProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SpotifyTokenProvider>
      </ThemeProvider>
    </>
  )
}

export default App
