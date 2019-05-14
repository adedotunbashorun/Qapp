
import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    schedules: [],
    error: '',
    schedule: {},
    showLoader: false,
  },
  mutations,
  getters,
  actions
} 
    