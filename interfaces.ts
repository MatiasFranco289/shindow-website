import { DownloadUrl } from "./types";

export interface DownloadSource {
  title: string;
  description: string;
  target: string;
  downloadSources: Array<DownloadUrl>;
  guideUrl: string;
}
