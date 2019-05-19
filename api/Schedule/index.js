import axios from 'axios'
import {config} from '../../config'

const allSchedules = (header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/schedules', { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const scheduleById = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/schedules/'+data, {headers:{ Authorization: header}})
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const userSchedules = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/schedules/'+data,  { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const userSchedulesTotal = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/schedules/total/' + data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const userSchedulesSent = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/schedules/sent/' + data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const userSchedulesReplied = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/schedules/replied/' + data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const Schedule = {
    allSchedules,
    scheduleById,
    userSchedules,
    userSchedulesTotal,
    userSchedulesSent,
    userSchedulesReplied
}