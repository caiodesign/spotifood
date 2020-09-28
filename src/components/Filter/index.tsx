/* eslint-disable @typescript-eslint/no-explicit-any */
import FormControl from '@material-ui/core/FormControl'
import {
  Select,
  InputLabel,
  MenuItem,
  Input,
  InputAdornment
} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'

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
  return (
    <S.Filter>
      <FormControl>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        <InputLabel id="countries-label">Countries</InputLabel>
        {countries.length && (
          <Select
            labelId="countries-label"
            onChange={(e) => onChange(e.target.value)}
          >
            {countries.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        )}
      </FormControl>
    </S.Filter>
  )
}

export default Filter
