const BasicModel = require('./BasicModel');

module.exports = class extends BasicModel {
  loginAction(params) {
    let data;
    data = this.model(params.model).where(params.data).find();
    return data;
  }
};
