import express from 'express'   
// import clientLogout,{  Login, signup, updateuserProfile } from '../Controller/UserController.js'
import clientLogout, { Login, Ragister } from '../controller/UserController.js';
import { CheckRole, UserAuth } from '../middleware/checkedAuth.js';
const UserRouter = express.Router()
//Ragister Route 
const ragisterUser = async(request,response,role)=>{
  await Ragister(request.body,role,response)
}
UserRouter.post('/Ragister-Candinate',(request,response)=> ragisterUser(request,response ,"Candinate"));
UserRouter.post('/Ragister-Admin',(request,response)=> ragisterUser(request,response ,"Admin"));
UserRouter.post('/Ragister-Company',(request,response)=> ragisterUser(request,response ,"Company"));

// Login Route
const loginEmployee = async (req, res, role) => {
  await Login(req.body, role, res);
};

UserRouter.post("/Login-Candinate", (req, res) => loginEmployee(req, res, "Candinate"));
UserRouter.post("/Login-Admin", (req, res) => loginEmployee(req, res, "Admin"));
UserRouter.post("/Login-Company", (req, res) => loginEmployee(req, res, "Company"));



// Protected Routes
const handleProtectedRoute = (req, res, role) => {
  return res.json(`Welcome ${req.body.name}`);
};

UserRouter.get("/Candinate-protected", UserAuth, CheckRole(["Candinate"]), (req, res) => handleProtectedRoute(req, res, "Candinate"));
UserRouter.get("/Admin-protected", UserAuth, CheckRole(["Admin"]), (req, res) => handleProtectedRoute(req, res, "Admin"));
UserRouter.get("/Company-protected", UserAuth, CheckRole(["Company"]), (req, res) => handleProtectedRoute(req, res, "Company"));


UserRouter.get('/logout',clientLogout);
// UserRouter.post('/profile',UserProfile);

export default UserRouter;