import React from "react";
import Image from "next/image";
import tourImg from "../../../public/assets/projects/Tourbooks-Framed.png";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sofia Martin | Property Capsule Portfolio Entry",
  description:
    "Sofia Martin was the UX Designer for the Property Capsule Tourbooks platform. Tourbooks is a comprehensive platform for generating digital property tours for commercial real estate professionals.",
};

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[40vh] lg:h-[75vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[75vh] bg-black/50  0 z-10" />
        <Image
          src={tourImg}
          alt="Header"
          className="absolute z-1 object-cover object-center"
          fill
        />
        <div className="absolute bottom-[6%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] z-10 text-white">
          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-0">
            <div className=""></div>
            <div className="col-span-8">
              <h2>Property Capsule</h2>
              <h3>
                Digital Property Tours for Commercial Real Estate Leasing
                Professionals
              </h3>
              <h3 className="pt-2">Role: UX Designer</h3>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-8">
        <div></div>
        <div className="col-span-8">
          <h2>Project Overview</h2>
          <p className="py-4">
            Tourbook is a comprehensive tool for commercial real estate leasing
            agents to communicate with tenant representatives. It allows users
            to dynamically select and view site tour location information,
            complete with demographic data, competitor information and beautiful
            visualization, all in an easy-to-use digital tool. The interactive
            tour books can be viewed on the web or the Tourbooks iPad app, as
            well as downloaded and saved as a PDF.
          </p>
          <h2 className="pt-6 pb-2">Key Features:</h2>
          <p className="py-2">With Tourbooks users can can:</p>
          <ol>
            <li className="py-2">
              Access automated competition maps with logos.
            </li>
            <li className="py-2">View interactive map data layers</li>
            <li className="py-2">
              Search vacancy information and review space profiles
            </li>
            <li className="py-2">Capture notes and data during the tour</li>
          </ol>
        </div>
        <div className=""></div>
      </div>
      <Link href="/#work" className="underline py-4 pb-24">
        <IoChevronBackOutline size={18} className="inline mr-1" />
        Back To My Work
      </Link>
    </div>
  );
};

export default page;
