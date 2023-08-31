const express = require('express');
const router = express.Router();
const { getUsers, signup} = require('../controllers/User.controller');

router.get ('/', getUsers);
router.post('/',signup);

module.exports = router;