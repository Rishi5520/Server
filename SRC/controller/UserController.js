
import { StatusCodes } from "http-status-codes";
import Usermodel from "../Model/Usermodel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export async function Ragister(request,response) {
    const {name,username,email,work,phone,password} = request.body;
    try {
       const exitingUser = await Usermodel.findOne({email:email});
       if(exitingUser){
        return response.status(StatusCodes.BAD_REQUEST).json({message:"User already exists"});
       }
      const hashedPassword = await  bcrypt.hash(password,10);
       const createUser =  await Usermodel.create({
        name:name,
        work:work,
        phone:phone,    
        email:email,
        password:hashedPassword,
        username:username,
       })
        const token = jwt.sign({email:createUser.email, id:createUser._id},process.env.SECRET_KEY)

        response.status(StatusCodes.OK).json({user:createUser,token:token});

    } catch (error) {
            console.log(error);
            response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:error.message});        
    }
}

export async function Login(request,response) {
    const {email,  password} =  request.body;
    try {
        const exitingUser = await Usermodel.findOne({email:email});
       if(!exitingUser){
        return response.status(StatusCodes.BAD_REQUEST).json({message:"User already exists"});
       }
       const matchPasswords = await bcrypt.compare(password, exitingUser.password);
       if (!matchPasswords) {
        return response.status(StatusCodes.BAD_REQUEST).json({message:"Password does not match"}); 
       }
       const token = jwt.sign({email:exitingUser.email, id:exitingUser._id},process.env.SECRET_KEY)
       response.cookie("JWTtoken", token, {
        expires:new Date(Date.now()+25892000000),
        httpOnly: true });

       response.status(StatusCodes.OK).json({user:exitingUser,token:token});
    } catch (error) {
        console.log(error);
            response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:error.message}); 
    }
}


export default function clientLogout(request, response) {
    console.log("Hello  you are Logout");
    response.clearCookie("access_token", { path: "/" });
    response.status(StatusCodes.OK).json("User Logout");
  }
  