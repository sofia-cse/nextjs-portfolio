import React from "react";
import Image from "next/image";
import tourImg from "../../../public/assets/projects/Tourbooks-Framed.png";
import { Metadata } from "next";
import ProjectHeader from "@/components/ProjectHeader";
import Back from "@/components/Back";

export const metadata: Metadata = {
  title: "Sofia Martin | Property Capsule Portfolio Entry",
  description:
    "Sofia Martin was the UX Designer for the Property Capsule Tourbooks platform. Tourbooks is a comprehensive platform for generating digital property tours for commercial real estate professionals.",
};

const page = () => {
  return (
    <div className="w-full">
      <ProjectHeader
        projectName="Property Capsule"
        projectImage={tourImg}
        shortDescription="Digital Property Tours for Commercial Real Estate Leasing Professionals"
        identifier="project header"
      />
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
      <Back />
    </div>
  );
};

export default page;
