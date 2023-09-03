const express = require('express');
const router = express.Router();
const { getUsers, signup, deleteUser, updateUser, getUserById, login, deleteUserById} = require('../controllers/User.controller');
const auth = require('../middleWares/auth');

router.get ('/', getUsers);
router.post('/register',signup);
router.put('/', updateUser)
router.delete('/',deleteUser)
router.post('/login',login)
router.get('/:_id',auth,getUserById)
router.delete('/:_id',auth,deleteUserById)

module.exports = router;