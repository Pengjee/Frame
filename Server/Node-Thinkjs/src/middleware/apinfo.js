import { ApiMap } from '../api/ApiMap';
import { URLERROR } from '../utils/error';

module.exports = (options = {}) => {
  return (ctx, next) => {
    const url = ctx.url;
    const pathList = url.split('/');
    pathList.splice(0, 1);
    let PATH = pathList.join('_');
    PATH = PATH.toUpperCase();
    const data = ApiMap(PATH);
    if (!data) {
      Object.assign(ctx, URLERROR);
      return;
    }
    ctx.state.ApiInfo = data;
    return next();
  };
};
