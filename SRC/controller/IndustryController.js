import { StatusCodes } from "http-status-codes";
import Industrymodel from "../Model/Industry.js";


export  async function SaveIndustry(request, response) {
  try {
    const SaveIndu = Industrymodel(request.body);
    const SaveDbIndustry= await SaveIndu.save();
    response.status(StatusCodes.OK).json(SaveDbIndustry);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function FeatchAllIndustry(request, response) {
  try {
    const AllIndustryFatch = await Industrymodel.find();
    response.status(StatusCodes.OK).json(StatusCodes.OK).json(AllIndustryFatch);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.OK).json(error.message.error);
  }
}

export async function FeatchAllActiveIndustry(request,response) {
  try {
    const IndustryFatch = await Companymodel.find({isActive: true});
    response.status(StatusCodes.OK).json(CompanyFatch);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message.error);
  }
}

export async function FeatchAllDeactiveIndustry(request,response) {
  try {
    const CompanyFatch = await Companymodel.find({isActive: false});
    response.status(StatusCodes.OK).json(CompanyFatch);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message.error);
  }
}

export async function deleteIndustry(request, response) {
  try {
    await Industrymodel.findOneAndDelete({ _id: request.params.id._id });
    response.status(StatusCodes.NO_CONTENT).json();
  } catch (error) {
    console.error(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
  }
}