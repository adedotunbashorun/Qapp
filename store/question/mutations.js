
import {
  ADD_QUESTION,
  ADD_QUESTION_SUCCESS,
  QUESTION_BY_ID,
  QUESTION_BY_ID_SUCCESS,
  UPDATE_QUESTION,
  UPDATE_QUESTION_SUCCESS,
  REMOVE_QUESTION,
  REMOVE_QUESTION_SUCCESS,
  REMOVE_QUESTION_FAILURE,
  ALL_QUESTIONS,
  ALL_QUESTIONS_SUCCESS,
  ERROR_MSG,
  QUESTION_BY_ID_FAILURE,
  ALL_QUESTIONS_FAILURE,
  UPDATE_QUESTION_FAILURE,
  ADD_QUESTION_FAILURE,
} from './mutation-types'

export const mutations = {
  [ALL_QUESTIONS] (state) {
    state.showLoader = true
  },
  [ALL_QUESTIONS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.questions = payload.questions
  },
  [ALL_QUESTIONS_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
    state.questions = []
  },

  [QUESTION_BY_ID] (state) {
    state.showLoader = true
  },
  [QUESTION_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
  },
  [QUESTION_BY_ID_FAILURE](state, payload) {
    state.showLoader = false
    state.error = payload
  },
  [ADD_QUESTION]: (state) => {
    state.showLoader = true
  },
  [ADD_QUESTION_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.questions.push(payload.question)
  },
  [ADD_QUESTION_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [UPDATE_QUESTION]: (state) => {
    state.showLoader = true
  },
  [UPDATE_QUESTION_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.question = payload.question
  },
  [UPDATE_QUESTION_FAILURE]: (state, payload) => {
    state.showLoader = false
    state.error = payload
  },
  [REMOVE_QUESTION]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_QUESTION_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.questions.findIndex(QUESTION => QUESTION._id === payload)
    console.debug('index', index)
    state.questions.splice(index, 1)
  },
  [REMOVE_QUESTION_FAILURE]: (state, payload) => {
    state.showLoader = false
  },
  [ERROR_MSG] (state, payload) {}
}


