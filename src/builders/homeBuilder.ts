import path from "path";
import fs from "fs";
import { HTML_OUTPUT_DIR, TEMPLATES_PATH, HTML_PATH } from "../../constants.js";

const homeBuilder = {
  build: async () => {
    try {
      console.log("Building the home page");

      const outputPath = path.join(
        process.cwd(),
        HTML_OUTPUT_DIR,
        "/home.html"
      );
      const homePath = path.join(process.cwd(), HTML_PATH, "/home.html");
      const carouselPath = path.join(
        process.cwd(),
        TEMPLATES_PATH,
        "/carousel.html"
      );
      const headerPath = path.join(
        process.cwd(),
        TEMPLATES_PATH,
        "/header.html"
      );
      const footerPath = path.join(
        process.cwd(),
        TEMPLATES_PATH,
        "/footer.html"
      );

      const [homeContent, carouselContent, headerContent, footerContent] =
        await Promise.all([
          fs.promises.readFile(homePath, "utf-8"),
          fs.promises.readFile(carouselPath, "utf-8"),
          fs.promises.readFile(headerPath, "utf-8"),
          fs.promises.readFile(footerPath, "utf-8"),
        ]);

      let updatedHomeContent = homeContent.replace(
        "<Carousel />",
        carouselContent
      );
      updatedHomeContent = updatedHomeContent.replace(
        "<CustomHeader />",
        headerContent
      );
      updatedHomeContent = updatedHomeContent.replace(
        "{footer}",
        footerContent
      );

      await fs.promises.writeFile(outputPath, updatedHomeContent, "utf-8");

      console.log("The building of the home page has ended successfully");
    } catch (err) {
      console.error("The building of the home page has ended with an error: ");
      console.error(err);
    }
  },
};

export default homeBuilder;
