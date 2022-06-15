import ApiService from "./api.service"

const AppointmentService = {

  getAppointmentDetails(phone, id) {
    const requestData = {
      method: 'get',
      url: '/api/admin/appointment/get-details',
      headers: {
        "userPhone": phone,
        "appointmentId": id
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

  getAppointmentList(phone) {
    const requestData = {
      method: 'get',
      url: '/api/admin/appointment/get',
      headers: {
        "userPhone": phone,
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

  getRolesList(phone) {
    const requestData = {
      method: 'get',
      url: '/api/admin/appointment/roles/get',
      headers: {
        "userPhone": phone,
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

  createAppointment({phone, data}) {
    const requestData = {
      method: 'post',
      url: '/api/admin/appointment/add',
      headers: {
        "userPhone": phone,
      },
      data: {...data, isActive: true}
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

  deleteAppointment({phone, id}) {
    const requestData = {
      method: 'delete',
      url: '/api/admin/appointment/delete',
      headers: {
        "userPhone": phone,
        "appointmentId": id
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

  updateAppointmentText({phone, data}) {
    const requestData = {
      method: 'put',
      url: '/api/admin/appointment/change',
      headers: {
        "userPhone": phone,
        "appointmentId": data.id
      },
      data: {...data}
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

  updateAppointmentRoles({phone, id, roles}) {
    const requestData = {
      method: 'put',
      url: '/api/admin/appointment/change-roles',
      headers: {
        "userPhone": phone,
        "appointmentId": id
      },
      data: roles
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

export default AppointmentService