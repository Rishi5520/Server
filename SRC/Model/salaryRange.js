import mongoose from "mongoose";

const SalaryRangeSchema = mongoose.Schema({
  SalaryRange:{type:'String',required:true},
  isActive:{type:'boolean',required:true}

},{timestamps:true});

const SalaryModel = mongoose.model('SalaryRange',SalaryRangeSchema);
export default SalaryModel;