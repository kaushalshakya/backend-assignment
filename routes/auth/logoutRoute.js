const router = require('express').Router();
const logoutUser = require('../../controllers/auth/logoutController');

router.post('/', logoutUser);

module.exports = router