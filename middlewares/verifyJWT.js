const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) =>{
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.status(400).json(
            {
                status: 400,
                message:'You are not authenticated'
            }
        )
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN,
        (err, decoded) =>{
            if(err){
                res.status(400).json(
                    {
                        status: 400,
                        message: 'Token has expired or has been altered'
                    }
                )
            }else{
                req.role = decoded.role;
                req.id = decoded.id;
                next();
            }
        }
    )
}

module.exports = verifyJWT;