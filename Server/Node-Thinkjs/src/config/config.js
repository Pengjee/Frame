// default config
module.exports = {
  workers: 1,
  cook: {
    domain: '', // 表示Cookie的域
    path: '/', // cookie的路径
    maxAge: 10 * 3600 * 1000, // cookie存储时间,10个消失
    signed: true, // 是否需要签名
    keys: ['key'], // 加密密钥
    httpOnly: false
  },
  tokenSecret: 'testtoken' // token密钥
};
