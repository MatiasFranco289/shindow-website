import { MdComputer } from "react-icons/md";
import CustomButton from "./CustomButton";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";

interface DownloadCardProps {
  title: string;
  icon: IconType;
  description: string;
  repo: string;
  installationGuide: string;
}

export default function DownloadCard({
  title,
  icon,
  description,
  repo,
  installationGuide,
}: DownloadCardProps) {
  const router = useRouter();

  return (
    <div className="bg-custom-green-50 w-5/6 md:w-[700px] xl:w-[1200px] p-6 rounded-xl my-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        <MdComputer className="text-2xl" />
      </div>

      <p className="my-4">{description}</p>

      <div className="flex flex-wrap space-x-6">
        <div className="my-2">
          <CustomButton
            text="Github"
            minHeight="min-h-0"
            minWidth="min-w-24"
            onBtnClicked={() => {
              window.open(repo, "_blank");
            }}
          />
        </div>

        <div className="my-2">
          <CustomButton
            text="Installation guide"
            minHeight="min-h-0"
            minWidth="min-w-42"
            onBtnClicked={() => {
              router.push(installationGuide);
            }}
          />
        </div>
      </div>
    </div>
  );
}
