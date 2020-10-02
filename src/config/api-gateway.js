import { create } from 'axios'

export default create({
  baseURL: `${process.env.host}/api`,
  withCredentials: false
})
