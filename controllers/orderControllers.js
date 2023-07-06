const {
    getAllOrders
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

module.exports = {
    allOrders
}