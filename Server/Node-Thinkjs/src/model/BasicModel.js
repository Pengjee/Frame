module.exports = class extends think.Model {
  getAction(params) {
    let data;
    data = this.model(params.model).where(params.data).find();
    return data;
  }

  listallAction(params) {
    let data;
    data = this.model(params.model).select();
    return data;
  }

  delAction(params) {
    let data;
    data = this.model(params.model).where(params.data).delete();
    return data;
  }

  editAction(params) {
    let data;
    data = this.model(params.model).where({ id: params.id }).update(params.data);
    return data;
  }

  addAction(params) {
    let data;
    data = this.model(params.model).add(params.data);
    return data;
  }

  listpageAction(params) {
    let data;
    const DATA = params.data;
    data = this.model(params.model).page(DATA.page_no || 1, DATA.page_size || 20).select();
    return data;
  }
};
