const router = require('express').Router();
const userRouter = require('./userRoutes');
const productRouter = require('./productRoutes');

module.exports = {
    userRouter,
    productRouter
};