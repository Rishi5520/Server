
import mongoose from 'mongoose';

const CompanySchema = mongoose.Schema({
  Size:{type:String,required:true},
  isActive:{type:Boolean,required:true}
},{timestamps:true});

const Companymodel = mongoose.model('Company',CompanySchema);
export default Companymodel