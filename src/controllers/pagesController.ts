import { Request, Response } from "express";
import path from "path";
import fs from "fs";

const pagesController = {
  home: async (req: Request, res: Response<string>) => {
    try {
      const homePath = path.join(process.cwd(), "public/html/home.html");
      const carouselPath = path.join(
        process.cwd(),
        "public/html/templates/carousel.html"
      );
      const headerPath = path.join(
        process.cwd(),
        "public/html/templates/header.html"
      );

      const [homeContent, carouselContent, headerContent] = await Promise.all([
        fs.promises.readFile(homePath, "utf-8"),
        fs.promises.readFile(carouselPath, "utf-8"),
        fs.promises.readFile(headerPath, "utf-8"),
      ]);

      let updatedHomeContent = homeContent.replace(
        "<Carousel />",
        carouselContent
      );
      updatedHomeContent = updatedHomeContent.replace(
        "<CustomHeader />",
        headerContent
      );

      res.send(updatedHomeContent);
    } catch (err) {
      res.status(500).send("An error has occurred while reading the HTML file");
    }
  },
  downloads: async (req: Request, res: Response<string>) => {
    try {
      const downloadsPath = path.join(
        process.cwd(),
        "public/html/downloads.html"
      );
      const headerPath = path.join(
        process.cwd(),
        "public/html/templates/header.html"
      );

      const [downloadsContent, headerContent] = await Promise.all([
        fs.promises.readFile(downloadsPath, "utf-8"),
        fs.promises.readFile(headerPath, "utf-8"),
      ]);

      let updatedDownloadsContent = downloadsContent.replace(
        "<CustomHeader />",
        headerContent
      );
      res.send(updatedDownloadsContent);
    } catch (err) {
      res.status(500).send("An error has occurred while reading the HTML file");
    }
  },
};

export default pagesController;
