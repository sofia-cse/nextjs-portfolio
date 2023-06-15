import React from "react";
import Image from "next/image";
import n2uitiveImg from "../../../public/assets/projects/n2uitive.png";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/60 z-10" />
        <Image
          src={n2uitiveImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
        />
        <div className="absolute top-[80%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
          <h2>Claim Recording and Transcriptions</h2>
          <h3>Product Manager</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-3">
          <h2>Project Overview</h2>
          <p className="py-4">
            n2uitive is a cloud-based claims interview and recorded statement
            management platform for auto, home and workers compensation
            insurers. n2uitive provides claims organizations with a unified,
            secure recorded statement solution that simplifies processes,
            reduces expenses and supports industry-wide best practices.
          </p>
          <p className="py-4">
            n2record™ is n2uitive’s comprehensive, cloud-based recorded
            statement solution that streamlines the overall statement workflow
            for insurers by recording, storing and indexing, sharing, and
            transcribing claims statements.
          </p>
          <p className="py-4">
            Recordings are automatically indexed and stored in a secure
            statement library, making them easily searchable and accessible. The
            solution also enables users to share statements quickly and securely
            from the library to approved external parties and transcription
            services. Insurers can utilize the solution’s insightful reports and
            analytics to better understand statement practices, leading to more
            consistent and accurate claim outcomes.
          </p>
        </div>
        <div className="col-span-2"></div>
      </div>
      <Link href="/#projects" className="underline py-4 pb-24">
        <IoChevronBackOutline size={18} className="inline mr-1" />
        Back To Projects
      </Link>
    </div>
  );
};

export default page;
