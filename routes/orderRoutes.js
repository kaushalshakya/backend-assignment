const { 
    allOrders 
} = require('../controllers/orderControllers');
const router = require('express').Router();

router.get('/', allOrders);
router.post('/');
router.put('/:id');
router.delete('/:id');

module.exports = router