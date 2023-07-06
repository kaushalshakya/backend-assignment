const { 
    allOrders, 
    newOrder 
} = require('../controllers/orderControllers');
const router = require('express').Router();

router.get('/', allOrders);
router.post('/', newOrder);
router.put('/:id');
router.delete('/:id');

module.exports = router