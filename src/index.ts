import express from "express";
import { DEFAULT_PORT } from "../constants.js";
import pagesRouter from "./routes/pages.js";
import dotenv from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import buildPages from "./services/buildPages.js";
import buildJob from "./services/recurrentTasks.js";
import logger from "./services/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || DEFAULT_PORT;
const REBUILD = process.env.REBUILD_ON_START;
const ENVIRONMENT = process.env.NODE_ENV;

app.use("/css", express.static(join(__dirname, "../public/css")));
app.use("/gifs", express.static(join(__dirname, "../public/gifs")));
app.use("/scripts", express.static(join(__dirname, "../public/scripts")));
app.use("/images", express.static(join(__dirname, "../public/images")));
app.use("/", pagesRouter);

async function startServer() {
  if (REBUILD) {
    logger.info("Building pages on start");
    await buildPages(ENVIRONMENT);
  }

  app.listen(PORT, () => {
    logger.info(`Server in running at localhost:${PORT}`);
    buildJob.start();
  });
}

startServer();
