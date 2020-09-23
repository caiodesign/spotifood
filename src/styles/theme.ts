import { DefaultTheme } from 'styled-components'

type color = {
  dark: string
  black: string
  green: string
  pink: string
  white: string
  grey: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    font: string
    color: color
  }
}

export const Theme: DefaultTheme = {
  font: "'Roboto', sans-serif;",
  color: {
    dark: '#12192c',
    black: '#171e31',
    green: '#171e31',
    pink: '#171e31',
    white: '#fafafa',
    grey: '#9ea4b4'
  }
}
