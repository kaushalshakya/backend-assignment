const {
    getUserInfo,
    updateUserInfo,
    deleteUserInfo
} = require('../models/userModels');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

const allUserInfo = asyncHandler(async(req, res) =>{
    console.log(req.role);
    if(req.role !== 2){
        return res.status(401).json(
            {
                status: 401,
                message: 'Unauthorized'
            }
        )
    }
    const {page, limit, offset} = req.pagination;
    const response = await getUserInfo(limit, offset);
    const paginationInfo = {
        currentPage: page,
        itemsPerPage: limit
    }
    return res.status(200).json(
        {
            status: 200,
            paginationInfo: paginationInfo,
            message: 'All users:',
            data: response
        }
    )
})

const updateUser = asyncHandler(async(req, res) =>{
    const id = parseInt(req.id);
    if(req.body.password){
        const salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
    }
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        role_id: req.body.role_id
    }
    const result = await updateUserInfo(id, data);
    return res.status(200).json(
        {
            status: 200,
            message: 'User details updated successfully'
        }
    )
})

const deleteUser = asyncHandler(async (req, res) =>{
    const id = parseInt(req.id);
    const result = await deleteUserInfo(id);
    return res.status(200).json(
        {
            status: 200,
            message: 'User deleted successfully'
        }
    )
})

module.exports = {
    allUserInfo,
    updateUser,
    deleteUser
}