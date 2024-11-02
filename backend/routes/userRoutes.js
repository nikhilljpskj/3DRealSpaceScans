const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


router.get('/', userController.getUsers);

router.get('/:userId', userController.fetchUserDetails);

router.put('/:id', userController.updateUser);

router.delete('/deleteuser/:userId', userController.deleteUser);

module.exports = router;
