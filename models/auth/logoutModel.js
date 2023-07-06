const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const asyncHandler = require('express-async-handler');


const logoutUser = asyncHandler(async(email) =>{
    const response = await prisma.users.update(
        {
            where: {
                email: email
            },
            data : {
                token: null
            }
        }
    )
    await prisma.$disconnect();
    return response;
})

module.exports = logoutUser