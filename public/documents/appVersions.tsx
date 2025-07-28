import { MdComputer } from "react-icons/md";
import { AppVersion } from "../../interfaces";

const appVersions: Array<AppVersion> = [
  {
    title: "Shindow ",
    icon: MdComputer,
    description: "The oficial Shindow full aplication (Client + API).",
    repo: "https://github.com/MatiasFranco289/Shindow/tree/main/backend-shindow",
    installationGuide: "/setup#docker-compose",
  },
  {
    title: "Shindow client image",
    icon: MdComputer,
    description: "The oficial Shindow web interface docker image for desktop.",
    repo: "https://github.com/MatiasFranco289/Shindow/tree/main/frontend-shindow",
    installationGuide: "/setup#docker",
  },
  {
    title: "Shindow API image",
    icon: MdComputer,
    description: "The oficial Shindow API docker image.",
    repo: "https://github.com/MatiasFranco289/Shindow/tree/main/backend-shindow",
    installationGuide: "/setup#docker",
  },
];

export default appVersions;
