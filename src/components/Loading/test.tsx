import { render, screen } from '@testing-library/react'
import { Theme } from '../../styles/theme'
import { ThemeProvider } from 'styled-components'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the Loading', () => {
    render(
      <ThemeProvider theme={Theme}>
        <Loading />
      </ThemeProvider>
    )

    expect(screen.getByText(/Loading .../i)).toBeInTheDocument()
  })
})
