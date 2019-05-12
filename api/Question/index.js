import axios from 'axios'
import {config} from '../../config'

const allQuestions = (header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/questions', { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const questionById = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.get(config.apiUrl + '/api/question/'+data, {headers:{ Authorization: header}})
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const addQuestion = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.post(config.apiUrl + '/api/question', data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const updateQuestion = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.patch(config.apiUrl + '/api/question/' + data._id, data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const deleteQuestion = (data, header) => {
    return new Promise((resolve, reject) => {
        axios.delete(config.apiUrl + '/api/question/' + data, { headers: { Authorization: header } })
            .then(resp => {
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const Question = {
    allQuestions,
    questionById,
    addQuestion,
    deleteQuestion,
    updateQuestion
}