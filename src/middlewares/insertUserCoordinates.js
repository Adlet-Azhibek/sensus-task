const {pool} = require('../pg/index');

/**
* создает запись в таблице coordinates
* 
* пример параметров http запроса http://localhost:3000/insertUserCoordinates
	{
		"user_id": 3,
		"period_start": "2021-08-06 23:55:00",
		"period_end": "2021-08-09 00:00:03"
	}
*
*
*/
async function insertUserCoordinates (req, res, next){ 
	var {user_id, lon, lat} = req.body;
	if(!user_id || !lon || !lat ){ //user_id и period_start обязательные параметры
		res.status(500).send('invalid params');
		return;
	}
	try {
		var queryText = "insert into coordinates (user_id, lon, lat)"+
						" values ($1, $2, $3)";
        var {rows} = await pool.query(queryText, [user_id, lon, lat]);
        res.send(rows);
    }
    catch(e){
		//console.log('e: ',e)
        res.status(500).send(e.message || e);
    }
}

module.exports = insertUserCoordinates;