import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row h-20 border-b-4 border-[rgb(100,20,150)] items-center justify-between">
      <div className="text-2xl flex flex-row justify-evenly text-[rgb(207,88,253)] w-1/3 font-bold">
        <Link
          href="/"
          className="  hover:text-[rgb(150,120,200)] cursor-pointer"
        >
          Home
        </Link>
        <Link
          className=" hover:text-[rgb(150,120,200)] cursor-pointer"
          href="/games"
        >
          Games
        </Link>{" "}
      </div>
      <div>
        <a href="https://github.com/Yucatta">
          <img src={"/logos/github.svg"} className="w-10 h-10 mr-10"></img>
        </a>
      </div>
    </div>
  );
};

export default Header;
