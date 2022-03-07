//rutas para citas
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const citasController = require('../controllers/citasController');
const { verify } = require('jsonwebtoken');

//api/suarios
router.post('/signup', userController.createUSer)
router.post('/signin', userController.signinUSer)


//api/citas
router.post('/create-private', citasController.createCita,verifyToken);
router.get('/list-private', citasController.getCitas,verifyToken);
router.put('/update-private:id', citasController.updateCita,verifyToken);
router.get('/getone-prievate:id', citasController.getCita,verifyToken);
router.delete('/delete-private:id', citasController.deleteCita,verifyToken);

async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}



module.exports = router;
