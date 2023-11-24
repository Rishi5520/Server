import express from 'express';
import { FeatchAllActiveIndustry, FeatchAllDeactiveIndustry, FeatchAllIndustry, SaveIndustry, deleteIndustry } from '../controller/IndustryController.js';

const IndustryRouter = express.Router()


IndustryRouter.post('/Industry',SaveIndustry)
IndustryRouter.post('/Industry',FeatchAllIndustry)
IndustryRouter.get('/Industry/active',FeatchAllActiveIndustry)
IndustryRouter.get('/Industry/Deactive',FeatchAllDeactiveIndustry)
IndustryRouter.delete('/Industry/Delete:id',deleteIndustry)





export default IndustryRouter;