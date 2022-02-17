const express = require('express'),
router = express.Router();
const supletoriaController = require('../controllers/supletoriaController')

router.route('/').get(supletoriaController.index)
router.route('/create').post(supletoriaController.create)
router.route('/getAll').get(supletoriaController.getAll)


module.exports = router;
