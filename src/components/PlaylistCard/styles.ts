import styled from 'styled-components'

export const Link = styled.a`
  text-decoration: none;
`

export const Card = styled.div`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  width: 100%;
  max-width: 18rem;
  padding: 1.4rem;
  display: inline-block;
  border-radius: 0.4rem;
`

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const PlaceholderImage = styled.img`
  width: 100%;
`

export const PlaylistImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
  margin: 1rem 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const Description = styled.p`
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 2.6rem;
`
