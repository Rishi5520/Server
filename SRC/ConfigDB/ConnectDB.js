import mongoose from 'mongoose'
import "dotenv/config"

export  async function  DbConnect() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("DB connection established Sucessfully !!");
    } catch (error) { 
        console.log(error);
    }
}