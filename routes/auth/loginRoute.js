const router = require('express').Router();

const loginUser = require('../../controllers/auth/loginController');

router.post('/', loginUser);

module.exports = router