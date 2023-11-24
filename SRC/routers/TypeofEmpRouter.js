import express from 'express'
import { DeleteTypeofEmp, FetchAllDeactiveSaveTypeofEmployee, FetchAllactiveSaveTypeofEmployee, FetchSaveTypeofEmployee, SaveTypeofEmployee } from '../controller/TypeofEmployeeController.js';

const TypeEmpRouter= express.Router();

TypeEmpRouter.post('/Employee',SaveTypeofEmployee)
TypeEmpRouter.get('/Employee/all',FetchSaveTypeofEmployee)
TypeEmpRouter.get('/Employee/active',FetchAllactiveSaveTypeofEmployee)
TypeEmpRouter.get('/Employee/Deactive',FetchAllDeactiveSaveTypeofEmployee)
TypeEmpRouter.delete('/Employee/Delate:id',DeleteTypeofEmp)

export default TypeEmpRouter;