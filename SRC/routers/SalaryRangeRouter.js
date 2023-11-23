import express from 'express'
import { FeatchAllActiveSalary, FeatchAllSalary, SaveSalary, deleteSalary, fetchDeActiveSalary } from '../controller/salaryRangeController.js';

const SalaryRouter = express.Router();

SalaryRouter.post('/Salary',SaveSalary)
SalaryRouter.get('/Salary/all',FeatchAllSalary)
SalaryRouter.get('/Salary/active',FeatchAllActiveSalary)
SalaryRouter.get('/Salary/Deactive',fetchDeActiveSalary)
SalaryRouter.get('/Salary/Delate:id',deleteSalary)


export default SalaryRouter