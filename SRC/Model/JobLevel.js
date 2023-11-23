import mongoose from 'mongoose';

const JoblevelsSchema = mongoose.Schema({
  Level:{type:String,required:true},
  isActive:{type:Boolean,required:true}
},{timestamps:true});

const JoblevelsModel = mongoose.model('Joblevels',JoblevelsSchema);
export default JoblevelsModel;