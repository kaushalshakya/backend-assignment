const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
//Import routes
const {
    userRouter, 
    productRouter,
    orderRouter,
    loginRouter,
    logoutRouter,
    registerRouter
} = require('./routes');

//Import middlewares
const verifyJWT = require('./middlewares/verifyJWT');
const errorHandler = require('./middlewares/errorHandler');
const handler404 = require('./middlewares/404Handler');

app.use(express.json());

//Homepage
app.get('/',(req, res) =>{
    res.status(200).json(
            {
                status: 200,
                message: "Welcome to Hyperace API!"
            }
        )
})

app.use('/api/v1/login', loginRouter);
app.use('/api/v1/register',registerRouter);

app.use(verifyJWT);

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/logout', logoutRouter);
app.use(errorHandler);
app.use('*', handler404);

app.listen(PORT, () =>{
    console.log(`Server is now running on https://localhost:${PORT}`);
})