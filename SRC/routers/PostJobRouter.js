import express from 'express';
import { FeatchAllPostJob, PostJob } from '../controller/JobPostController.js';


const PostJobRouter= express.Router()

PostJobRouter.post('/PostJobs',PostJob)
PostJobRouter.get('/PostJobs/all',FeatchAllPostJob)

export default PostJobRouter;