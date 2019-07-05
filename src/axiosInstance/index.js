/** 
 * @Desc: axios实例
 */
import axios from 'axios'

// 创建实例
let axiosInstance = axios.create({
    // baseURL:'198.139.126.39'
    timeout:3000
})

// 请求拦截器
axiosInstance.interceptors.request.use(
    config => {
        // token有效
        // if (cookie.get('ktoken')) {
        //     config.headers.Authorization = `bearer ${cookie.get('ktoken')}`
        //     config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
        // }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)


// 响应拦截器
axiosInstance.interceptors.response.use(
    response => {
        // const err = new Error(response.data.description)
        // console.log('respone这里:', err)
        // err.data = data
        // err.response = response
        // throw err
        return response
    },
    error => {
        // console.log('error这里:', error.response.status)
        // && err.response.status === 401
        // if (!infoFlag) {
        //     infoFlag = true
        //     if (confirm('连接超时，为您跳转到登陆页面？')) {
        //         return router.replace('/login')
        //     }
        // }
        return Promise.reject(error)
    }
)

export default axiosInstance