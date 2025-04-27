import path from "path";
import fs from "fs";
import { HTML_OUTPUT_DIR, HTML_PATH, TEMPLATES_PATH } from "../../constants.js";
import downloadSources from "../json/downloadSources.json" assert { type: "json" };
import { DownloadSource } from "../../interfaces.js";

const downloadsBuilder = {
  build: async () => {
    try {
      console.log("Building the downloads page");

      const outputPath = path.join(
        process.cwd(),
        HTML_OUTPUT_DIR,
        "/downloads.html"
      );
      const headerPath = path.join(
        process.cwd(),
        TEMPLATES_PATH,
        "/header.html"
      );
      const downloadsPath = path.join(
        process.cwd(),
        HTML_PATH,
        "/downloads.html"
      );
      const downloadCardPath = path.join(
        process.cwd(),
        TEMPLATES_PATH,
        "/downloadCard.html"
      );
      const footerPath = path.join(
        process.cwd(),
        TEMPLATES_PATH,
        "/footer.html"
      );

      const [
        downloadsContent,
        headerContent,
        downloadCardContent,
        footerContent,
      ] = await Promise.all([
        fs.promises.readFile(downloadsPath, "utf-8"),
        fs.promises.readFile(headerPath, "utf-8"),
        fs.promises.readFile(downloadCardPath, "utf-8"),
        fs.promises.readFile(footerPath, "utf-8"),
      ]);

      let updatedDownloadsContent = downloadsContent.replace(
        "<CustomHeader />",
        headerContent
      );

      let cards = downloadSources.map((source: DownloadSource) => {
        let cardContent = downloadCardContent;
        cardContent = cardContent.replace("{title}", source.title);
        cardContent = cardContent.replace("{description}", source.description);

        let downloadSrcBtns = source.downloadSources.map((downloadSrc) => {
          return `<div><button onClick="window.location.href='${downloadSrc.url}';">${downloadSrc.title}</button></div>`;
        });

        cardContent = cardContent.replace(
          "{sources}",
          downloadSrcBtns.join("")
        );
        cardContent = cardContent.replace("{guideUrl}", source.guideUrl);

        return cardContent;
      });

      updatedDownloadsContent = updatedDownloadsContent.replace(
        "{cards}",
        cards.join("")
      );
      updatedDownloadsContent = updatedDownloadsContent.replace(
        "{footer}",
        footerContent
      );

      await fs.promises.writeFile(outputPath, updatedDownloadsContent, "utf-8");

      console.log("The building of the downloads page has ended successfully");
    } catch (err) {
      console.error(
        "The building of the downloads page has ended with an error: "
      );
      console.error(err);
    }
  },
};

export default downloadsBuilder;
