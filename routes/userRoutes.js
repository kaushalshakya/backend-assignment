const router = require('express').Router();
const { 
    registerUser
 } = require('../controllers/userControllers');


router.post('/', registerUser);

module.exports = router;