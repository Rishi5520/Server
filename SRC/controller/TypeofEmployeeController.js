import { StatusCodes } from "http-status-codes";
import Typemodel from "../Model/TypeofEmployee.js";

export async function SaveTypeofEmployee(request, response) {
  try {
    const SaveEmployee = new Typemodel(request.body);
    const DbSaveEmp = await SaveEmployee.save();
    response.status(StatusCodes.OK).json(DbSaveEmp);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message)
    }
}

export async function FetchSaveTypeofEmployee(request, response) {
  try {
    const FetchTypeofEmp=  await Typemodel.find();
    response.status(StatusCodes.OK).json(FetchTypeofEmp);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message)
    }
}

export async function FetchAllactiveSaveTypeofEmployee(request, response) {
  try {
    const FetchActiveTypeofEmp=  await Typemodel.find({isActive: true});
    response.status(StatusCodes.OK).json(FetchActiveTypeofEmp);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message)
    }
}

export async function FetchAllDeactiveSaveTypeofEmployee(request, response) {
  try {
    const FetchDeActiveTypeofEmp=  await Typemodel.find({isActive: false});
    response.status(StatusCodes.OK).json(FetchDeActiveTypeofEmp);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message)
    }
}

export async function DeleteTypeofEmp(request, response) {
  try {
    await Typemodel.findOneAndDelete({ _id: request.params.id._id });
    response.status(StatusCodes.NO_CONTENT).json(Typemodel.message);
  } catch (error) {
    console.error(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
  }
}