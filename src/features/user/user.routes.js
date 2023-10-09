// Manage routes/paths to ProductController

// 1. Import express.
         import express from 'express';
         import UserController from './user.controller.js';
        //  import {upload} from '../../middlewares/fileupload.middleware.js';

// 2. Initialize Express router.
        const userRouter = express.Router();
        const userController = new UserController();

// All the paths to the controller methods.


    userRouter.post('/signup', (req,res)=>{
        userController.signUp(req,res)
    });
    userRouter.post('/signin', (req,res)=>{
        userController.signIn(req, res)
    });

      export default userRouter;

      