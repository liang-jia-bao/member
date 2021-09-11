import request from '@/utils/request'
export function vipList(pageSize, currentChange, info) {
  return request({
    url: `/user/vipList/${pageSize}/${currentChange}`,
    method: 'get',
    params: {
      ...info
    }
  })
}
export function add(pojo) {
  return request({
    url: '/user/add',
    method: 'post',
    data: {
      ...pojo
    }
  })
}
export function editVip(pojo) {
  return request({
    url: '/user/edit',
    method: 'post',
    data: {
      ...pojo
    }
  })
}
export function delVip(id) {
  return request({
    url: '/user/del',
    method: 'post',
    data: {
      id
    }
  })
}