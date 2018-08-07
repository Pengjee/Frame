// import { wxrequset } from './requestMethod/index.js'
// import { REQUEST_METHOD } from '../config/config'
import wx from './requestMethod/wx'

export default function request(url, options) {
  // const requestList = {
  //   wxrequset: wxrequset
  // }
  // return requestList[REQUEST_METHOD](url, options)
  return wx(url, options)
}
