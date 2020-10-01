import { withKnobs } from '@storybook/addon-knobs'
import Filter from '.'

export default {
  title: 'Filter',
  component: Filter,
  decorators: [withKnobs]
}

const countries = [
  {
    value: 'AU',
    name: 'Australia'
  },
  {
    value: 'DE',
    name: 'Alemanhã'
  },
  {
    value: 'BR',
    name: 'Brasil'
  }
]

export const Basic = () => (
  <Filter
    countries={countries}
    onChange={(event) => console.log(event.target.value)}
  />
)
