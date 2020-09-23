import { useEffect, useState } from 'react'
import Filter from 'components/Filter'

import useSpotifyToken from 'contexts/token'

import api from 'api'

type CountryFilter = {
  id: string
  name: string
  values: []
}

function Home() {
  const [filters, setFilters] = useState([])
  const { spotifyToken, generateToken } = useSpotifyToken()

  async function getCountries() {
    try {
      const { data } = await api.getFilters()
      const onlyCountriesFilter = await data.filters.filter(
        (arr: CountryFilter) => arr.id === 'country'
      )[0]
      setFilters(onlyCountriesFilter.values)
    } catch (err) {
      console.log(err)
    }
  }

  function handleOptionsChange(value: string) {
    console.log(value)
  }

  useEffect(() => {
    if (!spotifyToken) generateToken()

    getCountries()
  }, [spotifyToken, generateToken])

  return <Filter countries={filters} onChange={handleOptionsChange} />
}

export default Home
