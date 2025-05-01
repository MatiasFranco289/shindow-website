import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { HTML_OUTPUT_DIR } from "../../constants.js";

const pagesController = async (req: Request, res: Response) => {
  try {
    const templateName = (req.url.replace("/", "") || "home") + ".html";
    const filePath = path.join(HTML_OUTPUT_DIR, templateName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    res.send(fileContent);
    return;
  } catch (err) {
    const filePath = path.join(HTML_OUTPUT_DIR, "notFound.html");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    res.send(fileContent);
    return;
  }
};

export default pagesController;
