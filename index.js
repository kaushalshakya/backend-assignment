const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req, res) =>{
    res.status(200).json(
            {
                status: 200,
                message: "Welcome to Hyperace API!"
            }
        )
})

app.listen(PORT, () =>{
    console.log(`Server is now running on https://localhost:${PORT}`);
})