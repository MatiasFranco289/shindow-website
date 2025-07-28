"use client";
import DownloadCard from "../../components/DownloadCard";
import appVersions from "../../../public/documents/appVersions";

export default function Downloads() {
  return (
    <div
      className="w-full bg-gradient-to-t from-custom-green-50 to-custom-green-150 font-roboto
    overflow-hidden min-h-screen flex flex-col items-center pt-6 pb-12"
    >
      <h2 className="text-3xl font-semibold">Downloads</h2>

      {appVersions.map((version, index) => {
        return (
          <DownloadCard
            title={version.title}
            icon={version.icon}
            description={version.description}
            repo={version.repo}
            installationGuide={version.installationGuide}
            key={`version_card_${index}`}
          />
        );
      })}
    </div>
  );
}
