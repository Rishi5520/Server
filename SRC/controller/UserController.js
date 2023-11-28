
import { StatusCodes } from "http-status-codes";
import Usermodel from "../Model/Usermodel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


 export const Ragister = async (req, role, res) => {
    try {
      //Get employee from database with same name if any
      const validateUser = async (name) => {
        let User = await Usermodel.findOne({ name });
        return User ? false : true;
      };
  
      //Get employee from database with same email if any
      const validateEmail = async (email) => {
        let User = await Usermodel.findOne({ email });
        return User ? false : true;
      };
      // Validate the name
      let nameNotTaken = await validateUser(req.name);
      if (!nameNotTaken) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: `Employee name is already taken.`,
        });
      }
  
      // validate the email
      let emailNotRegistered = await validateEmail(req.email);
      if (!emailNotRegistered) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: `Email is already registered.`,
        });
      }
  
  // Hash password using bcrypt
      const password = await bcrypt.hash(req.password, 12);
      // create a new user
      const newUser = new Usermodel({
        ...req,
        password,
        role
      });
  
      await newUser .save();
      return res.status(StatusCodes.CREATED).json({
        message: "Hurry! now you are successfully registred. Please nor login."
      });
    } catch (err) {
      // Implement logger function if any
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: `${err.message}`
      });
    }
  };



 export  const Login = async (req, role, res) => {
    let { email, password } = req;
  
    // First Check if the user exist in the database
    const User = await Usermodel.findOne({ email });
    if (!User) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "User email is not found. Invalid login credentials.",
        success: false,
      });
    }
    // We will check the if the employee is logging in via the route for his departemnt
    if (User.role !== role) {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: "Please make sure you are logging in from the right portal.",
        success: false,
      });
    }
  
    // That means the employee is existing and trying to signin fro the right portal
    // Now check if the password match
    let isMatch = await bcrypt.compare(password, User.password);
    if (isMatch) {
      // if the password match Sign a the token and issue it to the employee
      let token = jwt.sign(
        {
          role: User.role,
          name: User.name,
          email: User.email,
        },
        process.env.SECRET_KEY,
        { expiresIn: "3 days" }
      );
  
      let result = {
        name: User.name,
        role: User.role,
        email: User.email,
        token: `Bearer ${token}`,
        expiresIn: 168,
      };
  
      return res.status(StatusCodes.OK).json({
        ...result,
        message: "You are now logged in.",
      });
    } else {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: "Incorrect password.",
      });
    }
  };
  


export default function clientLogout(request, response) {
    console.log("Hello  you are Logout");
    response.clearCookie("access_token", { path: "/" });
    response.status(StatusCodes.OK).json("User Logout");
  }
  