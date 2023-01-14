const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/Users');

router.route('/').get(getAllUsers);
module.exports = router;