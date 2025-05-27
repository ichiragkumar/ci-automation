import express from "express";
import { gitHubCommitHandler } from "../controllers/gitlab";



const gitLabRouter = express.Router();



gitLabRouter.post("/gitlab", gitHubCommitHandler)


export default gitLabRouter;