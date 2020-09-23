import { NextPageContext } from 'next'

import Navbar from 'components/Navbar'
import HomeContainer from 'containers/Home'

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeContainer />
    </>
  )
}

Home.getInitialProps = ({ res, query }: NextPageContext) => {
  if (res && query.code) {
    res.setHeader('set-cookie', 'spotify-token=' + query.code)
    res.writeHead(302, { Location: '/home' })

    res.end()
  }
  return {}
}
