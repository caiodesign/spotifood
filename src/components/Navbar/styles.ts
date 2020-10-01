import styled from 'styled-components'
import media from 'styled-media-query'

export const Navbar = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
  text-align: center;
  padding: 1.4rem 0;
`

export const Logo = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.white};

  ${media.greaterThan('medium')`
    font-size: 2.4rem;
  `}
`
