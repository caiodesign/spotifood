import { render, screen } from '@testing-library/react'
import { Theme } from '../../styles/theme'
import { ThemeProvider } from 'styled-components'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer', () => {
    render(
      <ThemeProvider theme={Theme}>
        <Footer />
      </ThemeProvider>
    )

    expect(screen.getByText(/developed by/i)).toBeInTheDocument()
  })
})
