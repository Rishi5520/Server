import mongoose, { SchemaType } from 'mongoose';


const JobSchema = mongoose.Schema({
    recruiter: {
        type: Schema.Types.ObjectId,
        ref: 'Recruiter',
        //required: true
    },
    recruiterName: {
        type: String, required: true
    },
    recruiterEmail: {
        type: String, required:true
    },
    title: {
        type: String,
        //required: true
    },
    description: {
        type: String, required:true
    },
    type: {
        type: String,
        //required: true
    },
    duration: {
        type: Number,
        //required: true
    },
    salary: {
        type: Number,
    },
    Categeory:{
        type:Schema.Types.ObjectId,
        ref: 'Categeory',
        required: true
    }
});

const Jobmodel = mongoose.model("Job", JobSchema);
export default Jobmodel;