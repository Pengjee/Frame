const USERAUTHERROR = {
  status: 401,
  body: '用户鉴权失败！'
};

const URLERROR = {
  status: 503,
  body: '请求路径错误！'
};

const USERNOEXIST = {
  status: 403,
  body: '用户不存在！'
};
const PASSWORDERROR = {
  status: 403,
  body: '密码错误！'
};
const TOKENEXPIRED = {
  status: 401,
  body: 'token过期'
};
module.exports = {
  USERAUTHERROR,
  URLERROR,
  USERNOEXIST,
  PASSWORDERROR,
  TOKENEXPIRED
};
