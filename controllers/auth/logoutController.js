const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const logoutUser = require('../../models/auth/logoutModel');
require('dotenv').config();

const logout = asyncHandler(async(req, res) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) =>{
        if(err){
            return res.status(400).json(
                {
                    status: 400,
                    message: err
                }
            )
        }else{
            const email = decoded.email;
            logoutUser(email);
            return res.status(200).json(
                {
                    status: 200,
                    message: 'Logged out successfully'
                }
            )
        }
    })
})

module.exports = logout