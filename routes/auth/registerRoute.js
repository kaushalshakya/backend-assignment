const router = require('express').Router();
const registerUser = require('../../controllers/auth/registerController');

router.post('/', registerUser);

module.exports = router