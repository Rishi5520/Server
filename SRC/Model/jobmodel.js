import mongoose, { SchemaType } from 'mongoose';


const JobSchema = mongoose.Schema({
    recruiterName: {
        type: String, required: true
    },
    recruiterEmail: {
        type: String, required:true
    },
    Category: {
        type: mongoose.Schema.Types.String,
        ref: 'Category',
        required: true
    },
    //  :{
    //     type:Schema.Types.ObjectId,
    //     ref: 'Currency',
    //     required: true
    // }, 
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    Gender:{
        type: String, default:'Any',
        enum:['Male','Female','Any']
    },
    duration: {
        type: String,
        required: true
    },
    salaryForm: {
        type: String,required:true
    },
    salaryTo:{
        type:String,required:true
    },
    description: {
        type: String, required:true
    },  



    
},{timestamps:true});

const Jobmodel = mongoose.model("Job", JobSchema);
export default Jobmodel;