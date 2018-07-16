const assert = require('assert');

module.exports = class extends think.Controller {
  async __before() {
    const model = this.MODEL;
    const { method } = this.ctx.state.ApiInfo;
    const basicAction = this.curry(this.commonAction, model, method);
    const params = {
      model: model,
      id: this.ID,
      data: this.post()
    };
    const { status, data } = await basicAction(params);
    if (status) {
      return this.success(data);
    }
  }
  constructor(ctx) {
    super(ctx);
    this.ID = this.getId();
    this.MODEL = this.ctx.state.ApiInfo.model;
    assert(think.isFunction(this.model), 'this.model must be a function');
  }
  // 获取id
  getId() {
    const id = this.get('id');
    if (id && (think.isString(id) || think.isNumber(id))) {
      return id;
    } else if (this.ctx.post().id) {
      return this.ctx.post().id;
    }
    return '';
  }

  curry(fn) {
    const _this = this;
    const args = Array.prototype.slice.call(arguments, 1);
    return function() {
      const innerArgs = Array.prototype.slice.call(arguments);
      const finalArgs = args.concat(innerArgs);
      return fn.apply(_this, finalArgs);
    };
  }

  async commonAction(model, method, params) {
    let data;
    let isTrue = true;
    switch (method) {
      case 'get':
        data = await this.model(model).getAction(params);
        break;
      case 'listall':
        data = await this.model(model).listallAction(params);
        break;
      case 'del':
        data = await this.model(model).delAction(params);
        break;
      case 'edit':
        data = await this.model(model).editAction(params);
        break;
      case 'add':
        data = await this.model(model).addAction(params);
        break;
      case 'listpage':
        data = await this.model(model).listpageAction(params);
        break;
      default:
        data = null;
        isTrue = false;
        break;
    }
    return {status: isTrue, data: data};
  }
  __call() {}
};
