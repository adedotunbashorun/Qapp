import Vuex from 'vuex'

import { userGetters } from './getters'
import { userMutations } from './mutations'
import { userActions } from './actions'


const store = () => {
  return new Vuex.Store({
    strict: true,
    state: {
      users: [],
      user:{},
      token: '',
      showLoader: false,
    },
    mutations: Object.assign({}, userMutations),
    getters: Object.assign({}, userGetters),
    actions: Object.assign({}, userActions)
  })
}

export default store