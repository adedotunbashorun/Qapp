
import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    questions: [],
    error: '',
    question: {},
    showLoader: false,
  },
  mutations,
  getters,
  actions
} 
    