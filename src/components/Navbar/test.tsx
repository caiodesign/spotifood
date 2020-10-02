import { render, screen } from '@testing-library/react'
import { Theme } from '../../styles/theme'
import { ThemeProvider } from 'styled-components'

import Navbar from '.'

describe('<Navbar />', () => {
  it('should render the Navbar', () => {
    render(
      <ThemeProvider theme={Theme}>
        <Navbar logo="test" />
      </ThemeProvider>
    )

    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})
