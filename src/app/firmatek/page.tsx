import React from "react";
import Image from "next/image";
import firmatekImg from "../../../public/assets/projects/firmatek.png";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sofia Martin | Firmatek Portfolio Entry",
  description:
    "Sofia Martin was the UX Designer on the Firmatek Data Portal, a platform for construction project managers to process orthophotography, measure stockpile volumes, and manage inventory data and reports.",
};

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/60 z-10" />
        <Image
          src={firmatekImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
          priority
        />
        <div className="absolute top-[80%] max-w-[1240px]  w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
          <h2>Firmatek Data Portal 2.0: Stockpile Measurement Data</h2>
          <h3>UX Designer</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-3">
          <h2>Project Overview</h2>
          <p className="py-4">
            An orthophoto, orthomosaic or orthoimage is an aerial photograph
            geometrically corrected so that the scale is uniform. Unlike an
            uncorrected aerial photograph, an orthophoto can be used to measure
            true distances because it is an accurate representation of the
            Earth&#39;s surface, having been adjusted for topographic relief,
            lens distortion, and camera tilt.
          </p>
          <p className="py-4">
            Orthophotos and LidDAR scans can be used to generate 3D models and
            accurate volumes of indoor and outdoor stockpiles. Our plafform for
            Aerial Data reporting helps users survey stockpiles safely,
            accurately and efficiently to meet reporting and contractor
            deadlines.
          </p>
        </div>
        <div className="col-span-2"></div>
      </div>
      <Link href="/#work" className="underline py-4 pb-24">
        <IoChevronBackOutline size={18} className="inline mr-1" />
        Back To My Work
      </Link>
    </div>
  );
};

export default page;
