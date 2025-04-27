import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { HTML_OUTPUT_DIR } from "../../constants.js";

const homeController = {
  home: async (req: Request, res: Response<string>) => {
    try {
      const homePath = path.join(process.cwd(), HTML_OUTPUT_DIR, "/home.html");
      const homeContent = await fs.promises.readFile(homePath, "utf-8");
      res.send(homeContent);
    } catch (err) {
      res.status(500).send("An error has occurred while reading the HTML file");
    }
  },
  downloads: async (req: Request, res: Response<string>) => {
    try {
      const downloadsPath = path.join(
        process.cwd(),
        HTML_OUTPUT_DIR,
        "/downloads.html"
      );
      const downloadsContent = await fs.promises.readFile(
        downloadsPath,
        "utf-8"
      );
      res.send(downloadsContent);
    } catch (err) {
      res.status(500).send("An error has occurred while reading the HTML file");
    }
  },
};

export default homeController;
