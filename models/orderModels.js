const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const asyncHandler = require('express-async-handler');

const getAllOrders = asyncHandler(async() =>{
    const response = await prisma.orders.findMany();
    await prisma.$disconnect();
    return response;
})

const postOrder = asyncHandler(async(info) =>{
    const response = await prisma.orders.create(
        {
            data : {
                totalAmount: info.totalAmount,
                userId: info.userId,
                quantity: info.quantity
            },
            include: {
                orderItems: true
            }
        }
    )
    prisma.$disconnect();
    return response;
})

const getProductPrice = asyncHandler(async(id) =>{
    const response = await prisma.products.findUnique(
        {
            where: {
                id: id
            }
        }
    )
    prisma.$disconnect();
    return response;
})

module.exports = {
    getAllOrders,
    postOrder,
    getProductPrice
}