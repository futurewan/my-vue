import axios from 'axios'
// import {
//     environment
// } from '../environments/environment'

import { Api } from './api'
// import
export default {
    install(Vue) {
        Vue.prototype.$http = axios
        Vue.http = axios
        Vue.prototype.api = {
            ajax: function (apiKey, option) {
                let token = this.storage.getSS('token')
                axios.defaults.headers['Content-Type'] = 'application/json'
                axios.defaults.headers['client'] = '5'
                token && (axios.defaults.headers['auth-token'] = token)
                let _api = this.getApi(apiKey).split('@')
                let res
                let config = {
                    method: _api[1],
                    url: _api[0]
                }
                if (option && option.data) {
                    if (_api[1] === 'Get') {
                        config.params = option.data
                    } else if (_api[1] === 'Post') {
                        config.data = option.data
                    }
                }

                return Vue.http(config).then(response => {
                    res = response.data
                    let _token = this.storage.getSS('token')
                    let _resCode = res['resCode']
                    this.resState = _resCode
                    if (_resCode === '0000') { // 返回成功
                        let resToken
                        if (res['data'] && res['data']['token']) {
                            resToken = res['data']['token']
                        }
                        if (resToken && (!_token || resToken !== _token)) {
                            this.storage.setSS('token', resToken)
                            this.storage.setSS('user', res['data'] && res['data']['customerInfo'] ? res['data']['customerInfo'] : {})
                        }
                        if (option && option.success) {
                            option.success.call(this, res)
                        }
                    } else if (_resCode === '9002') { // 系统维护
                        location.href = process.env.act + '/maintain/index.html'
                    } else if (_resCode !== '60003') {
                        if (option && option.other) {
                            option.other.call(this, res)
                        } else if (res['resDesc']) {
                            alert(res['resDesc'])
                        }
                    }
                    this.canActivate()
                    return response
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
            canActivate: function () { // 实例名必须为canActivate
                if (this.resState === '60003') {
                    const rurl = this.router.url.replace(/m=[^&]+&?/g, '')
                    if (!/^\/login(\?(.+))?$/.test(rurl)) {
                        this.showlogMsg()
                        this.router.navigate(['login'], {
                            queryParams: {
                                ref: rurl
                            },
                            replaceUrl: true
                        })
                        this.removeLS()
                    }
                    return false
                } else if (this.resState === '30033') {
                    alert('请先绑定手机号或登录')
                    const wxid = this.getLS('wxid')
                    const rurl = wxid ? 'login/bindwx?wxid=' + wxid : 'login/quick'
                    this.router.navigateByUrl(rurl, {
                        replaceUrl: true
                    })
                    this.removeLS()
                    return false
                }
                return true
            },
            getApi: function (key) {
                let prx = process.env.prefix
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
            iThrottle: function (frequency) {
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
