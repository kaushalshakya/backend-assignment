const userRouter = require('./userRoutes');
const productRouter = require('./productRoutes');
const orderRouter = require('./orderRoutes');
const loginRouter= require('./auth/loginRoute');

module.exports = {
    userRouter,
    productRouter,
    orderRouter,
    loginRouter
};