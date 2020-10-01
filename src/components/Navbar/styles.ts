import styled from 'styled-components'
import media from 'styled-media-query'

export const Navbar = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
  padding: 1.8rem 0;
`

export const Logo = styled.div`
  padding-left: 2rem;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.color.green};
  font-weight: bold;

  ${media.greaterThan('medium')`
    font-size: 3rem;
  `}
`
