module.exports = [
  [/\/user\/get(?:\/(\d+))?/, '/user/get?id=:1', 'rest'],
  ['/user', '/user/listall', 'rest'],
  ['/user', '/listpage', 'rest'],
  ['/user', '/del', 'rest'],
  ['/user', '/edit', 'rest'],
  ['/user', '/add', 'rest'],
  ['/user', '/user/login', 'rest']
];
