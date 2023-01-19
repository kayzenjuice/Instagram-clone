import Image from "next/image";
import React from "react";
import instaLogo from "../assets/Instagram_logo_black.png";
import instaLogoSmall from "../assets/Instagram_logo_2016.svg.png";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import catPic from "../assets/mewcat.jpg";
export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 z-30 bg-white">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src={instaLogo}
            layout="fill"
            className="object-contain"
            alt=""
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image
            src={instaLogoSmall}
            layout="fill"
            className="object-contain"
            alt=""
          />
        </div>

        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          ></input>
        </div>
        <div className="flex space-x-4 items-center">
          <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition ease-in-out duration-200" />
          <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition ease-in-out duration-200" />
          <Image
            src={catPic}
            alt="user-image"
            className="h-10 rounded-full w-10 cursor-pointer"
          ></Image>
        </div>
      </div>
    </div>
  );
}
