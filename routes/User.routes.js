const express = require('express');
const router = express.Router();
const { getUsers, signup, deleteUser, updateUser} = require('../controllers/User.controller');

router.get ('/', getUsers);
router.post('/',signup);
router.put('/', updateUser)
router.delete('/',deleteUser)

module.exports = router;