import { withKnobs } from '@storybook/addon-knobs'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  decorators: [withKnobs]
}

export const Basic = () => <Footer />
