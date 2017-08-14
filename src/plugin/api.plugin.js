import axios from 'axios'
import {
    environment
} from '../environments/environment'

import {
    Api
} from './api'
// import
export default {
    install(Vue) {
        Vue.prototype.$http = axios
        Vue.http = axios
        axios.defaults.headers['Content-Type'] = 'application/json'
        axios.defaults.headers['client'] = '5'

        Vue.prototype.api = {
            ajax: function(apiKey, option) {
                // console.log(111, this.getApi)
                let _api = this.getApi(apiKey).split('@')
                // let res

                return Vue.http({
                    method: _api[1],
                    url: _api[0],
                    body: option && option.data || {}
                }).then(response => {
                    console.log(response)
                }).catch((error) => {
                    if (!error.message) {
                        error.message = '网络错误！'
                    }
                    if (option && typeof option.error === 'function') {
                        option.error.call(this, error.message)
                    }
                    alert('error:' + error.message)
                    this.api.handleError.call(this, error)
                    return error
                })
            },
            getApi: function(key) {
                let prx = environment.prefix
                let _api = Api[key]
                if (!/\/$/.test(prx) && !/^\//.test(_api)) {
                    _api = '/' + _api
                }
                return prx + _api
            },
            handleError: function(error) {
                return Promise.reject(error.message || error)
            }
        }
    }
}
