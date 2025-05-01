import fs from "fs";
import path from "path";
import { FileData } from "../../interfaces";

export default class BuildManager {
  constructor() {}

  public async LoadAll(directoryPath: string, validExtensions: Array<string>) {
    const files = await fs.promises.readdir(directoryPath);

    const filteredFiles = files.filter((file) =>
      validExtensions.includes(path.extname(file))
    );

    const fileData: Array<FileData> = await Promise.all(
      filteredFiles.map(async (file) => {
        const content = await fs.promises.readFile(
          path.join(directoryPath, file),
          "utf-8"
        );
        return { fileName: file, content };
      })
    );

    return fileData;
  }

  public async saveFiles(files: Array<FileData>, outputPath: string) {
    await Promise.all(
      files.map(({ fileName, content }) => {
        const filePath = path.join(outputPath, fileName);
        return fs.promises.writeFile(filePath, content, "utf-8");
      })
    );
  }

  public CustomReplace(
    html: string,
    templates: Array<FileData>,
    jsons: Array<FileData>
  ) {
    const regex = /\{([^}]+)\}/g;

    const result = html.replace(regex, (_, key) => {
      const ext = key.split(".").pop();

      if (ext === "html") {
        const replacement = templates.find((r) => r.fileName === key);
        return replacement?.content || "";
      } else {
        const keyWithoutExt = key.replace(`.${ext}`, "");
        const json = jsons.find((j) => j.fileName === key);
        const parsedJsonContent = JSON.parse(json.content);
        const template = templates.find(
          (t) => t.fileName === keyWithoutExt + ".html"
        );

        const buildedTemplates = parsedJsonContent.map((item) => {
          let buildedTemplate = template.content;

          buildedTemplate = buildedTemplate.replace(regex, (_, key) => {
            return item[key] || "";
          });

          return buildedTemplate;
        });

        return buildedTemplates.join("");
      }
    });

    return result;
  }
}
