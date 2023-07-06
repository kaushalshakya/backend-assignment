const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const asyncHandler = require('express-async-handler');

const login = asyncHandler(async(email, password) =>{
    const response = await prisma.users.findFirst(
        {
            where : {
                email: email
            },
        }
    )
    await prisma.$disconnect();
    return response;
})

const setRefreshToken = asyncHandler(async(email, token) =>{
    const response = await prisma.users.update(
        {
            where: {
                email: email
            },
            data: {
                token: token
            }
        }
    )
    await prisma.$disconnect();
    return response;
})

module.exports = {
    login,
    setRefreshToken
}