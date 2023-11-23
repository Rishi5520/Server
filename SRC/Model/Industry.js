import mongoose from 'mongoose';

const IndustrySchema = mongoose.Schema({
  Industry:{type:String,required:true},
  isActive:{type:Boolean,required:true}
},{timestamps:true});

const Industrymodel = mongoose.model('Industry',JoblevelsSchema);
export default Industrymodel;