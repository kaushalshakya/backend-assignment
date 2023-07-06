const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const asyncHandler = require('express-async-handler');

const getProductDetails = asyncHandler(async () =>{
    const response = await prisma.products.findMany();
    await prisma.$disconnect();
    return response;
})

const postProductDetails = asyncHandler(async (info) =>{
    const response = await prisma.products.create(
        {
            data:{
                name: info.name,
                description: info.description,
                price: info.price
            }
        }
    )
    await prisma.$disconnect();
    return response;
})

const updateProductDetails = asyncHandler(async(product_id, info) =>{
    const response = await prisma.products.update(
        {
            where : {
                id: product_id
            },
            data : {
                name: info.name,
                description: info.description,
                price: info.price
            }
        }
    )
    await prisma.$disconnect();
    return response;
})

const deleteProductDetails = asyncHandler(async(product_id) =>{
    const response = await prisma.products.delete(
        {
            where : {
                id: product_id
            }
        }
    )
    await prisma.$disconnect();
    return response;
})

module.exports = {
    getProductDetails,
    postProductDetails,
    updateProductDetails,
    deleteProductDetails
}