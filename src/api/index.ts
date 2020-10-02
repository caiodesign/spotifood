import apiGateway from 'config/api-gateway'
import axios from 'axios'
import qs from 'querystring'

import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from 'config/constants'

export type FeaturedPlaylists = {
  name?: string
  token: string
  locale?: string
  country?: string
  timestamp?: string
  limit?: string
  offset?: string
}

export type SpotifyAccessToken = {
  code: string
  redirectUri?: string
}

export default {
  getFilters: async () => await apiGateway.get('/filters'),
  getFeaturedPlaylists: async ({
    token,
    locale,
    country,
    timestamp,
    limit,
    offset
  }: FeaturedPlaylists) =>
    await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        locale,
        country,
        timestamp,
        limit,
        offset
      }
    }),
  getSpotifyAccessToken: async ({ code, redirectUri }: SpotifyAccessToken) =>
    await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri || REDIRECT_URI
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`
        }
      }
    ),
  getPlaylistsByName: async ({ token, name }: FeaturedPlaylists) =>
    await axios.get('https://api.spotify.com/v1/search', {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        q: name ? encodeURI(name) : '',
        type: 'playlist'
      }
    })
}
