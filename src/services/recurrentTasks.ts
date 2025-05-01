import cron from "cron";
import buildPages from "./buildPages.js";
import logger from "./logger.js";

const REBUILD_TIME = process.env.REBUILD_TIME;
const ENVIRONMENT = process.env.ENV;

const buildJob = new cron.CronJob(`*/${REBUILD_TIME} * * * * *`, () => {
  logger.info("Running rebuild job");
  buildPages(ENVIRONMENT);
});

export default buildJob;
