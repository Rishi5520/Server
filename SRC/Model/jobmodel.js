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
    CompanySize:{
        type: mongoose.Schema.Types.String,
        ref:'Company',
        required:true
    },
    JobLevel:{
        type: mongoose.Schema.Types.String,
        ref:'JobLevel',
        required:true
    },
    TypeofEmployee:{
        type:mongoose.Schema.Types.String,
        ref:"Types",
        required:true
    },
    SalaryRange:{
        type: mongoose.Schema.Types.String,
        ref:"SalaryRange",
        required:true
    },
    Industry:{
        type: mongoose.Schema.Types.String,
        ref:"Industry",
        required:true
    },
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
    description: {
        type: String, required:true
    },  



    
},{timestamps:true});

const Jobmodel = mongoose.model("Job", JobSchema);
export default Jobmodel;