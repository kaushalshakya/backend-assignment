const {
    login,
    setRefreshToken
} = require('../../models/auth/loginModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const loginUser = asyncHandler(async (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !password){
        return res.status(400).json(
            {
                status: 400,
                message: 'Enter email and password to login'
            }
        )
    }
    const result = await login(email, password);
    const dbPassword = result.password;
    const passwordCheck = bcrypt.compareSync(password, dbPassword);

    if(!passwordCheck){
        return status(400).json(
            {
                status: 400,
                message: 'Invalid credentials'
            }
        )
    }
    const payload = {
        email: email,
        role: result.role_id,
        id: result.id
    }
    const accessToken = jwt.sign(
        {
            email: payload.email,
            role: payload.role,
            id: payload.id
        }, process.env.ACCESS_TOKEN,
        // {
        //     expiresIn: '2m'
        // }
    )

    const refreshToken = jwt.sign(
        {
            email: email,
            role: payload.role,
            id: payload.id
        }, process.env.REFRESH_TOKEN,
        // {
        //     expiresIn: '30m'
        // }
    )
    setRefreshToken(email, refreshToken);
    res.status(200).json(
        {
            status: 200,
            message: 'Logged in successfully',
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    )
})

module.exports = loginUser