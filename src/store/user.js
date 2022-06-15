import { TokenService } from 'src/services/token.service'
import { UserService } from 'src/services/user.service'
import router from 'src/router'

const state = {
  user: null,
  pages: null,
  
  accessToken: TokenService.getToken(),
  refreshTokenPromise: null
}

const getters = {
  pages: state => {
    return state.pages
  },

  loggedIn: state => {
    return state.accessToken ? true : false
  },

  authenticationErrorCode: state => {
    return state.authenticationErrorCode
  },

  authenticationError: state => {
    return state.authenticationError
  },

  authenticating: state => {
    return state.authenticating
  }
}

const actions = {
  
  login({ commit }, { phone, code, password }) {
    commit('loginRequest')

    UserService.login(phone, code, password)
      .then((response) => {
        console.log(response)
        router.push('/main_page')
        commit('SET_USER', response.data.user)
        commit('loginSuccess', response.data.user.accessToken)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  signUp({commit}, {phone, code, password, iin}) {
    UserService.signUp(phone, code, password, iin)
      .then((response) => {
        router.push('/main_page')
        commit('SET_USER', response.data.user)
        commit('loginSuccess', response.data.user.accessToken)
      })
      .catch((error) => {
        console.log(error.response.data);
      })

  },

  logout({ commit }) {
    UserService.logout()
    commit('logoutSuccess')
    router.push('/login')
  },

  refreshToken({ commit, state }) {
    // If this is the first time the refreshToken has been called, make a request
    // otherwise return the same promise to the caller
    if(!state.refreshTokenPromise) {
      const p = UserService.refreshToken()
      commit('refreshTokenPromise', p)

      // Wait for the UserService.refreshToken() to resolve. On success set the token and clear promise
      // Clear the promise on error as well.
      p.then(
        response => {
          commit('refreshTokenPromise', null)
          commit('loginSuccess', response)
        },
        error => {
          commit('refreshTokenPromise', null)
        }
      )
    }

    return state.refreshTokenPromise
  }
}

const mutations = {
  SET_USER(state, payload) {
    state.user = payload
    state.access_token = payload.accessToken
    state.refresh_token = payload.refreshToken
  },

  SET_PAGES(state, payload) {
    state.pages = payload
  },

  RESET_USER(state) {
    state.user = null
    state.pages = null
    state.access_token = null
    state.refresh_token = null
  },

  loginRequest(state) {
    state.authenticating = true;
    state.authenticationError = ''
    state.authenticationErrorCode = 0
  },

  loginSuccess(state, payload) {
    state.accessToken = payload
    state.authenticating = false;
  },

  loginError(state, {errorCode, errorMessage}) {
    state.authenticating = false
    state.authenticationErrorCode = errorCode
    state.authenticationError = errorMessage
  },

  logoutSuccess(state) {
    state.accessToken = ''
  },

  refreshTokenPromise(state, promise) {
    state.refreshTokenPromise = promise
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}