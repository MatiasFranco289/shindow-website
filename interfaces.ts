import { IconType } from "react-icons";

export interface AppVersion {
  title: string;
  icon: IconType;
  description: string;
  repo: string;
  installationGuide: string;
}
