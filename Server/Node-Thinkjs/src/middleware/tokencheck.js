import Token from '../utils/token';
import { TOKENEXPIRED } from '../utils/error';

module.exports = (options = {}) => {
  return (ctx, next) => {
    const { checktoken } = ctx.state.ApiInfo; // 接口是否需要检验token
    if (checktoken) {
      const { token } = ctx.request.header;
      // 验证是否有token，并且token是否过期或者被篡改
      if (token && Token.checkToken(token)) {
        const tokenInfo = Token.decodeToken(token);
        ctx.state.UserInfo = tokenInfo.payload.data;
        return next();
      } else {
        Object.assign(ctx, TOKENEXPIRED);
        return;
      }
    }
    return next();
  };
};
