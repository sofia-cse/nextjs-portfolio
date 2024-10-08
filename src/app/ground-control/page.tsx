import React from "react";
import Image from "next/image";
import groundImg from "../../../public/assets/projects/groundcontrol3.png";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { Metadata } from "next";
import ProjectHeader from "@/components/ProjectHeader";
import Back from "@/components/Back";

export const metadata: Metadata = {
  title: "Sofia Martin | Measure Ground Control Portfolio Entry",
  description:
    "Sofia Martin was the UX Designer for Measure's Ground Control App, a tool that allows project managers to track their drone fleet, plan and execute automated flights, and gain FAA clearance.",
};

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <ProjectHeader
        projectName="Measure: Ground Control"
        projectImage={groundImg}
        shortDescription="Drone Deployment and Data Management Software"
        identifier="project header"
      />
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-8">
        <div></div>
        <div className="col-span-8">
          <h2>Project Overview</h2>
          <p className="py-2">
            Ground Control provides a complete solution for managing drone
            programs, including team and fleet management, flight planning, data
            validation, processing and analytics.
          </p>
          <h2 className="pt-6 pb-2">Design Process</h2>
          <p className="py-2">
            To create a user-centric software solution, I followed a
            user-centered design process that prioritized the needs and
            workflows of the UAV Piolots and organizations managing drone
            operations. I conducted extensive user research, going out in the
            field to experience firsthand the nuanced requirements and
            challenges inherent to operating within public airspace.
          </p>
          <h2 className="pt-6 pb-2">Key Features:</h2>
          <p className="py-2">
            Measure Ground Control encompassed a wide range of features to
            support users in their drone deployment and data management tasks.
            Some of the key features I designed and implemented include:
          </p>
          <ol>
            <li className="py-2">
              Mission Planning and Flight Management: Users could create
              missions, plan flights, and check airspace within the software.
              The platform provided a variety of flight modes, such as Panorama,
              Spotlight, POI, Profile, Trace, and Tripod, catering to different
              operational needs. Users could also manage pilots and drone
              fleets, create and reuse flight plans, store fly sites, and
              maintain flight schedules.
            </li>
            <li className="py-2">
              Image Data Processing: The software offered advanced
              photogrammetry and image processing capabilities, including
              high-quality orthomosaics, 3D maps, 3D mesh, thermal imagery,
              digital surface models (DSM), and more. Integration with the Pix4D
              toolkit allowed users to process and create accurate data
              products, while a custom Scopito integration enabled image
              inspection and annotation.
            </li>
            <li className="py-2">
              Data Reporting and Customization: Measure Ground Control provided
              users with the ability to generate customized data reports,
              facilitating effective data analysis and communication. Users
              could tailor the reports to their specific requirements, ensuring
              they had the necessary insights to make informed decisions.
            </li>
          </ol>
          <h2 className="pt-6 pb-2">Impact and Outcome</h2>
          <p className="py-2">
            Through seamless integration between web and mobile applications,
            users could access the software across devices and maintain their
            operational efficiency on the go. The intuitive user interface and
            streamlined workflows minimized the learning curve and enhanced
            productivity for users at all levels of expertise.
          </p>
          <p className="py-2">
            Working on Measure Ground Control allowed me to leverage my UX
            design skills to create a platform that addressed the unique
            challenges of the UAV industry. The project reinforced the
            importance of user research, iterative design, and collaboration in
            developing software solutions that meet.
          </p>
        </div>
        <div className=""></div>
      </div>
      <Back />
    </div>
  );
};

export default page;
