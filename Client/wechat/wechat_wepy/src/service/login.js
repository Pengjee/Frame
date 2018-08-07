import request from '../request/request'
import Config from '../config/api'
import { createTheURL } from '../utils/utils'
export async function Login(params) {
  return request(createTheURL(Config.API.USER, 'login'), {
    method: 'POST',
    data: params
  })
}
export async function GetOpenid(params) {
  return request(createTheURL(Config.API.WECHAT, 'getopenid'), {
    method: 'POST',
    data: params
  })
}
