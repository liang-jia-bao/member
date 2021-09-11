const Mock = require('mockjs')
const Member = require('../mongodb')



const add = function (info) {
  console.log(info);
  new Member(info).save()
  return Mock.mock({
    statusCode: 2000,
    message: '添加成功',
    flag: true,
    data: null
  })
}
const editVip = function (info) {
  Member.findByIdAndUpdate(info._id, info, () => {

  })
  return Mock.mock({
    statusCode: 2000,
    message: '修改成功',
    flag: true,
    data: null
  })
}
const delVip = function (id) {
  Member.findByIdAndRemove(id.id, () => {

  })
  return Mock.mock({
    statusCode: 2000,
    message: '删除成功',
    flag: true,
    data: null
  })
}
module.exports = {
  add,
  editVip,
  delVip
}