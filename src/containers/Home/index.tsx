import { useEffect, useState } from 'react'

import Filter from 'components/Filter'

import api from 'api'

type Country = {
  id: string
  name: string
  values: []
}

function Home() {
  const [filters, setFilters] = useState([])

  async function getCountries() {
    try {
      const { data } = await api.getFilters()
      const onlyCountriesFilter = await data.filters.filter(
        (arr: Country) => arr.id === 'country'
      )[0]
      setFilters(onlyCountriesFilter.values)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return <Filter countries={filters} onClick={() => true} />
}

export default Home
