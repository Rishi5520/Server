import mongoose from 'mongoose';


const UserSchema = mongoose.Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    work: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    role:{
        type:String,
        enum:["Admin","Candinate","Company"],
    }
    
},{timestamps:true});
const Usermodel = mongoose.model("User", UserSchema);
export default Usermodel;
