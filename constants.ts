import path from "path";

const currentWorkingDir = process.cwd();

export const DEFAULT_PORT = "3000";
export const HTML_OUTPUT_DIR = path.join(
  currentWorkingDir,
  "public/html/generated"
);
export const TEMPLATES_PATH = path.join(
  currentWorkingDir,
  "public/html/templates"
);
export const JSON_PATH = path.join(currentWorkingDir, "src/json");
export const HTML_PATH = path.join(currentWorkingDir, "public/html");
export const DEV = "development";
export const PROD = "production";
