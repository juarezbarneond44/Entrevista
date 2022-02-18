const express = require('express'),
router = express.Router();
const supletoriaController = require('../controllers/ServerController')

router.route('/').get(supletoriaController.index)
router.route('/getPurchase/:idPurchase').get(supletoriaController.getPurchase)
router.route('/getOrders').get(supletoriaController.getOrders)
router.route('/getOrdersName').post(supletoriaController.getOrdersName)
 

module.exports = router;
