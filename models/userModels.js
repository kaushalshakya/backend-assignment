const asyncHandler = require('express-async-handler');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUserInfo = asyncHandler(async () =>{
    const response = await prisma.users.findMany();
    await prisma. $disconnect();
    return response;
})

const updateUserInfo = asyncHandler(async(user_id, info) =>{
    const response = await prisma.users.update(
        {
            where : {
                id: user_id
            },
            data : {
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

const deleteUserInfo = asyncHandler(async(user_id) =>{
    const response = await prisma.users.delete(
        {
            where : {
                id: user_id
            }
        }
    )
    await prisma.$disconnect();
    return response;
})

module.exports = {
    getUserInfo,
    updateUserInfo,
    deleteUserInfo
}