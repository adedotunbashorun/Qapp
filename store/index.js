

import Vuex from 'vuex'
import auth from './auth'
import category from './category'
import question from './question'

const store = () => {
  return new Vuex.Store({
    strict: true, 
    modules: {
      auth,
      category,
      question
    }
    
  })
}

export default store