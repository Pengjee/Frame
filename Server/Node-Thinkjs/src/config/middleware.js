const path = require('path');
const cors = require('@koa/cors');
const swaggerParser = require('think-swagger-parser');
const swaggerRouter = require('think-swagger-router');
const swaggerController = require('think-swagger-controller');
const isDev = think.env === 'development';

module.exports = [
  {
    handle: 'meta',
    options: {
      logRequest: isDev,
      sendResponseTime: isDev
    }
  }, {
    handle: 'resource',
    enable: isDev,
    options: {
      root: path.join(think.ROOT_PATH, 'www'),
      publicPath: /^\/(static|favicon\.ico)/
    }
  }, {
    handle: 'trace',
    enable: !think.isCli,
    options: {
      debug: isDev
    }
  }, {
    handle: 'payload',
    options: {
      keepExtensions: true,
      limit: '5mb',
      uploadDir: path.join(think.ROOT_PATH, '')
    }
  }, {
    handle: 'apinfo',
    options: {}
  }, {
    handle: 'tokencheck',
    options: {}
  }, {
    handle: 'authority',
    options: {}
  }, {
    handle: swaggerParser,
    options: {
      debug: isDev,
      api_doc: './api/swagger.yaml',
      controller_dir: './app/controller'
    }
  }, {
    handle: 'router',
    options: {}
  }, {
    handle: swaggerRouter,
    options: {
      debug: isDev
    }
  },
  'logic',
  {
    handle: swaggerController,
    options: {
      debug: isDev
    }
  }
];
