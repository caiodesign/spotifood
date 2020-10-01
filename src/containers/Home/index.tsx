/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { useEffectOnce } from 'react-use'

import Filter from 'components/Filter'
import Wrapper from 'components/Wrapper'
import PlaylistCard from 'components/PlaylistCard'
import Loading from 'components/Loading'
import useSpotify from 'contexts/spotify'
import api from 'api'

import * as S from './styles'

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
  const { getFeaturedPlaylists, playlists } = useSpotify()

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
  }, [filters])

  return (
    <>
      <Filter
        countries={filters?.country?.values ?? []}
        onChange={handleOptionsChange}
      />
      <S.Container>
        {playlists.length ? (
          <Wrapper title="Featured playlists">
            {playlists.map((playlist) => (
              <PlaylistCard
                url={playlist.external_urls.spotify}
                image={playlist.images[0].url}
                name={playlist.name}
                description={playlist.description}
              />
            ))}
          </Wrapper>
        ) : (
          <Loading />
        )}
      </S.Container>
    </>
  )
}

export default Home
