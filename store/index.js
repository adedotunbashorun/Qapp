

import Vuex from 'vuex'
import auth from './auth'
import category from './category'
import question from './question'
import schedule from './schedule'

const store = () => {
  return new Vuex.Store({
    strict: true, 
    modules: {
      auth,
      category,
      question,
      schedule
    }
    
  })
}

export default store