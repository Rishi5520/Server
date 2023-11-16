import express from 'express'
import { FeatchAll, FeatchAllActiveCategory, SaveCategory, deleteCategory, fetchDeActiveCategory } from '../controller/CategoryCongroller.js';

const CategoryRouter = express.Router()

CategoryRouter.post('/category', SaveCategory);
CategoryRouter.get('/category/all', FeatchAll);
CategoryRouter.get('/category/active', FeatchAllActiveCategory);
CategoryRouter.get('/category/Deactive', fetchDeActiveCategory);
CategoryRouter.delete('/category/:name',deleteCategory);

export default CategoryRouter;