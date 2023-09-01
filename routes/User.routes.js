const express = require('express');
const router = express.Router();
const { getUsers, signup, deleteUser, updateUser, getUserById} = require('../controllers/User.controller');
const auth = require('../middleWares/auth');

router.get ('/', getUsers);
router.post('/',signup);
router.put('/', updateUser)
router.delete('/',deleteUser)

router.get('/:_id',auth,getUserById)

module.exports = router;