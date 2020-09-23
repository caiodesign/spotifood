import { useState } from 'react'
import { useEffectOnce } from 'react-use'

import Filter from 'components/Filter'

import useSpotify from 'contexts/spotify'

import api from 'api'

type CountryFilter = {
  id: string
  name: string
  values: []
}

function Home() {
  const [filters, setFilters] = useState([])
  const { getFeaturedPlaylists } = useSpotify()

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

  useEffectOnce(() => {
    getFeaturedPlaylists()
    getCountries()
  })

  return <Filter countries={filters} onChange={handleOptionsChange} />
}

export default Home
