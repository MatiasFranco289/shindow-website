import { DownloadUrl } from "./types";

export interface DownloadSource {
  title: string;
  description: string;
  target: string;
  downloadSources: Array<DownloadUrl>;
  guideUrl: string;
}

export interface Blog {
  title: string;
  author: {
    nickname: string;
    name: string;
  };
  date: string;
  message: string;
}

export interface FileData {
  fileName: string;
  content: string;
}

export interface Donator {
  name: string;
  email: string;
  amount: number;
  date: string;
}
