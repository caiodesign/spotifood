import { withKnobs, text } from '@storybook/addon-knobs'
import PlaylistCard from '.'

export default {
  title: 'PlaylistCard',
  component: PlaylistCard,
  decorators: [withKnobs]
}

const description =
  'Aenean euismod arcu sagittis leo viverra, sit amet faucibus mauris tristique. Donec rutrum lobortis vulputate. Praesent eget magna eu nulla tincidunt maximus. Phasellus eget enim tristique, facilisis risus nec, porta massa. Morbi a ex ex. Nulla tincidunt tellus ut eros cursus lacinia. Sed dolor est, dignissim sed turpis non, dignissim varius dui.'

export const Basic = () => (
  <PlaylistCard
    name={text('name', 'storybook')}
    description={text('description', description)}
    image={text('image', 'https://via.placeholder.com/640')}
    url={text(
      'url',
      'https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U'
    )}
  />
)
