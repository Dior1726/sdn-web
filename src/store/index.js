import Vue from 'vue'
import Vuex from 'vuex'

// modules
import user from './user.js'
import appointment from './appointment.js'
import project from './project.js'
import employer from './employer.js'

Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {
    user,
    appointment,
    project,
    employer
  },
  strict: process.env.DEBUGGING
})

export default Store