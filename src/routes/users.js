const express = require('express');
const userRouter = express.Router();

const {
    createUser,
    getUsers,
    getUserByName,
    getUserById,
    updateUser
    // getUserById,
} = require('../controllers/user');
// const {
//     validateCreateUser,
// } = require('../validation/user');


userRouter.get('/', getUsers);

userRouter.get('/user', getUserByName);


userRouter.get('/:userId', getUserById);

userRouter.put('/:userId', updateUser);

userRouter.post(
    '/',
    // validateCreateUser,
    createUser,
);

module.exports = userRouter;