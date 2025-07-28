"use client";
import CustomButton from "../components/CustomButton";
import ImageCarousel from "../components/ImageCarousel";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full bg-gradient-to-t from-custom-green-50 to-custom-green-150 font-roboto overflow-hidden min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-8 px-4 py-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          The free web graphic user interface
        </h2>

        <p className="text-center w-4/6 sm:w-120 ">
          Shindow is a free web graphic user interface for server. It allows you
          to connect and manage your servers from a web client.
        </p>

        <div className="w-1/6 min-w-max">
          <CustomButton
            text="Download now"
            onBtnClicked={() => {
              router.push("/downloads");
            }}
          />
        </div>
      </div>

      <div className="bg-custom-green-50 flex flex-col items-center space-y-8 py-10 px-4 border-y boder-white">
        <h3 className="text-3xl sm:text-4xl font-bold text-center">
          What is Shindow?
        </h3>

        <p className="w-3/6 text-center">
          Shindow is a web client which allows you to visualize and manage the
          content of your server. You can run it locally in your own machine, in
          the same server or even in another machine. It providers features like
          creating, deleting, uploading and managing your resources efficiently
          through an intuitive interface with an easy setup.
        </p>

        <div className="w-1/6 min-w-max">
          <CustomButton
            text="Setup guide"
            onBtnClicked={() => {
              router.push("/setup");
            }}
          />
        </div>
      </div>

      <div className=" flex flex-col items-center space-y-8 py-10 border-t border-white">
        <h3 className="text-3xl sm:text-4xl font-bold text-center">
          See Shindow in action
        </h3>

        <ImageCarousel
          imagesData={[
            {
              img: "images/navigation.gif",
              duration: 27000,
              text: "You can navigate through your resources.",
            },
            {
              img: "images/resourceManagment.gif",
              duration: 29000,
              text: "You can manage your resources.",
            },
            {
              img: "images/fileUploading.gif",
              duration: 27000,
              text: "You can upload one or multiple resources.",
            },
          ]}
        />
      </div>
    </div>
  );
}
