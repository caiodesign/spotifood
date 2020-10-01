import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import withGlobalStyles from './withGlobalStyles'
import { Theme } from '../src/styles/theme'

addDecorator(withGlobalStyles)
addDecorator(story => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
))
