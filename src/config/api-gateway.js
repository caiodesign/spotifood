import { create } from 'axios'

export default create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: false
})
