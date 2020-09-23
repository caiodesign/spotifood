import { withKnobs } from '@storybook/addon-knobs'
import Navbar from '.'

export default {
  title: 'Navbar',
  component: Navbar,
  decorators: [withKnobs]
}

export const Basic = () => <Navbar />
