import ProjectService from "src/services/projects.service"

const state = {
  projectList: null
}

const getters = {
  projects: state => state.projectList
}

const actions = {
  getProjectList({commit}, payload) {
    ProjectService.getProjectList(payload)
      .then((response) => {
        // console.log(response)
        commit('SET_PROJECTS', response.data.projectList)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  createProject({commit, dispatch}, payload) {
    ProjectService.createProject(payload)
      .then(() => {
        dispatch('getProjectList', payload.phone)
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
  },

  deleteProject({commit}, payload) {
    ProjectService.deleteProject(payload)
      .then(() => {
        commit('DELETE_PROJECT', payload.id)

      })
      .catch((error) => {
        alert(error.response.data);
      })
  },

  updateProject({commit, dispatch}, payload) {
    ProjectService.updateProject(payload)
      .then(() => {
        dispatch('getProjectList', payload.phone)
      })
      .catch((error) => {
        console.log(error);
      })
  },

  uploadProjectPhoto({commit}, payload) {
    ProjectService.uploadProjectPhoto(payload)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      })
  }
}

const mutations = {
  SET_PROJECTS(state, payload) {
    state.projectList = payload
  },
  DELETE_PROJECT(state, id) {
    const filteredList = state.projectList.filter((item) => item.id !== id)
    state.projectList = filteredList
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}