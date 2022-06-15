const TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'
const PHONE_KEY = 'phone'
// const TOKEN = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3Nzc1MTQyODQyOSIsImlhdCI6MTY1NDc2MTAwMywiZXhwIjoxNzYyNzYxMDAzfQ.iu7E-ySr6vnagApkrTTaoMeMCtpy-kvwLJwSd2Ooqdqn51UkhG6nBXSaHxta7fA_svNj191dF_QVKG7p1_CZag'

const TokenService = {
  getPhone() {
    return localStorage.getItem(PHONE_KEY)
  },

  savePhone(phone) {
    localStorage.setItem(PHONE_KEY, phone)
  },

  removePhone() {
    localStorage.removeItem(PHONE_KEY)
  },

  getToken() {
    return localStorage.getItem(TOKEN_KEY)
  },

  saveToken(accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken)
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY)
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY)
  },

  saveRefreshToken(refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
  },

  removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  }
}

export { TokenService }