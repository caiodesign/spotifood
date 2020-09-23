import * as S from './styles'

type Props = {
  countries: Array<Country>
  onClick: () => void
}

type Country = {
  value: string
  name: string
}

function Filter({ countries, onClick }: Props) {
  function renderCountriesFlags() {
    return countries.map((country: Country) => (
      <div onClick={onClick}>
        <img
          src={`https://www.countryflags.io/${country.value}/flat/64.png`}
        ></img>
      </div>
    ))
  }

  return <S.Filter>{renderCountriesFlags()}</S.Filter>
}

export default Filter
