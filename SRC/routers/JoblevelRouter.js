import express from 'express'
import { FeatchAllActiveJoblevel, FeatchAllDeactiveJoblevel, FeatchAllJoblevel, SaveJoblevel, deleteJoblevel } from '../controller/Joblevelcontroller.js'

const JoblevelRouter = express.Router()

JoblevelRouter.post("/Joblevel",SaveJoblevel);
JoblevelRouter.get("/Joblevel/all",FeatchAllJoblevel);
JoblevelRouter.get("/Joblevel/active ",FeatchAllActiveJoblevel);
JoblevelRouter.get("/Joblevel/Deactive ",FeatchAllDeactiveJoblevel);
JoblevelRouter.get("/Joblevel/Deactive ",FeatchAllDeactiveJoblevel);
JoblevelRouter.delete("/Joblevel/Delete:id",deleteJoblevel);



export default JoblevelRouter;