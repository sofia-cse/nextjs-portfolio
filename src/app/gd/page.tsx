import React from "react";
import Image from "next/image";
import gdImg from "../../../public/assets/projects/gd.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh]  lg:h-[50vh] bg-black/60 z-10" />
        <Image
          src={gdImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
        />
        <div className="absolute top-[80%] max-w-[1240px]  w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
          <h2>Healthcare Copay Assistance</h2>
          <h3>UX Designer & Researcher</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-3">
          <h2>Project Overview</h2>
          <p className="py-4">
            Good Days exists to improve the health and quality of life of
            patients with chronic disease, cancer, or other life-altering
            conditions. Their platofrm serves many needs, allowing patients to
            enroll for assistance, pharmacies and doctors to submit claims, and
            employees to track programs and funds.
          </p>
        </div>
        <div className="col-span-2"></div>
      </div>
      <Link href="/#projects" className="underline">
        Back To Projects
      </Link>
    </div>
  );
};

export default page;
