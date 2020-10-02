/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent } from 'react'
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
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <S.Filter>
      <S.Form onSubmit={handleSubmit}>
        <S.FormControl deskWidth="58%">
          <input
            id="search"
            name="search"
            placeholder="Search ..."
            onChange={onChange}
            data-testid="filter-input-search"
          />
        </S.FormControl>
        <S.FormControl deskWidth="41%">
          <select
            name="select"
            onChange={onChange}
            data-testid="filter-input-select"
          >
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
