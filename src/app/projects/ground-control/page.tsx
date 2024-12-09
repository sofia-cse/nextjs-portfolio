import React from "react";
import Image from "next/image";
import groundImg from "@/../public/assets/projects/groundcontrol3.png";
import heroImg from "@/../public/assets/projects/MGC_hero.jpg";
import solutionImg from "@/../public/assets/projects/MGC_Mac_Mockup_Environmental_Mission.png";
import { Metadata } from "next";
import ProjectHeaderWide from "@/components/ProjectHeaderWide";

export const metadata: Metadata = {
  title: "Sofia Martin | Measure Ground Control Portfolio Entry",
  description:
    "Sofia Martin was the UX Designer for Measure's Ground Control App, a tool that allows project managers to track their drone fleet, plan and execute automated flights, and gain FAA clearance.",
};

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <ProjectHeaderWide
        projectName="Measure: Ground Control"
        projectImage={heroImg}
        shortDescription="Ground Control provides a complete solution for managing drone programs, including team and fleet management, flight planning, data validation, processing and analytics."
        identifier="project header"
      />
      <div className="max-w-[1240px] mx-auto p-2 flex flex-col gap-12 pt-12">
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-2 gap-9 pt-8 pb-8 items-center">
          <div className="">
            <h2 className="pb-4">Design Process</h2>
            <p className="py-2">
              To create a user friendly software solution, I followed a
              human-centered design process that prioritized the needs and
              workflows of the UAV Piolots and organizations managing drone
              operations. I conducted extensive user research, going out in the
              field to experience firsthand the nuanced requirements and
              challenges inherent to operating within public airspace.
            </p>
          </div>
          <div className="">
            <Image
              src={groundImg}
              alt=""
              width={550}
              height={350}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-2 gap-9 pt-8 items-center">
          <div className="md:order-2">
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
                The platform provided a variety of flight modes, such as
                Panorama, Spotlight, POI, Profile, Trace, and Tripod, catering
                to different operational needs. Users could also manage pilots
                and drone fleets, create and reuse flight plans, store fly
                sites, and maintain flight schedules.
              </li>
              <li className="py-2">
                Image Data Processing: The software offered advanced
                photogrammetry and image processing capabilities, including
                high-quality orthomosaics, 3D maps, 3D mesh, thermal imagery,
                digital surface models (DSM), and more. Integration with the
                Pix4D toolkit allowed users to process and create accurate data
                products, while a custom Scopito integration enabled image
                inspection and annotation.
              </li>
              <li className="py-2">
                Data Reporting and Customization: Measure Ground Control
                provided users with the ability to generate customized data
                reports, facilitating effective data analysis and communication.
                Users could tailor the reports to their specific requirements,
                ensuring they had the necessary insights to make informed
                decisions.
              </li>
            </ol>
          </div>
          <div className="md:order-1">
            <Image
              src={solutionImg}
              alt=""
              width={550}
              height={350}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default page;
