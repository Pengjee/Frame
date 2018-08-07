import wepy from 'wepy'

function request(url, options) {
  const newOptions = {...options, url}
  const token = wepy.getStorageSync('token') || null
  if (url.indexOf('/user/user/login') < 0) {
    newOptions.header = {
      'Content-Type': 'application/json',
      'token': token
    }
  } else {
    newOptions.header = {
      'Content-Type': 'application/json'
    }
  }
  return new Promise((resolve, reject) => {
    wepy.request({
      ...newOptions,
      success: function(res) {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      },
      fail: function(res) {
        wepy.$invoke('toast', 'show', {
          title: '网络错误',
          img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
        })
        reject(new Error('Network request failed'))
      }
    })
  })
}
export default request
