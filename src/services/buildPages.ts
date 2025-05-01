import {
  HTML_OUTPUT_DIR,
  HTML_PATH,
  JSON_PATH,
  PROD,
  TEMPLATES_PATH,
} from "../../constants.js";
import BuildManager from "../utils/BuildManager.js";
import updateDonations from "./donations.js";
import logger from "./logger.js";

const buildPages = async (env: string) => {
  const buildManager = new BuildManager();

  const pages = await buildManager.LoadAll(HTML_PATH, [".html"]);
  const templates = await buildManager.LoadAll(TEMPLATES_PATH, [".html"]);
  const jsons = await buildManager.LoadAll(JSON_PATH, [".json"]);
  env === PROD && (await updateData());

  const replacedPages = pages.map((page) => {
    const result = buildManager.CustomReplace(page.content, templates, jsons);
    return { ...page, content: result };
  });

  buildManager.saveFiles(replacedPages, HTML_OUTPUT_DIR);

  logger.info("Rebuild completed successfully");
  return pages;
};

async function updateData() {
  return updateDonations();
}

export default buildPages;
