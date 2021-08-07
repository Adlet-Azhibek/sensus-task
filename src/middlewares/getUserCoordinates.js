const {pool} = require('../pg/index');

/**
* достает данные с базы по айди пользователя и заданному периоду времени
* 
* пример параметров http запроса http://localhost:3000/getUserCoordinates
	{
		"user_id": 3,
		"lon": 76.822380,
		"lat": 43.260901
	}
*
*/

async function getUserCoordinates (req, res, next){ 
	var {user_id, period_start, period_end} = req.body;
	if(!user_id || !period_start){ //user_id и period_start обязательные параметры
		res.status(500).send('invalid params');
		return;
	}
	try {
		period_start = new Date(period_start);
		period_end = period_end ? new Date(period_end) : new Date(); //period_end не обязательный, если его не задали, то по умолчанию берется текущая дата
		//делается select с базы по заданным параметрам, и возвращаются данные
		var queryText = "select u.name, u. lastname, c.user_id, c.lon, c.lat, c.created_at"+
						" from coordinates c join users u on u.id = c.user_id"+
						" where c.user_id = $1"+
						" and c.created_at >= $2::timestamp"+
						" and c.created_at <= $3::timestamp";
        var {rows} = await pool.query(queryText, [user_id, period_start, period_end]);
        res.send(rows);
    }
    catch(e){
		//console.log('e: ',e)
        res.status(500).send(e.message || e);
    }
}

module.exports = getUserCoordinates;