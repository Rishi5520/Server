import { StatusCodes } from "http-status-codes";
import Category from "../Model/Categorymodel.js";

export async function SaveCategory(request, response) {
  try {
    const savemodel = new Category(request.body);
    const Categorysave = await savemodel.save();
    response.status(StatusCodes.OK).json(Categorysave);
  } catch (error) {
    console.log(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
  }
}

export async function FeatchAll(request, response) {
  try {
    const CategoryFatch = await Category.find();
    response.status(StatusCodes.OK).json(CategoryFatch);
  } catch (error) {
    console.log(error);
    response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(error.message.error);
  }
}

export async function FeatchAllActiveCategory(request, response) {
  try {
    const CategoryFatch = await Category.find({ isActive: true });
    response.status(StatusCodes.OK).json(CategoryFatch);
  } catch (error) {
    console.log(error);
    response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(error.message.error);
  }
}
export async function fetchDeActiveCategory(request, response) {
  try {
    const CategoryFatch = await Category.find({ isActive: false });
    response.status(StatusCodes.OK).json(CategoryFatch);
  } catch (error) {
    response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(error.message.error);
  }
}

export async function deleteCategory(request, response) {
  try {
    await Category.findOneAndDelete({ _id: request.params.id._id });
    response.status(StatusCodes.NO_CONTENT).json(Category.message);
  } catch (error) {
    console.error(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
  }
}