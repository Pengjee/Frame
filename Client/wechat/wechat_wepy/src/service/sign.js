import request from '../request/request'
import Config from '../config/api'
import { createTheURL } from '../utils/utils'
export async function UserSign(params) {
  return request(createTheURL(Config.API.SIGN, 'usersign'), {
    method: 'POST',
    data: params
  })
}

export async function CountSign(params) {
  return request(createTheURL(Config.API.SIGN, 'count'), {
    method: 'POST',
    data: params
  })
}
