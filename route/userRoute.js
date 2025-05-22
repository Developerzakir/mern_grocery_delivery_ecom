import express from 'express';
import { isAuth, login, logout, register } from '../controlers/userController.js';
import authUser from '../middlewares/authUser.js';


const userRouter = express.Router();


//User Routes
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/is-auth', authUser, isAuth);
userRouter.get('/logout', authUser, logout);


//Seller Routes

export default userRouter;