import styled from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.green};
  font-size: 2.3rem;
  margin-bottom: 1.4rem;
  font-weight: 600;
`

export const Children = styled.div`
  grid-auto-rows: auto;
  display: grid;
  grid-gap: 16px;

  ${media.greaterThan('medium')`
      grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    `}

  ${media.lessThan('medium')`
      grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    `}
`
