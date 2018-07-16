module.exports = (options = {}) => {
  return (ctx, next) => {
    ctx.response.header('Access-Control-Allow-Origin', ctx.request.headers.origin || '*');
    ctx.response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    ctx.response.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    ctx.response.header('Access-Control-Allow-Credentials', true); // 可以带cookies
    if ((ctx.method).toUpperCase() === 'OPTIONS') {
      ctx.end();
    }
    return next();
  };
};
