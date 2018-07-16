import Token from '../../utils/token';
import { PASSWORDERROR, USERNOEXIST } from '../../utils/error';
const assert = require('assert');
const macObj = require('getmac');
const BasicController = require('../BasicController.js');

module.exports = class extends BasicController {
  constructor(ctx) {
    super(ctx);
    assert(think.isFunction(this.model), 'this.model must be a function');
    this.MODEL = this.ctx.state.ApiInfo.model;
    this.params = {
      model: this.MODEL,
      data: this.post()
    };
  }
  async loginAction() {
    // 根据账号查找用户
    const params = {
      model: this.MODEL,
      data: this.post().password
    };
    const data = await this.model(this.MODEL).getAction(params);
    if (Object.keys(data).length === 0) {
      Object.assign(this.ctx, USERNOEXIST);
      return;
    }
    if (data.password !== this.params.data.password) {
      Object.assign(this.ctx, PASSWORDERROR);
      return;
    }
    delete data.password;
    // 生成token */
    const token = Token.createToken(data);
    this.header('token', token);
    return this.success(data);
  }
};
