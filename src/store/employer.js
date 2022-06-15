import EmployerServices from "src/services/employers.services"
import router from 'src/router'

const state = {
  employerList: null,
  employerProjectList:null,
  currentEmployer: null,
}

const getters = {
  employers: state => state.employerList,
  employerProjects: state => state.employerProjectList,
  currentEmployer: state => state.currentEmployer
}

const actions = {
  getEmployerList({commit}, payload) {
    EmployerServices.getEmployerList(payload) 
      .then((response) => {
        commit('SET_EMPLOYERS', response.data.employerList)
      })
      .catch((error) => {
        console.log(error);
      })
  },

  createEmployer({commit}, payload) {
    EmployerServices.createEmployer(payload)
      .then(() => {
        router.push('/employer_control_page')
      })
      .catch((error) => {
        console.log(error)
      })
  },

  deleteEmployer({commit}, payload) {
    EmployerServices.deleteEmployer(payload)
      .then(() => {
        router.go(-1)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  },

  banEmployer({commit}, payload) {
    EmployerServices.banEmployer(payload)
      .then(() => {
        router.go(-1)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  },

  updateEmployer({commit}, payload) {
    EmployerServices.updateEmployer(payload)
      .then(() => {
        commit('UPDATE_EMPLOYER', payload.data)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  },

  updateEmployerAppointment({commit}, payload) {
    EmployerServices.updateEmployerAppointment(payload)
      .then(() => {
        commit('SET_EMPLOYER_APPOINTMENT', payload.appointment)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  },

  addEmployerToProject({commit}, payload) {
    EmployerServices.addEmployerToProject(payload)
      .then(() => {
        commit('ADD_EMPLOYER_TO_PROJECT', payload.project)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  },

  deleteEmployerFromProject({commit}, payload) {
    EmployerServices.deleteEmployerFromProject(payload)
      .then(() => {
        commit('DELETE_EMPLOYER_FROM_PROJECT', payload.projectId)
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }
}

const mutations = {
  SET_EMPLOYERS(state, payload) {
    state.employerList = payload
  },
  
  SET_EMPLOYER_PROJECT(state, payload) {
    state.employerProjectList = payload
  },
  
  DELETE_EMPLOYER_FROM_PROJECT(state, payload) {
    state.employerProjectList = state.employerProjectList.filter((item) => item.id !== payload)
  },
  
  ADD_EMPLOYER_TO_PROJECT(state, payload) {
    state.employerProjectList.push(payload)
  },

  SET_CURRENT_EMPLOYER(state, payload) {
    state.currentEmployer = payload
  },

  UPDATE_EMPLOYER(state, payload) {
    state.currentEmployer = {...state.currentEmployer, ...payload}
  },

  SET_EMPLOYER_APPOINTMENT(state, payload) {
    state.currentEmployer.appointment = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}