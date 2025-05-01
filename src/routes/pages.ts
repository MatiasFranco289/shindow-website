import { Router } from "express";
import pagesController from "../controllers/pagesController.js";

const pagesRouter = Router();

pagesRouter.get(`/`, pagesController);
pagesRouter.get(`/:pageName`, pagesController);

export default pagesRouter;
