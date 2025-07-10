"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  filename: string;
  numberofimages: number;
}

export default function ImageSlider({ filename, numberofimages }: Props) {
  const [currentimg, setcurrentimg] = useState(0);
  const timeinterval = useRef<NodeJS.Timeout | null>(null);
  function increaseindex() {
    if (currentimg === numberofimages - 1) {
      setcurrentimg(0);
    } else {
      setcurrentimg((prev) => prev + 1);
    }
  }
  function decraseindex() {
    if (currentimg === 0) {
      setcurrentimg(numberofimages - 1);
    } else {
      setcurrentimg((prev) => prev - 1);
    }
  }
  useEffect(() => {
    timeinterval.current = setInterval(() => {
      increaseindex();
    }, 10000);
    return () => clearInterval(timeinterval.current!);
  }, [currentimg]);
  return (
    <>
      <div className="flex justify-center h-[270px] items-center select-none">
        <div className="flex  w-120 absolute h-auto overflow-hidden justify-center grow-0 shrink-0  ">
          {Array(numberofimages)
            .fill(0)
            .map((_, index) => (
              <img
                onClick={() => {
                  console.log("aaaaa");
                }}
                className="w-full h-full grow-0 shrink-0 transition-all 
               duration-500 ease-in-out "
                style={{
                  translate: `${
                    -100 * currentimg + 50 * (numberofimages - 1)
                  }%`,
                }}
                src={`${filename}${index}.png`}
                key={index}
              ></img>
            ))}
          <div
            className="cursor-pointer w-7 h-full flex justify-center items-center absolute
              transition-all duration-200 ease-in-out hover:bg-white/5 left-0"
            onClick={decraseindex}
          >
            <img src={"/logos/leftarrow.svg"} className="w-3"></img>
          </div>{" "}
          <div
            className="cursor-pointer w-7 h-full flex justify-center items-center absolute
              transition-all duration-200 ease-in-out hover:bg-white/10 right-0"
            onClick={increaseindex}
          >
            <img src={"/logos/rightarrow.svg"} className="w-3"></img>
          </div>
          <div className=" w-auto gap-x-2 flex-row absolute bottom-0 flex ">
            {Array(numberofimages)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-black/40 rounded-full h-3 cursor-pointer flex justify-center items-center 
                 w-3 border-[1px] border-neutral-200/50 mb-1"
                  onClick={() => setcurrentimg(index)}
                >
                  {index === currentimg ? (
                    <div className="bg-neutral-200 rounded-full h-1 w-1"></div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>
        </div>
        <div className="absolute h-[270px] select-none w-120 flex pointer-events-none justify-center items-end"></div>
      </div>
    </>
  );
}
