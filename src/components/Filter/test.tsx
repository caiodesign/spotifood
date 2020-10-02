import { render, fireEvent, screen } from '@testing-library/react'
import { Theme } from '../../styles/theme'
import { ThemeProvider } from 'styled-components'

import Filter from '.'

const countries = [
  {
    value: 'AU',
    name: 'Australia'
  },
  {
    value: 'BR',
    name: 'Brasil'
  }
]

describe('<Filter />', () => {
  it('should call handleChange function when input text or select is changed', () => {
    const handleChange = jest.fn()
    render(
      <ThemeProvider theme={Theme}>
        <Filter countries={countries} onChange={handleChange} />
      </ThemeProvider>
    )

    fireEvent.change(screen.getByTestId('filter-input-search'), {
      target: { value: 'mock' }
    })

    fireEvent.change(screen.getByTestId('filter-input-select'), {
      target: { value: 'BR' }
    })

    expect(handleChange).toHaveBeenCalledTimes(2)
  })
})
