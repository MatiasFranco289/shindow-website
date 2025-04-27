import express from "express";
import { DEFAULT_PORT } from "../constants.js";
import pagesRouter from "./routes/pages.js";
import dotenv from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import homeBuilder from "./builders/homeBuilder.js";
import downloadsBuilder from "./builders/downloadsBuilder.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || DEFAULT_PORT;
const REBUILD = process.env.REBUILD_ON_START;

app.use("/css", express.static(join(__dirname, "../public/css")));
app.use("/gifs", express.static(join(__dirname, "../public/gifs")));
app.use("/scripts", express.static(join(__dirname, "../public/scripts")));
app.use("/", pagesRouter);

async function buildPages() {
  if (REBUILD === "true") {
    return Promise.all([homeBuilder.build(), downloadsBuilder.build()]);
  }
}

async function startServer() {
  await buildPages();

  app.listen(PORT, () => {
    console.log(`Server in running at localhost:${PORT}`);
  });
}

startServer();
