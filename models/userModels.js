const asyncHandler = require('express-async-handler');

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const postUser = asyncHandler( async (info) =>{
    const response = await prisma.users.create(
        {
            data: {
                firstName: info.firstName,
                lastName: info.lastName,
                email: info.email,
                password: info.password,
                role_id: info.role_id
            }
        }
    )
    await prisma.$disconnect();
    return response;
})

module.exports = {
    postUser
}