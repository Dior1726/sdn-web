import ApiService from "./api.service"
import { TokenService } from "./token.service"

const signup_url = '/api/auth/sign-up'
const login_url = '/api/auth/sign-in'
const refresh_url = '/api/auth/refresh'

const UserService = {
  
  login(phone, code, password) {
    const requestData = {
      method: 'post',
      url: login_url,
      headers: {
        "phone": phone,
        "code": code,
        "password": password,
      }
    }

    return new Promise((resolve, reject) => {
      ApiService.customRequest(requestData)
        .then((response) => {
          TokenService.saveToken(response.data.user.accessToken)
          TokenService.saveRefreshToken(response.data.user.refreshToken)
          ApiService.setHeader()
          TokenService.savePhone(phone)
          
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  signUp(phone, code, password, iin) {
    
    const requestData = {
      method: 'post',
      url: signup_url,
      headers: {
        "phone": phone,
        "code": code,
        "password": password,
        "iin": iin
      }
    }

    return new Promise((resolve, reject) => {
      ApiService.customRequest(requestData)
        .then((response) => {
          TokenService.saveToken(response.data.user.accessToken)
          TokenService.saveRefreshToken(response.data.user.refreshToken)
          ApiService.setHeader()
          TokenService.savePhone(phone)
          
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async refreshToken() {
    const refreshToken = TokenService.getRefreshToken()

    const requestData = {
      method: 'post',
      url: refresh_url,
      headers: {
        "refreshToken": refreshToken
      }
    }

    try {
      const response = await ApiService.customRequest(requestData)

      TokenService.saveToken(response.data.user.accessToken)
      TokenService.saveRefreshToken(response.data.user.refreshToken)
      ApiService.setHeader()

      return response.data.user.accessToken
    } catch (error) {
        return error
    }

  },

  logout() {
    // Remove the token and remove Authorization header from Api Service as well 
    TokenService.removeToken()
    TokenService.removeRefreshToken()
    TokenService.removePhone()
    ApiService.removeHeader()
    
    // NOTE: Again, we'll cover the 401 Interceptor a bit later. 
    ApiService.unmount401Interceptor()
  }
}

export { UserService }