import { StatusCodes } from "http-status-codes";
import Jobmodel from "../Model/jobmodel.js";

export async function PostJob(request, response) {
  try {
    const saveJob =   new Jobmodel(request.body);
    const job = await saveJob.save();
    response.status(StatusCodes.OK).json(job);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

export async function FeatchAllPostJob(request, response) {
  try {
  const FeatchallJob = await Jobmodel.find();
  response.status(StatusCodes.OK).json(FeatchallJob);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
  }
}