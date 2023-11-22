import express from 'express';
import { PostJob } from '../controller/JobPostController.js';


const PostJobRouter= express.Router()

PostJobRouter.post('/PostJobs',PostJob)

export default PostJobRouter;