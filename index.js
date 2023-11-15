import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import "dotenv/config";
import { DbConnect } from './SRC/ConfigDB/ConnectDB.js';
// import { checkAuthorized } from './SRC/middleware/checkedAuth.js';
import UserRouter from './SRC/routers/UserRouter.js';
import bodyParser from 'body-parser';
// const bodyParser = require("body-parser")

const app = express();

//middleware
// checkAuthorized();


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(UserRouter);
app.listen(process.env.PORT,()=>{
    console.log(`server listening on port ${process.env.PORT}`);
    DbConnect();
});