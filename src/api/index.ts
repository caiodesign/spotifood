import apiGateway from 'config/api-gateway'
import axios from 'axios'

export default {
  getFilters: async () => await apiGateway.get('/filters'),
  getFeaturedPlaylists: async (token: string) =>
    await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: { Authorization: `Bearer ${token}` }
    })
}
