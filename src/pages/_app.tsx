import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import { Theme } from 'styles/theme'
import { ThemeProvider } from 'styled-components'
import { SpotifyTokenProvider } from 'contexts/token'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>bstage - boilerplate </title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <SpotifyTokenProvider>
          <Component {...pageProps} />
        </SpotifyTokenProvider>
      </ThemeProvider>
    </>
  )
}

export default App
