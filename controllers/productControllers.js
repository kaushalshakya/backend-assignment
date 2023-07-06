const asyncHandler = require('express-async-handler');
const {
    getProductDetails, 
    postProductDetails,
    updateProductDetails,
    deleteProductDetails
} = require('../models/productModels');

const allProducts = asyncHandler(async(req, res) =>{
    const results = await getProductDetails();
    return res.status(200).json(
        {
            status: 200,
            message: 'All products:',
            details: results
        }
    )
})

const addProduct = asyncHandler(async(req, res) =>{
    const data = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }
    const result = await postProductDetails(data);
    return res.status(200).json(
        {
            status: 200,
            message: 'Product created successfully'
        }
    )
})

const updateProduct = asyncHandler(async(req, res) =>{
    const id = parseInt(req.params.id);
    const data = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }
    const result = await updateProductDetails(id, data);
    return res.status(200).json(
        {
            status: 200,
            message: 'Product details updated successfully!'
        }
    )
})

const deleteProduct = asyncHandler(async(req, res) =>{
    const id = parseInt(req.params.id);
    const result = await deleteProductDetails(id);
    return res.status(200).json(
        {
            status: 200, 
            message: 'Product details deleted successfully!'
        }
    )
})

module.exports = {
    allProducts,
    addProduct,
    updateProduct,
    deleteProduct
}