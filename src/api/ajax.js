/*
Send ajax request module: encapsulate axios
Return: promise object
*/

import axios from 'axios'
import {message} from 'antd'

export default function ajax(url, data={}, type='GET'){

    return new Promise((resolve, reject) => {
        let promise

        //1. exe async ajax
        if (type === 'GET'){
            promise = axios.get(url, {
                params: data
            })
        } else {
            promise = axios.post(url, data)
        }
        //2. if success, call resolve(value)
        promise.then(response => {
            resolve(response.data)

        //3. if failure, do not call reject, but alert error message
        }).catch(error => {
            message.error('Request error: ' + error.message)
        })

    })

}
