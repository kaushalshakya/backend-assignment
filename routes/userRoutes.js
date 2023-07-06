const router = require('express').Router();
const { 
    registerUser, 
    allUserInfo,
    updateUser,
    deleteUser
 } = require('../controllers/userControllers');
const paginateResults = require('../middlewares/paginateResults');

router.get('/', paginateResults, allUserInfo);
router.put('/profile', updateUser);
router.delete('/profile', deleteUser);

module.exports = router;