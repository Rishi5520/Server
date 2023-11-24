import { StatusCodes } from "http-status-codes";
import Companymodel from "../Model/CompanySize.js";

export async function SaveCompany(request, response) {
  try {
    const SCompany = new  Companymodel(request.body);
    const DbsCompany = await SCompany.save();
    response.status(StatusCodes.OK).json(DbsCompany);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

export async function FeatchAllCompany(request,response) {
  try {
    const AllCompanyFeatch = await Companymodel.find();
    response.status(StatusCodes.OK).json(AllCompanyFeatch)
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.ERROR).json(error.message.error);
  }
  }

  export async function FeatchAllActiveCompany(request,response) {
    try {
      const CompanyFatch = await Companymodel.find({isActive: true});
      response.status(StatusCodes.OK).json(CompanyFatch);
    } catch (error) {
      console.log(error);
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message.error);
    }
  }
  
  export async function FeatchAllDeactiveCompany(request,response) {
    try {
      const CompanyFatch = await Companymodel.find({isActive: false});
      response.status(StatusCodes.OK).json(CompanyFatch);
    } catch (error) {
      console.log(error);
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message.error);
    }
  }

  export async function deleteCompany(request, response) {
    try {
      await Companymodel.findOneAndDelete({ _id: request.params.id._id });
      response.status(StatusCodes.NO_CONTENT).json(Companymodel.message);
    } catch (error) {
      console.error(error);
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
    }
  }

