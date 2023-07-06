const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const errorHandler = require('./middlewares/errorHandler');
const {
    userRouter, 
    productRouter
} = require('./routes');

app.use(express.json());

app.get('/',(req, res) =>{
    res.status(200).json(
            {
                status: 200,
                message: "Welcome to Hyperace API!"
            }
        )
})


app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use(errorHandler);

app.listen(PORT, () =>{
    console.log(`Server is now running on https://localhost:${PORT}`);
})