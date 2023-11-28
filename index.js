import express from 'express';
import "dotenv/config";
import { DbConnect } from './SRC/ConfigDB/ConnectDB.js';
import UserRouter from './SRC/routers/UserRouter.js';
import bodyParser from 'body-parser';
import CategoryRouter from './SRC/routers/CategoryRouter.js';
import PostJobRouter from './SRC/routers/PostJobRouter.js';
import TypeEmpRouter from './SRC/routers/TypeofEmpRouter.js';
import SalaryRouter from './SRC/routers/SalaryRangeRouter.js';
import CompanySizeRouter from './SRC/routers/CompanySizeRouter.js';
import IndustryRouter from './SRC/routers/IndustryRouter.js';
import JoblevelRouter from './SRC/routers/JoblevelRouter.js';


const app = express();

// middleware

app.use(express.json());
// app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(UserRouter);
app.use(CategoryRouter);
app.use(PostJobRouter);
app.use(TypeEmpRouter);
app.use(SalaryRouter);
app.use(CompanySizeRouter);
app.use(IndustryRouter);
app.use(JoblevelRouter)
app.listen(process.env.PORT,()=>{
    console.log(`server listening on port ${process.env.PORT}`);
    DbConnect();
});