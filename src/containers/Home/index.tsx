/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { useEffectOnce } from 'react-use'

import Filter from 'components/Filter'

import useSpotify from 'contexts/spotify'

import api from 'api'

type SingleFilterType = {
  id: string
  name: string
  values?: CountryType[]
  validation?: any
}

type CountryType = {
  name: string
  value: string
}

function Home() {
  const [filters, setFilters] = useState<any>({})
  const { getFeaturedPlaylists } = useSpotify()

  function manipulateFilterApiDataIntoObject(filters: Array<SingleFilterType>) {
    return filters.reduce((state, currentFilter) => {
      return { ...state, [currentFilter.id]: currentFilter }
    }, {})
  }

  async function getFilters() {
    try {
      const { data } = await api.getFilters()
      const result = manipulateFilterApiDataIntoObject(data.filters)

      setFilters(result)
    } catch (err) {
      console.log(err)
    }
  }

  function handleOptionsChange(value: string) {
    console.log(value)
  }

  useEffectOnce(() => {
    getFilters()
  })

  useEffect(() => {
    if (Object.keys(filters).length) getFeaturedPlaylists()
  }, [filters, getFeaturedPlaylists])

  return (
    <Filter
      countries={filters?.country?.values ?? []}
      onChange={handleOptionsChange}
    />
  )
}

export default Home
