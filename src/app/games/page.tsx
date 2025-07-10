"use client";

import ImageSlider from "@/Components/ImageSlider";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap w-full h-full mt-5 justify-evenly items-center">
        <div className="flex flex-col mt-5 items-center w-120 justify-center">
          <div className="text-4xl font-bold mb-5">EU4 Guessr</div>
          <ImageSlider
            filename="/sss/eu4guessr/"
            numberofimages={6}
          ></ImageSlider>
          <div className="flex flex-row mt-5 w-fit items-center justify-between">
            <div className="text-xl gap-y-1 w-8/12 font-semibold">
              A game where you must name all countries within a selected EU4
              region with over 60 regions and custom regions.
            </div>
            <a
              href="https://eu4guessr.yucatta.com/"
              className="hover:underline text-blue-400 hover:text-blue-600 cursor-pointer w-2/12"
            >
              Click Here to Play
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-5 items-center w-120 justify-center">
          <div className="text-4xl font-bold  mt-5">EU4 Statle </div>
          <div>
            <ImageSlider
              filename="/sss/eu4statle/"
              numberofimages={4}
            ></ImageSlider>
            <div className="flex flex-row mt-5 items-center justify-between">
              <div className="text-xl gap-y-1 w-8/12 font-semibold">
                A daily game where you must identify the correct EU4 state from
                the map, along with details of provinces.
              </div>
              <a
                href="https://eu4guessr.yucatta.com/"
                className="hover:underline text-blue-400 hover:text-blue-600 cursor-pointer w-2/12"
              >
                Click Here to Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
