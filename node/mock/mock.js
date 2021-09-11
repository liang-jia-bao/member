const Mock = require('mockjs')
const login = function () {
  return Mock.mock({
    statusCode: 2000,
    message: 'success',
    flag: true,
    data: {
      token: 'admin'
    }
  })
}
const loginInfo = function () {
  return Mock.mock({
    statusCode: 2000,
    message: 'success',
    flag: true,
    data: {
      'id|+1': 1,
      'name': '@cname',
      'img': "@image('30x30'  '美女图片')"
    }
  })
}
const logout = function () {
  return Mock.mock({
    statusCode: 2000,
    message: '退出登录成功',
    flag: true,
    data: null
  })
}
const oldPwd = function (userId, passwpord) {
  return Mock.mock({
    statusCode: 2000,
    message: '原始密码正确',
    flag: true,
    data: null
  })
}
const updatePwd = function (userId, passwpord) {
  return Mock.mock({
    statusCode: 2000,
    message: '修改密码成功',
    flag: true,
    data: null
  })
}
module.exports = {
  login,
  loginInfo,
  logout,
  oldPwd,
  updatePwd
}