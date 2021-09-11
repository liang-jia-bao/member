import request from '@/utils/request.js'
export function getList() {
  return request({
    url: '/list',
    method: 'get'
  })
}