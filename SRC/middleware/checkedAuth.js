import { StatusCodes } from "http-status-codes";

//verfiy JWT from authroization header Milldeware
export const UserAuth =(request,response,next)=>{
  const  AuthHeader = request.header["authorization"];
  console.log(process.env.SECRET_KEY);
  if (!AuthHeader) {
    return response.status(StatusCodes.FORBIDDEN);
  }
  console.log(AuthHeader);  //Barear token

  const token = AuthHeader.split("")[1];
  jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
    console.log("verfiying");
    if (err) {
      return response.status(StatusCodes.FORBIDDEN);
    }
    console.log(decoded);
    next(); 
  });
};

//Check the Role Middleware

export const CheckRole = (roles)=> async(request,response,next)=>{
  let { email } = request.body;

  //reterive employe infro form DB

 const user = await Usermodel.findOne({email});
 !roles.includes(user.role)
 ?response.status(StatusCodes.UNAUTHORIZED).json("sorry you don't have access this route")
  :next();
};