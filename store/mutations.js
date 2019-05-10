
import {
  ADD_USER,
  ADD_USER_SUCCESS,
  USER_BY_ID,
  USER_BY_ID_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  REMOVE_USER,
  REMOVE_USER_SUCCESS,
  ALL_USERS,
  ALL_USERS_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  ERROR_MSG
} from './mutation-types'

export const userMutations = {
  [ALL_USERS] (state) {
    state.showLoader = true
  },
  [ALL_USERS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.users = payload
  },
  [LOGIN](state) {
    state.showLoader = true
  },
  [LOGIN_SUCCESS](state, payload) {
    state.showLoader = false
    state.user = payload
    state.token = payload.token
  },
  [USER_BY_ID] (state) {
    state.showLoader = true
  },
  [USER_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
    state.user = payload
  },
  [ADD_USER]: (state, payload) => {
    state.showLoader = true
  },
  [ADD_USER_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.users.push(payload)
  },
  [UPDATE_USER]: (state, payload) => {
    state.showLoader = true
  },
  [UPDATE_USER_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.users = state.users.map(p => {
      if (p._id === payload._id) {
        return payload
      }
      return p
    })
  },
  [REMOVE_USER]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_USER_SUCCESS]: (state, payload) => {
    state.showLoader = false
  },
  [ERROR_MSG] (state, payload) {}
}


