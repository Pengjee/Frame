import { USERAUTHERROR } from '../utils/error';

module.exports = (options = {}) => {
  return async(ctx, next) => {
    const { UserInfo, ApiInfo: {checktoken, authority} } = ctx.state;
    // 检查是否具有路由权限
    if (checktoken) {
      const UserRoleModel = ctx.model('userrole');
      const params = {
        user_id: UserInfo.id
      };
      const userdata = await UserRoleModel.where(params).find();
      const { authority: userauth } = userdata;
      const authlist = userauth.split(';') || [];
      if (authlist.indexOf(authority) < 0) {
        Object.assign(ctx, USERAUTHERROR);
        return;
      }
      return next();
    }
    return next();
  };
};
