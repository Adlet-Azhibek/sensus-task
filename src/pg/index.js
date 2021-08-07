const {
	Pool
	//,Client
} = require('pg');
	
const connInfo = require('../../configs/db').pg;
var pool = new Pool(connInfo);
module.exports = {
    pool
    //,Client
}