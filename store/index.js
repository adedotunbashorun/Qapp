

import Vuex from 'vuex'
import auth from './auth'
import category from './category'

const store = () => {
  return new Vuex.Store({
    strict: true, 
    modules: {
      auth,
      category
    }
    
  })
}

export default store