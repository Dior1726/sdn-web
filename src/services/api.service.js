import axios from 'axios'
import { TokenService } from './token.service.js'
import Store from 'src/store/index.js'

const ApiService = {

  _401interceptor: null,

  init(baseURL) {
    axios.defaults.baseURL = baseURL
  },

  setHeader() {
    axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`
  },

  removeHeader() {
    axios.defaults.headers.common = []
  },

  get(resource) {
    return axios.get(resource)
  },

  post(resource, data) {
    return axios.post(resource, data)
  },
  
  put(resource, data) {
    return axios.put(resource, data)
  },

  delete(resource) {
    return axios.delete(resource)
  },

  customRequest(data) {
    return axios(data)
  },

  mount401Interceptor() {
    this._401interceptor = axios.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        if (error.request.status == 401) {
          if (error.config.url.includes('/api/auth/refresh')) {
            // Refresh token has failed. Logout the user
            Store.dispatch('user/logout')
            throw error
          } else {
            // Refresh the access token
            try{
              await Store.dispatch('user/refreshToken')
              // Retry the original request
              return this.customRequest({
                method: error.config.method,
                url: error.config.url,
                data: error.config.data
              })
            } catch (e) {
              // Refresh has failed - reject the original request
              throw error
            }
          }
        }

        // If error was not 401 just reject as is
        throw error
      }
    )
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._401interceptor)
  }
}

export default ApiService