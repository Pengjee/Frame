import { tokenSecret } from '../config/config';
const crypto = require('crypto');

function TokenConfig() {}

TokenConfig.prototype.createToken = function(obj, timeout) {
  const params = {
    data: {...obj},
    createTime: parseInt(Date.now() / 1000), // token生成时间
    exp: parseInt(timeout) || 100000 // token有效期（默认1天）
  };
  // payload
  const base64Str = Buffer.from(JSON.stringify(params), 'utf8').toString('base64');
  // 签名防篡改
  const hash = crypto.createHmac('sha256', tokenSecret);
  hash.update(base64Str);
  const signature = hash.digest('base64');
  return `${base64Str}.${signature}`;
};

TokenConfig.prototype.decodeToken = function(token) {
  const infoList = token.split('.');
  if (infoList.length < 2) {
    // 格式错误不合法,token不合法
    return false;
  }

  // 签名校验
  const payload = JSON.parse(Buffer.from(infoList[0], 'base64').toString('utf8'));
  const hash = crypto.createHmac('sha256', tokenSecret);
  hash.update(infoList[0]);
  const checkSignature = hash.digest('base64');
  return {
    payload,
    signature: infoList[1],
    checkSignature
  };
};
TokenConfig.prototype.checkToken = function(token) {
  const resDecode = this.decodeToken(token);
  if (!resDecode) {
    return false;
  }
  // 检验是否过期
  const expState = !((parseInt(Date.now() / 1000) - parseInt(resDecode.payload.createTime)) > parseInt(resDecode.payload.exp));
  if (resDecode.signature === resDecode.checkSignature && expState) {
    return true;
  }
  return false;
};
const token = new TokenConfig();
export default token;
