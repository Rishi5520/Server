import express from 'express'
// import clientLogout,{  Login, signup, updateuserProfile } from '../Controller/UserController.js'
import clientLogout, { Login, Ragister } from '../controller/UserController.js';
const UserRouter = express.Router()

UserRouter.post('/Ragister',Ragister);
 UserRouter.post('/Login',Login);
UserRouter.get('/logout',clientLogout);
// UserRouter.post('/profile',UserProfile);

export default UserRouter;