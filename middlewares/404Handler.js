const handler404 = (req, res) =>{
    res.status(404).json(
        {
            status: 404,
            message: 'Error! Page not available'
        }
    )
}

module.exports = handler404