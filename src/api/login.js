import request from '@/utils/request'
export function login(mobile, code) {
  return request({

    url: '/user/login',
    method: 'post',
    data: {
      mobile,
      code
    }
  })
}
export function loginInfo(token) {
  return request({
    url: `/user/info/${token}`,
    method: 'get',
    data: {
      token
    }
  })
}
export function logout(token) {
  return request({
    url: '/user/logout',
    method: 'post',
    data: {
      token
    }
  })
}
export function oldPwd(userId, password) {

  return request({
    url: '/user/pwd',
    method: 'post',
    data: {
      userId,
      password
    }
  })
}
export function updatePwd(userId, password) {

  return request({
    url: '/user/pwd',
    method: 'put',
    data: {
      userId,
      password
    }
  })
}