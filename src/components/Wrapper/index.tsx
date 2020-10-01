import * as S from './styles'

type Props = {
  title: string
  children: React.ReactNode
}

function Wrapper({ title, children }: Props) {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Children>{children}</S.Children>
    </>
  )
}

export default Wrapper
