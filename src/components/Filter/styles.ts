import styled from 'styled-components'
import media from 'styled-media-query'

type Props = {
  deskWidth?: string
  mobileWidth?: string
}

export const Filter = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  text-align: center;
  padding: 2rem 2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.white};

  ${media.greaterThan('medium')`
      flex-direction: row;
      justify-content: space-between;
    `}
`

export const FormControl = styled.div<Props>`
  select,
  input {
    width: 100%;
    font-size: 1.8rem;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 0.7rem;
    outline: none;
    color: inherit;
  }

  option {
    color: ${({ theme }) => theme.color.dark};
  }

  ${media.greaterThan<Props>('medium')`
      width: ${({ deskWidth }) => deskWidth || '100%'};
    `}

  ${media.lessThan<Props>('medium')`
      margin: 2rem 0;
      width: ${({ mobileWidth }) => mobileWidth || '100%'};
    `}
`

export const Logo = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.white};

  ${media.greaterThan('medium')`
    font-size: 2.4rem;
  `}
`
