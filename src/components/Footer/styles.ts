import styled from 'styled-components'

export const Footer = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
  padding: 1.8rem 0;
`

export const Copyright = styled.div`
  padding-left: 2rem;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.1rem;
  font-weight: lighter;

  a {
    color: ${({ theme }) => theme.color.green};
    text-decoration: none;
    font-weight: 500;
  }
`
