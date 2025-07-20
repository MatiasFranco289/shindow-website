"use client";
import React, { ReactElement, useEffect, useState } from "react";

export interface ImageCarouselProps {
  imagesData: Array<{
    img: string;
    duration: number;
    text: string;
  }>;
}

export default function ImageCarousel({ imagesData }: ImageCarouselProps) {
  const [displacement, setDisplacement] = useState<number>(0);
  const [imgKey, setImgKey] = useState<number>(0);
  const maxDisplacement = -(imagesData.length * 100);
  let currentInterval: NodeJS.Timeout;

  useEffect(() => {
    nextImage();
  }, [displacement]);

  function nextImage() {
    currentInterval = setTimeout(() => {
      let newDisplacement = displacement - 100;

      if (newDisplacement <= maxDisplacement) {
        newDisplacement = 0;
      }

      setDisplacement(newDisplacement);
      setImgKey((prev) => prev + 1);
    }, imagesData[getCurrentImageIndex()].duration);
  }

  function goToImage(imageIndex: number) {
    clearInterval(currentInterval);
    setDisplacement(imageIndex * -100);
    setImgKey((prev) => prev + 1);
  }

  function getCurrentImageIndex() {
    return Math.abs(displacement / 100);
  }

  return (
    <div className="flex items-center flex-col">
      <div className="border border-white p-2 rounded-sm w-5/6 sm:w-[600px]">
        <div className="w-full overflow-hidden">
          <div
            className="flex w-full h-full duration-200"
            style={{ transform: `translateX(${displacement}%)` }}
          >
            {imagesData.map((element, index) => {
              return (
                <img
                  src={`${element.img}?v=${imgKey}`}
                  key={`carousel_img_${index}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {imagesData.map((_element, index) => {
          return (
            <button
              className="cursor-pointer"
              key={`carousel_btn_${index}`}
              onClick={() => goToImage(index)}
            >
              <svg width="14" height="14">
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  fill={`${
                    getCurrentImageIndex() === index ? "white" : "#6b7280"
                  }`}
                />
              </svg>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center mt-4 text-center">
        <p>{imagesData[getCurrentImageIndex()].text}</p>
      </div>
    </div>
  );
}
