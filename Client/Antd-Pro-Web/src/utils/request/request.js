import requestAxios from './request.axios';
import requsetFecth from './request.fetch';
import API from '../../config/api'

export default function request(url,options) {
    const { REQUEST_METHOD } = API || 'axiosRequest';
    const requestList = {
      axiosRequest:requestAxios,
      fecthRequest:requsetFecth,
    }
    return requestList[REQUEST_METHOD](url,options);

}
