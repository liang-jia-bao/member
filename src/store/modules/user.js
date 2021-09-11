import { login, logout, loginInfo } from "@/api/login";
import { setToken, getToken, setUser, getUser, removeUser } from '@/utils/auth'
const user = {

  state: {
    token: getToken(),
    user: JSON.parse(getUser())
  },
  mutations: {
    sToken(state, token) {
      setToken(token)
    },
    sUser(state, user) {
      setUser(user)
    },
  },
  actions: {
    Login({ commit }, form) {
      return new Promise((reslove, reject) => {
        login(form.mobile.trim(), form.code.trim()).then(res => {
          // console.log(res);
          commit('sToken', res.data.token)
          reslove(res)
        }).catch(error => {
          console.log(error);
        })
      })
    },
    GetUserInfo({ commit, state }) {
      return new Promise((reslove, reject) => {
        loginInfo(state.token).then(res => {
          commit('sUser', res.data)
          state.user = JSON.parse(getUser())
          reslove(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    Logout({ commit, state }) {
      return new Promise((reslove, reject) => {
        logout(state.token).then(res => {
          removeUser()
          reslove(res)
        }).catch(err => {
          reject(err)
          // console.log(err);
        })

      })
    }
  }

}
export default user