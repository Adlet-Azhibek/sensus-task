const express = require('express');
const ports = require('../../configs/ports');
const application = express();

class httpService {

    constructor(routes) {
        application.use(routes);
    }

    start() {
        application.listen(ports.port, () => {
            console.log(`Listening on ${ports.port}...`);
        })
    }
}

module.exports = httpService;
