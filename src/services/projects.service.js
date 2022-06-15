import ApiService from "./api.service"


const ProjectService = {
  
  getProjectList(phone) {
    const requestData = {
      method: 'get',
      url: '/api/admin/projects/get',
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

  createProject({phone, data}) {
    const requestData = {
      method: 'post',
      url: '/api/admin/projects/add',
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

  deleteProject({phone, id}) {
    const requestData = {
      method: 'delete',
      url: '/api/admin/projects/delete',
      headers: {
        "userPhone": phone,
        "projectId": id
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

  updateProject({phone, data, id}) {
    const requestData = {
      method: 'put',
      url: '/api/admin/projects/change',
      headers: {
        "userPhone": phone,
        "projectId": id
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

  uploadProjectPhoto({phone, projectId, photoNumber, file}) {

    let formData = new FormData();
    formData.append('projectPhoto', file)

    const requestData = {
      method: 'post',
      url: '/api/admin/projects/upload/photo',
      headers: {
        'Content-Type': 'multipart/form-data',
        "userPhone": phone,
        "projectId": projectId,
        "photoNumber": 1
      },
      data: formData,
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

export default ProjectService