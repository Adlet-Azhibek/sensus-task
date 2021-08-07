const express = require('express');
const Router = express.Router;

const insertUserCoordinates = require('../middlewares/insertUserCoordinates');
const getUserCoordinates = require('../middlewares/getUserCoordinates');

const router = Router();


router.use(express.urlencoded({ extended: true }));
router.use(express.json({ limit: '50mb' }));

router.post('/insertUserCoordinates', insertUserCoordinates)
router.get('/getUserCoordinates', getUserCoordinates)




module.exports = router