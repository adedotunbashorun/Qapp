
import {getters} from './getters'
import {mutations} from './mutations'
import { actions } from './actions'


export default {
  state: {
    schedules: [],
    responses: [],
    archieves: [],
    error: '',
    schedule: {},
    showLoader: false,
  },
  mutations,
  getters,
  actions
} 
    