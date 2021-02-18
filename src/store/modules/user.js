import axios from 'axios'
const modulUsers = {
  namespaced: true,
  state: () => {
    return {
      id: localStorage.getItem('id') || null,
      room_id: localStorage.getItem('roomID') || null,
      name: localStorage.getItem('name') || '',
      token: localStorage.getItem('token') || null,
      userDetails: {}
    }
  },
  mutations: {
    setRoomID (state, payload) {
      state.room_id = payload
    },
    setName (state, payload) {
      state.name = payload
    },
    setID (state, payload) {
      state.id = payload
    },
    setToken (state, payload) {
      state.token = payload
    },
    setUserDetail (state, payload) {
      state.userDetails = payload
    }
  },
  actions: {
    registerUsers (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.staticURL}/register`, data).then((response) => {
          resolve(response.data.msg)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    loginUsers (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.staticURL}/login`, data).then((response) => {
          // console.log(response.data)
          resolve(response.data)
          localStorage.setItem('roomID', response.data.data.room_id)
          localStorage.setItem('name', response.data.data.name)
          localStorage.setItem('id', response.data.data.id)
          localStorage.setItem('token', response.data.token)
          context.commit('setRoomID', response.data.data.room_id)
          context.commit('setName', response.data.data.name)
          context.commit('setID', response.data.data.id)
          context.commit('setToken', response.data.token)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    logoutUser (context) {
      return new Promise((resolve) => {
        localStorage.removeItem('roomID')
        localStorage.removeItem('name')
        localStorage.removeItem('id')
        localStorage.removeItem('token')
        context.commit('setRoomID', null)
        context.commit('setName', '')
        context.commit('setID', null)
        context.commit('setToken', null)
        resolve(true)
      })
    },
    detailUser (context) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.rootState.staticURL}/user/${context.state.id}`, { headers: { token: context.state.token } })
          .then((response) => {
            context.commit('setUserDetail', response.data.data)
            resolve(response.data.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updateUser (context, data) {
      return new Promise((resolve, reject) => {
        axios.patch(`${context.rootState.staticURL}/profile/${context.state.id}`, data, { headers: { token: context.state.token } }).then((response) => {
          resolve(response.data.msg)
        }).catch((err) => {
          reject(err)
        })
      })
    }
  },
  getters: {
    getRoomID: state => state.room_id,
    getName: state => state.name,
    getIDUser: state => state.id,
    getToken: state => state.token,
    getUserDetail: state => state.userDetails
  }
}
export default modulUsers
