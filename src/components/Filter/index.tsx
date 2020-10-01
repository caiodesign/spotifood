/* eslint-disable @typescript-eslint/no-explicit-any */
import { SyntheticEvent } from 'react'
import * as S from './styles'

type Props = {
  countries: Array<CountryType>
  onChange: (arg: any) => void
}
export type CountryType = {
  value: string
  name: string
}

function Filter({ countries, onChange }: Props) {
  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()
  }

  return (
    <S.Filter>
      <S.Form onSubmit={handleSubmit}>
        <S.FormControl deskWidth="58%">
          <input id="search" placeholder="Search ..." />
        </S.FormControl>
        <S.FormControl deskWidth="41%">
          <select>
            <option value="all">All countries</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.name}
              </option>
            ))}
          </select>
        </S.FormControl>
      </S.Form>
    </S.Filter>
  )
}

export default Filter
