const router = require('express').Router();
const {
    allProducts,
    addProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productControllers')

router.get('/', allProducts);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router