
import {
  SCHEDULE_BY_ID,
  SCHEDULE_BY_ID_SUCCESS,
  SCHEDULE_BY_ID_FAILURE,
  ALL_SCHEDULES,
  ALL_SCHEDULES_SUCCESS,
  ALL_SCHEDULES_FAILURE,
  ALL_USER_SCHEDULES,
  ALL_USER_SCHEDULES_SUCCESS,
  ALL_USER_SCHEDULES_FAILURE,
  ALL_RESPONSES,
  ALL_RESPONSES_SUCCESS,
  ALL_RESPONSES_FAILURE
} from './mutation-types'

export const mutations = {
  
  [ALL_SCHEDULES] (state) {
    state.showLoader = true
  },
  [ALL_SCHEDULES_SUCCESS] (state, payload) {
    state.showLoader = false
    state.categories = payload.categories
  },
  [ALL_SCHEDULES_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.categories = []
  },

  [ALL_RESPONSES](state) {
    state.showLoader = true
  },
  [ALL_RESPONSES_SUCCESS](state, payload) {
    state.showLoader = false
    state.responses = payload.responses
  },
  [ALL_RESPONSES_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.responses = []
  },

  [ALL_USER_SCHEDULES](state) {
    state.showLoader = true
  },
  [ALL_USER_SCHEDULES_SUCCESS](state, payload) {
    state.showLoader = false
    state.categories = payload.categories
  },
  [ALL_USER_SCHEDULES_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.categories = []
  },

  [SCHEDULE_BY_ID] (state) {
    state.showLoader = true
  },
  [SCHEDULE_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
  },
  [SCHEDULE_BY_ID_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
  }
}


