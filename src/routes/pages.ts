import { Router } from "express";
import pagesController from "../controllers/pagesController.js";

const pagesRouter = Router();

pagesRouter.get(`/`, pagesController.home);
pagesRouter.get("/downloads", pagesController.downloads);

export default pagesRouter;
