import * as S from './styles'

function Navbar({ logo = 'Spotifood' }: { logo?: string }) {
  return (
    <S.Navbar>
      <S.Logo>{logo}</S.Logo>
    </S.Navbar>
  )
}

export default Navbar
