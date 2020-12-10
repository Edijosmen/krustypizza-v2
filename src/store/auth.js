import { setStore, getStore } from '@/config/utils'

const user = getStore('user')

export default {
  state: {
    loginUser: user
  },
  mutations: {
    setLoginUser(state, user) {
      state.loginUser = user
      setStore('user', user)
    }
  },
  actions: {
    setLoginUser(context, user){
        context.commit("setLoginUser", user);
    }      
  },
  getters: {
    getLoginUserInfo(state) {
      return state.loginUser
    }
  }
};
