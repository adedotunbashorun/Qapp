
export const userGetters = {
  allUsers: (state, getters) => {
    return state.users   
  },
  authUser: (state, getters) => {
    return state.user
  },
  isLoggedIn: (state, getters) => {
    return state.token
  }

}


