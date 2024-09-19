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
            I had the privilege to serve as a UX Designer for the Measure Ground
            Control project, an all-in-one software solution designed for UAV
            pilots, small businesses, and large enterprises. The goal of this
            project was to provide a comprehensive platform that enables users
            to efficiently manage their drone operations, from mission planning
            and airspace checking to data processing and reporting. With
            seamless integration between web and mobile applications, Measure
            Ground Control empowers users to fly safely within FAA regulations,
            process image data, create data products, and manage their drone
            fleet effectively.
          </p>
          <h2 className="pt-6 pb-2">Responsibilities</h2>
          <p className="py-2">
            As the UX Designer for Measure Ground Control, I was responsible for
            designing an intuitive and user-friendly interface that catered to
            the diverse needs of UAV pilots, businesses, and enterprises.
            Collaborating closely with stakeholders, subject matter experts, and
            the development team, I strived to understand the requirements,
            constraints, and technical aspects of drone deployment and data
            management.
          </p>
          <h2 className="pt-6 pb-2">Design Process</h2>
          <p className="py-2">
            To create a user-centric software solution, I followed a
            user-centered design process that prioritized the needs and
            workflows of the target users. I conducted extensive user research,
            including interviews, usability testing, and competitor analysis, to
            gain insights into the challenges and pain points faced by UAV
            pilots and organizations managing drone operations.
          </p>
          <p className="py-2">
            Based on the research findings, I developed user personas and user
            journey maps to visualize the typical interactions and tasks
            performed by different user groups. This enabled me to identify key
            features and functionalities that would enhance the user experience
            and streamline the drone deployment process.
          </p>
          <p className="py-2">
            Using the insights gathered from user research, I created wireframes
            and interactive prototypes that reflected the optimal user flow and
            addressed user needs effectively. These design artifacts were
            continuously refined through iterative feedback sessions and
            usability testing, ensuring a seamless and intuitive user interface.
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
            By designing and contributing to the Measure Ground Control project,
            I played a key role in developing a robust and user-friendly
            software solution for drone deployment and data management. The
            platform empowered UAV pilots, small businesses, and large
            enterprises to optimize their drone operations, adhere to FAA
            regulations, and leverage advanced image processing capabilities.
          </p>
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
