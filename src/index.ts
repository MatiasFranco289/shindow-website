import express from "express";
import { DEFAULT_PORT } from "../constants.js";
import pagesRouter from "./routes/pages.js";
import dotenv from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || DEFAULT_PORT;

app.use("/css", express.static(join(__dirname, "../public/css")));
app.use("/gifs", express.static(join(__dirname, "../public/gifs")));
app.use("/scripts", express.static(join(__dirname, "../public/scripts")));
app.use("/", pagesRouter);

app.listen(PORT, () => {
  console.log(`Server in running at localhost:${PORT}`);
});
