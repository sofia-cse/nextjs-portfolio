import React from "react";
import Image from "next/image";
import firmatekImg from "../../../public/assets/projects/Firmatek-Stock-Pile-Mark-Ups.png";
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
      <div className="w-full h-[40vh] lg:h-[75vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[75vh] bg-black/60 z-10" />
        <Image
          src={firmatekImg}
          alt="Header"
          className="absolute z-1 object-cover object-top"
          fill
          priority
        />
        <div className="absolute bottom-[8%] max-w-[1240px] w-full left-[50%] right[50%] translate-x-[-50%] z-10 text-white">
          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-0">
            <div className=""></div>
            <div className="col-span-8">
              <h2>Firmatek</h2>
              <h3>
                Orthophoto and Lidar Scan{" "}
                <span className="inline-block">Data Reporting Platform</span>
              </h3>
              <h3 className="pt-2">Role: UX Designer</h3>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-10 gap-8 pt-8">
        <div className=""></div>
        <div className="col-span-8">
          <h2 className="pt-4 pb-2">Project Overview</h2>
          <p className="py-2">
            I had the opportunity to work as a UX Designer on a project focused
            on developing a comprehensive platform for aerial data reporting.
            The primary goal of the platform was to enable users to survey
            stockpiles, both indoors and outdoors, using orthophotos and Lidar
            scan data. By leveraging these technologies, the platform aimed to
            provide accurate measurements, generate 3D models, and calculate
            volumes efficiently and safely.
          </p>
          <h2 className="pt-6 pb-2">Responsibilities</h2>
          <p className="py-2">
            As the UX Designer on this project, my responsibilities encompassed
            various aspects of the user experience design process. I
            collaborated closely with the development team, stakeholders, and
            subject matter experts to understand the requirements and objectives
            of the platform. Through this collaboration, I gained valuable
            insights into the technical capabilities of orthophotos, Lidar
            scans, and their applications in stockpile assessment.
          </p>
          <h2 className="pt-6 pb-2">Design Process</h2>
          <p className="py-2">
            To create a user-centered platform, I followed a systematic design
            process, starting with user research and analysis. This involved
            conducting interviews and usability tests with potential users, such
            as surveyors and contractors, to understand their workflows, pain
            points, and needs. The insights gathered from these research
            activities informed the design decisions throughout the project.
          </p>
          <p className="py-2">
            Based on the research findings, I developed user personas and user
            journey maps to capture the typical interactions and tasks users
            would perform on the platform. This helped me identify the key
            features and functionalities required to meet their needs
            effectively.
          </p>
          <p className="py-2">
            With a solid understanding of the users and their goals, I proceeded
            to create wireframes and interactive prototypes. These visual
            representations allowed me to iterate quickly, gather feedback, and
            refine the user interface. Collaborating closely with the
            development team, I ensured the design was technically feasible and
            aligned with the project&apos;s timeline and constraints.
          </p>
          <h2 className="pt-6 pb-2">Key Features</h2>
          <p className="py-4">
            The platform included several key features to support users in their
            stockpile assessment tasks. Some of the notable features I designed
            and implemented include:
          </p>
          <ol>
            <li className="py-2">
              Orthophoto Viewer: A specialized viewer that allowed users to
              explore high-resolution orthophotos of the surveyed areas. Users
              could zoom, pan, and measure distances accurately, thanks to the
              orthophotos&apos; uniform scale and correction for lens distortion
              and topographic relief.
            </li>
            <li className="py-2">
              Lidar Data Integration: The platform seamlessly integrated Lidar
              scan data, enabling users to generate precise 3D models of the
              stockpiles. The models provided an accurate representation of the
              terrain, allowing users to assess volumes and conduct detailed
              analysis efficiently.
            </li>
            <li className="py-2">
              Reporting and Analytics: I designed a reporting module that
              facilitated the generation of comprehensive reports, including
              volume calculations, measurements, and other relevant metrics.
              These reports were essential for meeting reporting requirements
              and contractor deadlines, enabling users to make informed
              decisions based on accurate data.
            </li>
          </ol>
          <h2 className="pt-6 pb-2">Impact and Outcome</h2>
          <p className="py-2">
            The orthophoto and Lidar scan data reporting platform significantly
            streamlined the stockpile assessment process for users. It offered
            an intuitive and efficient interface for visualizing, measuring, and
            analyzing stockpiles, enhancing accuracy and saving valuable time.
            The integration of orthophotos and Lidar scans provided users with a
            comprehensive view of the terrain, empowering them to make informed
            decisions regarding stockpile management.
          </p>
          <p className="py-2">
            Throughout the project, I collaborated closely with the development
            team to ensure the seamless integration of design and technology. By
            incorporating user feedback and continuously iterating on the
            design, we created a robust and user-friendly platform that met the
            needs of surveyors, contractors, and other stakeholders.
          </p>
          <p className="py-2">
            Working on this project allowed me to apply my UX design skills to a
            complex and technical domain, contributing to the development of a
            powerful tool for aerial data reporting. It reinforced my
            understanding of the importance of user research, iterative design,
            and collaboration in creating meaningful and impactful user
            experiences.
          </p>
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
