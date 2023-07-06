const userRouter = require('./userRoutes');
const productRouter = require('./productRoutes');
const orderRouter = require('./orderRoutes');
const loginRouter= require('./auth/loginRoute');
const logoutRouter = require('./auth/logoutRoute');

module.exports = {
    userRouter,
    productRouter,
    orderRouter,
    loginRouter,
    logoutRouter
};