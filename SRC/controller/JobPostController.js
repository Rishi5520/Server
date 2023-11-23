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