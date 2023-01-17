const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, getUser, editUser } = require('../controllers/Users');

router.route('/')
    .get(getAllUsers)
    .post(createUser);
router.route('/:id')
    .get(getUser)
    .put(editUser);

module.exports = router;