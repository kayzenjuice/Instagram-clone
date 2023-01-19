import Image from "next/image";
import React from "react";
import instaLogo from "../assets/Instagram_logo_black.png";
import instaLogoSmall from "../assets/Instagram_logo_2016.svg.png";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <Image src={instaLogo} layout="fill" className="object-contain" />
      </div>
      <div className="cursor-pointer h-24 w-10 relative lg:hidden">
        <Image src={instaLogoSmall} layout="fill" className="object-contain" />
      </div>
      <h1>Right </h1>
    </div>
  );
}
