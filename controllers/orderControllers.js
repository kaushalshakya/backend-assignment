const {
    getAllOrders, 
    postOrder,
    getProductPrice
} = require('../models/orderModels');
const asyncHandler = require('express-async-handler');

const allOrders = asyncHandler(async (req, res) =>{
    const result = await getAllOrders();
    return res.status(200).json(
        {
            status: 200,
            message: 'All order details:',
            details: result
        }
    )
})

const newOrder = asyncHandler(async (req, res) =>{
    const quantity = parseInt(req.body.quantity);
    const productId = parseInt(req.body.product_id);
    const getPrice = await getProductPrice(productId);
    const totalAmount = quantity * getPrice.price;
    const data = {
        quantity: quantity,
        totalAmount: totalAmount,
        userId: parseInt(req.id),
        productId: productId
    }
    const result = await postOrder(data);
    return res.status(200).json(
        {
            status: 200,
            message: 'Order created successfully'
        }
    )

})

module.exports = {
    allOrders,
    newOrder
}