export function ApiMap(key) {
  const map = new Map();

  map.set('USER_USER_LISTALL', {
    model: 'user',
    method: 'listall',
    checktoken: true,
    authority: 'view_qx'
  });
  map.set('USER_USER_LISTPAGE', {
    model: 'user',
    method: 'listpage',
    checktoken: false
  });
  map.set('USER_GET', {
    model: 'user',
    method: 'get',
    authority: 'view_qx',
    checktoken: true
  });
  map.set('USER_ADD', {
    model: 'user',
    method: 'add',
    authority: 'add_qx',
    checktoken: true
  });
  map.set('USER_DEL', {
    model: 'user',
    method: 'del',
    authority: 'del_qx',
    checktoken: true
  });
  map.set('USER_EDIT', {
    model: 'user',
    method: 'edit',
    authority: 'edit_qx',
    checktoken: true
  });
  map.set('USER_USER_LOGIN', {
    model: 'user',
    method: 'login',
    checktoken: false
  });

  const params = map.get(key);
  return params;
}
