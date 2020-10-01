import { withKnobs } from '@storybook/addon-knobs'
import Loading from '.'

export default {
  title: 'Loading',
  component: Loading,
  decorators: [withKnobs]
}

export const Basic = () => <Loading />
