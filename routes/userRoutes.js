const router = require('express').Router();
const { 
    registerUser, 
    allUserInfo,
    updateUser,
    deleteUser
 } = require('../controllers/userControllers');
const paginateResults = require('../middlewares/paginateResults');

router.get('/', paginateResults, allUserInfo);
router.post('/', registerUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;