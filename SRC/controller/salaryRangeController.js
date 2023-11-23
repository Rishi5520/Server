import { StatusCodes } from "http-status-codes";
import SalaryModel from "../Model/salaryRange.js";

export  async function SaveSalary(request,response) {
  try {
    const SaveSlaray =  new   SalaryModel(request.body);
    const DBsaveSalry = await SaveSlaray.save();
response.status(StatusCodes.OK).json(DBsaveSalry)
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
  }
}


export async function FeatchAllSalary(request,response) {
try {
  const AllSalaryFeatch = await SalaryModel.find();
  response.status(StatusCodes.OK).json(AllSalaryFeatch)
} catch (error) {
  console.log(error);
  response.status(StatusCodes.ERROR).json(error.message.error);
}
}
export async function FeatchAllActiveSalary(request, response) {
  try {
    const SalaryFatch = await SalaryModel.find({ isActive: true });
    response.status(StatusCodes.OK).json(SalaryFatch);
  } catch (error) {
    console.log(error);
    response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(error.message.error);
  }
}
export async function fetchDeActiveSalary(request, response) {
  try {
    const SalaryFatch = await SalaryModel.find({ isActive: false });
    response.status(StatusCodes.OK).json(SalaryFatch);
  } catch (error) {
    response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(error.message.error);
  }
}
export async function deleteSalary(request, response) {
  try {
    await SalaryModel.findOneAndDelete({ _id: request.params.id._id });
    response.status(StatusCodes.NO_CONTENT).json(SalaryModel.message);
  } catch (error) {
    console.error(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
  }
}