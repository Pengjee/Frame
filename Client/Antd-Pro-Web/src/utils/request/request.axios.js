import axios from 'axios';
import { checkStatus, handleError } from './checkStatus';
import tokenHandler from '../tokenHandler';

export default function axiosRequest(url, options) {
    let config = {};
    config = {
        timeout : 4000,
        dataType : 'json',
        responseType : 'json',
        headers : {
            Accept : 'application/json',
            'Content-Type' : 'application/json; charset=utf-8',
            token:'6d40222b-05c6-4508-8be4-b8624a368a81',
        },
    }
    const newOptions = { ...config, ...options };

    newOptions.url = url;
    if ('method' in newOptions) {
        newOptions.method = newOptions.method.toUpperCase();
    } else {
        newOptions.method = 'GET';
    }

    if (newOptions.method !== 'GET') {
        if (!(newOptions.body instanceof FormData)) {
            newOptions.data = JSON.stringify(newOptions.body);
        } else {
            newOptions.data = newOptions.body;
        }
    } else {
        newOptions.params = newOptions.body;
    }

    axios.defaults.withCredentials = true
    return axios(newOptions)
        .then(checkStatus)
        .then(response => {
            return response.data;
        })
        .catch(handleError);
}
