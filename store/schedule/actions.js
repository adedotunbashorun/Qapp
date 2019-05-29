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
  ALL_RESPONSES_FAILURE,
  ALL_ARCHIEVE,
  ALL_ARCHIEVE_SUCCESS,
  ALL_ARCHIEVE_FAILURE,
  TOTAL,
  TOTAL_REPLIED,
  TOTAL_SENT,
  ERROR_MSG
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

  allUserSchedules({ commit }, [payload,header]) {
    // commit(ALL_SCHEDULES)
    return new Promise((resolve, reject) => {
      Api.Schedule.userSchedules(payload,header).then(response => {
        commit(TOTAL, response.data)
        resolve(response)
      }).catch(err => {
        commit(ERROR_MSG, err)
        reject(err)
      })
    })
  },

  allUserSentSchedules({ commit }, [payload,header]) {
    // commit(ALL_SCHEDULES)
    return new Promise((resolve, reject) => {
      Api.Schedule.userSchedulesSent(payload, header).then(response => {
        commit(TOTAL_SENT, response.data)
        resolve(response)
      }).catch(err => {
        commit(ERROR_MSG, err)
        reject(err)
      })
    })
  },

  allUserRepliedSchedules({ commit }, [payload,header]) {
    // commit(ALL_SCHEDULES)
    return new Promise((resolve, reject) => {
      Api.Schedule.userSchedulesReplied(payload, header).then(response => {
        commit(TOTAL_REPLIED, response.data)
        resolve(response)
      }).catch(err => {
        commit(ERROR_MSG, err)
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

  allArchieve({ commit }, header) {
    commit(ALL_ARCHIEVE)
    return new Promise((resolve, reject) => {
      Api.Response.allArchieve(header).then(response => {
        commit(ALL_ARCHIEVE_SUCCESS, response.data)
        resolve(response)
      }).catch(err => {
        commit(ALL_ARCHIEVE_FAILURE, err)
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

  allCounts({ commit },header) {
    return new Promise((resolve, reject) => {
      Api.Response.allCount(header).then( response => {
        resolve(response)
      }).catch(err => {
        reject(err)
      })
    })
  },


}


