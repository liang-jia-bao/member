import router from '@/router/index.js'
import { loginInfo } from '@/api/login'
import store from '@/store'
router.beforeEach((to, from, next) => {
  const token = store.state.user.token
  // console.log(store.state.user.token);
  // const token = localStorage.getItem('token')
  if (!token) {
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    const userInfo = localStorage.getItem('info')
    if (!userInfo) {
      loginInfo(token).then(res => {
        if (res.flag) {
          // store.dispatch('GetUserInfo')
          // store.setUser(res)
          localStorage.setItem('info', res)
          next()
        } else {
          next({ path: '/login' })
        }
      })
    } else {
      next()
    }
  }
})