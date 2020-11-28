import axios from 'axios'

// 对axios进行全局配置
axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.defaults.timeout = 3000

// 配置自己的请求方式

export default {
    get(path = "", data = {}) {
        return new Promise((resolve, reject) => {
            axios.get(path, {
                params: data
            })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    post(path = '', data = {}) {
        return new Promise((resolve, reject) => {
            axios.post(path, data)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}