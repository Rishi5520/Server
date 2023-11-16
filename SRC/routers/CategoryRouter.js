import express from 'express'
import { FeatchAll, SaveCategory } from '../controller/CategoryCongroller.js';

const CategoryRouter = express.Router()

CategoryRouter.post('/category', SaveCategory);
CategoryRouter.get('/category/all', FeatchAll);
CategoryRouter.post('/category', SaveCategory);

export default CategoryRouter;