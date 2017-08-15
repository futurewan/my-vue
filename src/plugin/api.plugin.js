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
            ajax: function (apiKey, option) {
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
            getApi: function (key) {
                let prx = environment.prefix
                let _api = Api[key]
                if (!/\/$/.test(prx) && !/^\//.test(_api)) {
                    _api = '/' + _api
                }
                return prx + _api
            },
            handleError: function (error) {
                return Promise.reject(error.message || error)
            },
            getUrlParam: function (name, _location) {
                let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
                let r

                if (_location) {
                    let loc = _location.split('?')
                    if (loc.length > 1) {
                        _location = loc[1]
                    } else {
                        return null
                    }
                    r = _location.match(reg) // 匹配目标参数
                } else if (location.search) {
                    r = location.search
                        .substr(1)
                        .match(reg) // 匹配目标参数
                } else {
                    return null
                }

                if (r != null) {
                    return window['unescape'](r[2])
                }
                return null // 返回参数值
            },
            storage: {
                getLS: function (key) {
                    var val = this.deserializeLS(localStorage.getItem(key))
                    return (val === undefined ? null : val)
                },
                setLS: function (key, value) {
                    if (this.getLS(key) !== null) {
                        this.removeLS(key)
                    }
                    localStorage.setItem(key, this.serializeLS(value))
                },
                removeLS: function (key) {
                    if (!key) {
                        localStorage.clear()
                    } else {
                        localStorage.removeItem(key)
                    }
                },
                getSS: function (key) {
                    var val = this.deserializeLS(sessionStorage.getItem(key))
                    return (val === undefined ? null : val)
                },
                setSS: function (key, value) {
                    if (this.getSS(key) !== null) {
                        this.removeSS(key)
                    }
                    sessionStorage.setItem(key, this.serializeLS(value))
                },
                removeSS: function (key) {
                    if (!key) {
                        sessionStorage.clear()
                    } else {
                        sessionStorage.removeItem(key)
                    }
                },
                serializeLS: function (value) {
                    if (typeof value === 'string') {
                        return value
                    }
                    return JSON.stringify(value)
                },
                deserializeLS: function (value) {
                    try {
                        return JSON.parse(value)
                    } catch (e) {
                        return value || undefined
                    }
                }
            },
            toFixed: function (num, s) {
                let times = Math.pow(10, s)
                let des = num * times + 0.5 + ''
                des = parseInt(des, 10) / times
                return des + ''
            },
            iThrottle: function(frequency) {
                return new Promise((resolve, reject) => {
                    if (this.timerInput) {
                        clearTimeout(this.timerInput)
                        this.timerInput = null
                    }
                    this.timerInput = setTimeout(() => {
                        resolve(true)
                    }, frequency || 350)
                })
            }
        }
    }
}
