const bcrypt = require('bcryptjs');
const postUserData = require('../../models/auth/registerModel');
const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async(req, res) =>{
    const password = req.body.password;
    const confirmPassword = req.body.confirm_password;
    if(password === confirmPassword){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            role_id: req.body.role_id
        }
        const result = await postUserData(data);
        return res.status(200).json(
            {
                status: 200,
                message: 'User registered successfully'
            }
        )
    }else{
        return res.status(400).json(
            {
                status: 400,
                message: 'Password and confirm password fields do not match'
            }
        )
    }
})

module.exports = registerUser;