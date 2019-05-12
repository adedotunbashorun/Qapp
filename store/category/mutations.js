
import {
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  CATEGORY_BY_ID,
  CATEGORY_BY_ID_SUCCESS,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  REMOVE_CATEGORY,
  REMOVE_CATEGORY_SUCCESS,
  REMOVE_CATEGORY_FAILURE,
  ALL_CATEGORYS,
  ALL_CATEGORYS_SUCCESS,
  LOGIN_SUCCESS,
  ERROR_MSG,
  CATEGORY_BY_ID_FAILURE,
  ALL_CATEGORYS_FAILURE,
} from './mutation-types'

export const mutations = {
  [ALL_CATEGORYS] (state) {
    state.showLoader = true
  },
  [ALL_CATEGORYS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.categories = payload.categories
  },
  [ALL_CATEGORYS_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.categories = []
  },

  [CATEGORY_BY_ID] (state) {
    state.showLoader = true
  },
  [CATEGORY_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false,
    state.category = payload.category
  },
  [CATEGORY_BY_ID_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.token = ''
    state.category = ''
  },
  [ADD_CATEGORY]: (state, payload) => {
    state.showLoader = true
  },
  [ADD_CATEGORY_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.categories.push(payload)
  },
  [UPDATE_CATEGORY]: (state, payload) => {
    state.showLoader = true
  },
  [UPDATE_CATEGORY_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.category = payload.category
  },
  [REMOVE_CATEGORY]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_CATEGORY_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.categories.findIndex(CATEGORY => CATEGORY._id === payload)
    console.debug('index', index)
    state.categories.splice(index, 1)
  },
  [REMOVE_CATEGORY_FAILURE]: (state, payload) => {
    state.showLoader = false
  },
  [ERROR_MSG] (state, payload) {}
}


