import axios from 'axios'
import { Loading, Message } from 'element-ui'
const loading = {
  loadingInstance: null,
  open() {
    if (this.loadingInstance === null) {
      this.loadingInstance = Loading.service({
        text: '拼命加载中',
        target: '.el-main',
        background: 'rbga(0,0,0,0.5)'
      })
    }
  },
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()

    }
    this.loadingInstance = null
  }
}





const request = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 5000
})
request.interceptors.request.use(
  config => {
    // console.log(config, '请求拦截的config');
    // config.params = { token: 'admin' }
    loading.open()
    return config
  },
  error => {
    loading.close()
    return Promise.reject(error)
  }
)
request.interceptors.response.use(
  response => {
    loading.close()

    // console.log(response, '响应拦截');
    return response.data
  },
  error => {
    loading.close()

    return Promise.reject(error)
  }
)
export default request