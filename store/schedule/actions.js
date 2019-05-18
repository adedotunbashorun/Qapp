import { Api } from '../../api'

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

export const actions = {
  allSchedules({ commit }, header) {
    commit(ALL_SCHEDULES)
    return new Promise((resolve, reject) => {
      Api.Schedule.allSchedules(header).then( response => {
        commit(ALL_SCHEDULES_SUCCESS,response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_SCHEDULES_FAILURE, err)
        reject(err)
      })
    })
  },

  allResponse({ commit }, header) {
    commit(ALL_RESPONSES)
    return new Promise((resolve, reject) => {
      Api.Response.allResponse(header).then(response => {
        commit(ALL_RESPONSES_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_RESPONSES_FAILURE, err)
        reject(err)
      })
    })
  },

  scheduleById({ commit }, [payload,header]) {
    commit(SCHEDULE_BY_ID)
    return new Promise((resolve, reject) => {
      Api.Schedule.scheduleById(payload, header).then(response => {
        commit(SCHEDULE_BY_ID_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(SCHEDULE_BY_ID_FAILURE, err)
        reject(err)
      })
    })    
  },

  userSchedules ({commit}, [payload,header]) {
    commit(ALL_USER_SCHEDULES)
    return new Promise((resolve, reject) => {
      Api.Schedule.userSchedules(payload,header).then(response => {
        commit(ALL_USER_SCHEDULES_SUCCESS, response.data)
        resolve(response)      
      }).catch(err => {
        commit(ALL_USER_SCHEDULES_FAILURE, err)
        reject(err)
      })
    })
  },

  
}


