const httpService = require('./http');
const router = require('./routes');

const http = new httpService(router);

http.start();