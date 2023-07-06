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
                
            }
        }
    )
})

module.exports = {
    getAllOrders
}