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
        <S.ImageWrapper>
          <S.PlaceholderImage
            src="/img/playlist-image-placeholder.jpg"
            alt="a image with purple background with 3 white squares inside each other on center. Used only to fill an empty space"
          />
          <S.PlaylistImage src={image} alt={`image of playlist ${name}`} />
        </S.ImageWrapper>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Card>
    </S.Link>
  )
}

export default PlaylistCard
