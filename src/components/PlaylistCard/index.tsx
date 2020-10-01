import * as S from './styles'

type Props = {
  name: string
  description: string
  image: string
  url: string
}

function PlaylistCard({ name, description, image, url }: Props) {
  return (
    <S.Link href={url} target="_BLANK">
      <S.Card>
        <S.Image>
          <img src={image} alt={`image of playlist ${name}`} />
        </S.Image>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Card>
    </S.Link>
  )
}

export default PlaylistCard
