import express from 'express';
import "dotenv/config";
import { DbConnect } from './SRC/ConfigDB/ConnectDB.js';
import UserRouter from './SRC/routers/UserRouter.js';
import bodyParser from 'body-parser';
import CategoryRouter from './SRC/routers/CategoryRouter.js';
import PostJobRouter from './SRC/routers/PostJobRouter.js';


const app = express();

//middleware
// checkAuthorized();


// app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(UserRouter);
app.use(CategoryRouter);
app.use(PostJobRouter);
app.listen(process.env.PORT,()=>{
    console.log(`server listening on port ${process.env.PORT}`);
    DbConnect();
});