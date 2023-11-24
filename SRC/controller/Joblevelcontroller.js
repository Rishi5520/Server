import { StatusCodes } from "http-status-codes";
import JoblevelsModel from "../Model/JobLevel.js";

export async function SaveJoblevel(request, response) {

  try {
    const SaveJoblevel = JoblevelsModel(request.body)
  const DbsaveJob = await SaveJoblevel.save();
  response.status(StatusCodes.OK).json(DbsaveJob);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
  
}

export async function FeatchAllJoblevel(request, response) {
  try {
    const AllJoblevelFatch = await JoblevelsModel.find();
    response.status(StatusCodes.OK).json(StatusCodes.OK).json(AllJoblevelFatch);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.OK).json(error.message.error);
  }
}

export async function FeatchAllActiveJoblevel(request,response) {
  try {
    const JoblevelFatch = await JoblevelsModel.find({isActive: true});
    response.status(StatusCodes.OK).json(JoblevelFatch);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message.error);
  }
}

export async function FeatchAllDeactiveJoblevel(request,response) {
  try {
    const Joblevel = await Companymodel.find({isActive: false});
    response.status(StatusCodes.OK).json(Joblevel);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message.error);
  }
}

export async function deleteJoblevel(request, response) {
  try {
    await JoblevelsModel.findOneAndDelete({ _id: request.params.id._id });
    response.status(StatusCodes.NO_CONTENT).json();
  } catch (error) {
    console.error(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
  }
}