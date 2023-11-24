import express from 'express'
import { FeatchAllActiveCompany, FeatchAllCompany, FeatchAllDeactiveCompany, SaveCompany, deleteCompany } from '../controller/CompanSizeController.js';

const CompanySizeRouter = express
.Router();

CompanySizeRouter.post('/company',SaveCompany)
CompanySizeRouter.get('/company/all',FeatchAllCompany)
CompanySizeRouter.get('/company/active',FeatchAllActiveCompany)
CompanySizeRouter.get('/company/Deactive',FeatchAllDeactiveCompany)
CompanySizeRouter.delete('/company/Delete:id',deleteCompany)

export default CompanySizeRouter;
