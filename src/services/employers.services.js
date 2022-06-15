import ApiService from "./api.service"

const EmployerServices = {
  
  getEmployerList(phone) {
    const requestData = {
      method: 'get',
      url: '/api/admin/employer/get',
      headers: {
        "userPhone": phone,
        "projectName": ""
      }
    }

    return new Promise((resolve, reject) => {
      ApiService.customRequest(requestData)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  createEmployer({phone, data}) {
    const requestData = {
      method: 'post',
      url: '/api/admin/employer/add',
      headers: {
        "userPhone": phone,
      },
      data: data
    }

    return new Promise((resolve, reject) => {
      ApiService.customRequest(requestData)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  updateEmployer({phone, userId, data}) {
    const requestData = {
      method: 'put',
      url: '/api/admin/employer/change',
      headers: {
        "userPhone": phone,
        "userId": userId
      },
      data: data
    }

    return new Promise((resolve, reject) => {
      ApiService.customRequest(requestData)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  deleteEmployer({phone, id}) {
    const requestData = {
      method: 'delete',
      url: '/api/admin/employer/delete',
      headers: {
        "userPhone": phone,
        "userId": id
      }
    }

    return new Promise((resolve, reject) => {
      ApiService.customRequest(requestData)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  updateEmployerAppointment({phone, userId, appointmentId}) {
    const requestData = {
      method: 'put',
      url: '/api/admin/employer/change-appointment',
      headers: {
        "userPhone": phone,
        "userId": userId,
        "appointmentId": appointmentId
      }
    }

    return new Promise((resolve, reject) => {
      ApiService.customRequest(requestData)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  addEmployerToProject({phone, userId, projectId}) {
    const requestData = {
      method: 'put',
      url: '/api/admin/employer/add-project',
      headers: {
        "userPhone": phone,
        "userId": userId,
        "projectId": projectId
      }
    }

    return new Promise((resolve, reject) => {
      ApiService.customRequest(requestData)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  deleteEmployerFromProject({phone, userId, projectId}) {
    const requestData = {
      method: 'delete',
      url: '/api/admin/employer/delete-project',
      headers: {
        "userPhone": phone,
        "userId": userId,
        "projectId": projectId
      }
    }

    return new Promise((resolve, reject) => {
      ApiService.customRequest(requestData)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  banEmployer({phone, id}) {
    const requestData = {
      method: 'put',
      url: '/api/admin/employer/bane',
      headers: {
        "userPhone": phone,
        "userId": id,
      }
    }

    return new Promise((resolve, reject) => {
      ApiService.customRequest(requestData)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

}

export default EmployerServices