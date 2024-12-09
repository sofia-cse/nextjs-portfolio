import React from "react";
import Image from "next/image";
import logo from "../../public/assets/florere.svg";
import { Metadata } from "next";
import HomeContent from "./../components/HomeContent";

export const metadata: Metadata = {
  title: "Sofia Martin",
  description:
    "Sofia Martin is a technologist experienced with all parts of the product discovery, design, and development process.",
};

export default function Home() {
  return (
    <div className="">
      <HomeContent />
      <div className="container mx-auto mt-4">
        <div className="mb-4 flex-col items-center">
          <Image
            src={logo}
            alt="Sofia Flower Logo"
            className="mx-auto"
            width={60}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}
