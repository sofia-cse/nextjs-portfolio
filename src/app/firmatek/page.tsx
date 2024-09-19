import React from "react";
import Image from "next/image";
import firmatekImg from "../../../public/assets/projects/Firmatek-Stock-Pile-Mark-Ups.png";
import problemImg from "../../../public/assets/projects/Firmatek-screenshot-6.jpg";
import solutionImg from "../../../public/assets/projects/Firmatek-screenshot-2-1.jpg";
import Link from "next/link";
import { Metadata } from "next";
import ProjectHeader from "../../components/ProjectHeader";
import Back from "../../components/Back";

export const metadata: Metadata = {
  title: "Sofia Martin | Firmatek Portfolio Entry",
  description:
    "Sofia Martin was the UX Designer on the Firmatek Data Portal, a platform for construction project managers to process orthophotography, measure stockpile volumes, and manage inventory data and reports.",
};

const page = () => {
  return (
    <div className="w-full">
      <ProjectHeader
        projectName="Firmatek Cloud"
        projectImage={firmatekImg}
        shortDescription="Orthophoto and Lidar Scan Data Reporting Platform"
        identifier="project header"
      />
      <div className="max-w-[1240px] mx-auto p-2 md:px-16 flex flex-col gap-8 pt-12">
        <div className="">
          <h2 className="pt-4 pb-2">Project Overview</h2>
          <p className="py-2">
            Firmatek&apos;s platform enables users to survey stockpiles, both
            indoors and outdoors, using orthophotos and Lidar scan data. By
            leveraging these technologies, the platform provides accurate
            measurements, generates 3D models, and calculates volumes
            efficiently and safely.
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-2 gap-8 pt-8 pb-8 items-center">
          <div className="">
            <h2 className="pb-4">The Problem</h2>
            <p className="py-2">
              Firmatek&apos;s was struggling to scale their business because
              service delivery relied on manual time-consuming processes.
            </p>
            <ol>
              <li className="py-1">
                A massive number of high resolution images needed to be copied
                from the drone&apos;s hard drive to their local machine.
              </li>
              <li className="py-1">
                All of those images had to be manually imoprted into a computer
                program and stitched together.
              </li>
              <li className="py-1">
                After analyzing the data, final deliverables had to be uploaded
                to the client handoff drive.
              </li>
              <li className="py-1">
                If any corrections needed to be made, communication with clients
                happened via email where conversations could be lost.
              </li>
            </ol>
          </div>
          <div className="">
            <Image
              src={problemImg}
              alt=""
              width={550}
              height={350}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-2 gap-8 pt-8 items-center">
          <div className="md:order-2">
            <h2 className="pb-4">The Solution</h2>
            <p className="py-2">
              By optimizing this workflow with the DJI SDK and Pix4D Cloud API
              we were able to improve the system effinciency by 400%.
            </p>
            <ol>
              <li className="py-1">
                Once a flight is completed, photos are directly uploaded from
                the drone to Pix4D cloud.
              </li>
              <li className="py-1">
                Pix4D automatically performs the stitching to produce an
                orthophoto, which is displayed in the portal.
              </li>
              <li className="py-1">
                Analysts then tag the photos in the portal and perform the
                necessary analysis.
              </li>
              <li className="py-1">
                Once the processing is done, clients can access files directly
                in the portal and comment on projects to request corrections or
                further analysis.
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
          <h2 className="pt-6 pb-2">Key Features</h2>
          <p className="py-4">
            The platform includes several key features to support users in their
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
        </div>
        <div>
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
        </div>
      </div>
      <Back />
    </div>
  );
};

export default page;
