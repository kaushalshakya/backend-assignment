const router = require('express').Router();
const { 
    registerUser, 
    allUserInfo,
    updateUser,
    deleteUser
 } = require('../controllers/userControllers');


router.get('/', allUserInfo);
router.post('/', registerUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;