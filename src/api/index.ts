import apiGateway from 'config/api-gateway'

export default {
  getFilters: async () => await apiGateway.get('/filters')
}
