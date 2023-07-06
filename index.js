const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const errorHandler = require('./middlewares/errorHandler');
const {
    userRouter, 
    productRouter,
    orderRouter,
    loginRouter,
    logoutRouter
} = require('./routes');

const verifyJWT = require('./middlewares/verifyJWT');

app.use(express.json());

app.get('/',(req, res) =>{
    res.status(200).json(
            {
                status: 200,
                message: "Welcome to Hyperace API!"
            }
        )
})

app.use('/api/v1/login', loginRouter);

app.use(verifyJWT);

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/logout', logoutRouter);
app.use(errorHandler);

app.listen(PORT, () =>{
    console.log(`Server is now running on https://localhost:${PORT}`);
})