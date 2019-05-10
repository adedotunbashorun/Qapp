import { Api } from '../api'

import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  USER_BY_ID,
  USER_BY_ID_SUCCESS,
  USER_BY_ID_FAILURE,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  REMOVE_USER,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILURE,
  ALL_USERS,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAILURE,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './mutation-types'

export const userActions = {
  allUsers ({commit}) {
    commit(ALL_USERS)
    Api.User.allUser().then( response => {
      commit(ALL_USERS_SUCCESS,response.data)
    }).catch(err => {
      commit(ALL_USERS_FAILURE, err)
    })
  },
  login({commit},payload) {
    commit(LOGIN)
    Api.User.login().then(response => {
      commit(LOGIN_SUCCESS, response.data)
    }).catch(err => {
      commit(LOGIN_FAILURE, err)
    })
  },
  userById ({commit}, payload) {
    commit(USER_BY_ID)
    Api.User.userById(payload).then(response => {
      commit(USER_BY_ID_SUCCESS, response.data)
    }).catch(err => {
      commit(USER_BY_ID_FAILURE, err)
    })
    
  },
  addUser ({commit}, payload) {
    commit(ADD_USER)
    Api.User.register(payload).then(response => {
      commit(ADD_USER_SUCCESS, response.data)
    }).catch(err => {
      commit(ADD_USER_FAILURE, err)
    })
  },
  updateUser ({commit}, payload) {
    commit(UPDATE_USER)
    Api.User.update(payload).then(response => {
      commit(UPDATE_USER_SUCCESS, response.data)
    }).catch(err => {
      commit(UPDATE_USER_FAILURE, err)
    })    
  },
  removeUser ({commit}, payload) {
    commit(REMOVE_USER)
    Api.User.deleteUser(payload).then(response => {
      commit(REMOVE_USER_SUCCESS, response.data)
    }).catch(err => {
      commit(REMOVE_USER_FAILURE, err)
    })  
  }
}


