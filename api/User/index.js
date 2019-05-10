import axios from 'axios'
import {config} from '../../config'

const login = (data) => {
    return new Promise((resolve, reject) => {
        axios.post(config.apiUrl + '/api/login', data)
            .then(resp => {
                axios.defaults.headers.common['Authoriztion'] = 'Bearer '+resp.data.token
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const allUser = () => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/users')
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const userById = (data) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/user/'+data)
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const forgetPassword = (data) => {
    return new Promise((resolve, reject) => {
        commit('auth_request')
        axios.post(state.apiUrl + '/api/forget_password', data)
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const register = (data) => {
    return new Promise((resolve, reject) => {
        commit('auth_request')
        axios.post(state.apiUrl + '/api/register', data)
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const update = (data) => {
    return new Promise((resolve, reject) => {
        axios.patch(state.apiUrl + '/api/user/update/' + data._id, data)
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const activity = (data) => {
    return new Promise((resolve, reject) => {
        axios.get(state.apiUrl + '/api/my_activities/' + user._id)
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const logout = ()  => {
    return new Promise((resolve, reject) => {
        axios.get(state.apiUrl + '/api/logout').then(resp => {
            delete axios.defaults.headers.common['Authorization']
            resolve(resp)
        }).catch(err => {
            reject(err)
        })
    })
}

const deleteUser = (data) => {
    return new Promise((resolve, reject) => {
        axios.delete(state.apiUrl + '/api/user/' + data)
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const User = {
    login,
    register,
    update,
    forgetPassword,
    activity,
    logout,
    allUser,
    userById,
    deleteUser
}