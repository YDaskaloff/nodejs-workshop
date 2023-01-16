const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, getUser } = require('../controllers/Users');

router.route('/')
    .get(getAllUsers)
    .post(createUser);
router.route('/:id')
    .get(getUser);

module.exports = router;