import mongoose from 'mongoose'

const TypesSchema = mongoose.Schema({
    TypeofEmployee:{type:String, required:true},
    isActive:{type:Boolean, required:true}
},{timestamps:true})

    const Typemodel = mongoose.model("Types", TypesSchema);
    export default Typemodel;
