const express = require('express');
const router = express.Router();
const { getUsers, signup, deleteUser, updateUser, getUserById, login} = require('../controllers/User.controller');
const auth = require('../middleWares/auth');

router.get ('/', getUsers);
router.post('/',signup);
router.put('/', updateUser)
router.delete('/',deleteUser)
router.post('/login',login)


router.get('/:_id',auth,getUserById)

module.exports = router;