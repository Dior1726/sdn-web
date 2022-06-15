import AppointmentService from "src/services/appoitment.service"
import router from 'src/router'

const state = {
  appointmentList: null,
  roleList: null
}

const getters = {
  appointmentList: state => state.appointmentList,
  roleList: state => state.roleList
}

const actions = {
  getAppointmentList({commit}, payload) {
    AppointmentService.getAppointmentList(payload)
      .then((response) => {
        commit('SET_APPOINTMENT_LIST', response.data.appointmentList)
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
  },

  getRolesList({commit}, {phone}) {
    AppointmentService.getRolesList(phone)
      .then((response) => {
        commit('SET_ROLES_LIST', response.data.roleList)
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  },

  createAppointment({commit}, payload) {
    AppointmentService.createAppointment(payload)
      .then(() => {
        router.push('/add_position_page')
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
  },

  deleteAppointment({commit}, payload) {
    AppointmentService.deleteAppointment(payload)
      .then(() => {
        commit('DELETE_APPOINTMENT', payload.id)
      })
      .catch((error) => {
        alert(error.response.data);
      })
  },

  updateAppointmentText({commit}, payload) {
    AppointmentService.updateAppointmentText(payload)
      .then(() => {
        router.go(-1)
      })
      .catch((error) => {
        console.log(error.response);
      })
  },

  updateAppointmentRoles({commit}, payload) {
    AppointmentService.updateAppointmentRoles(payload)
      .then(() => {
        router.go(-1)
      })
      .catch((error) => {
        console.log(error.response);
      })
  }
}

const mutations = {
  SET_APPOINTMENT_LIST(state, payload) {
    state.appointmentList = payload
  },
  SET_ROLES_LIST(state, payload) {
    state.roleList = payload
  },
  DELETE_APPOINTMENT(state, id) {
    const filteredList = state.appointmentList.filter((item) => item.id !== id)
    state.appointmentList = filteredList
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}