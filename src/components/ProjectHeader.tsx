import React from "react";
import Image, { StaticImageData } from "next/image";

const ProjectHeader = ({
  projectName,
  shortDescription,
  projectImage,
  identifier,
}: {
  projectName: string;
  shortDescription: string;
  projectImage: StaticImageData;
  identifier: string;
}) => {
  return (
    <div className="projectheader">
      <div className="w-full py-6 md:h-[70vh]">
        <div className="mx-auto grid h-full max-w-[1240px] items-center gap-0 px-2 md:grid-cols-10 md:gap-12">
          <div className="col-span-5 py-4 md:order-2">
            <h1>{projectName}</h1>
            <h3>{shortDescription}</h3>
          </div>
          <div className="col-span-5 py-4">
            <Image
              src={projectImage}
              alt={identifier}
              className="w-full rounded-sm object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
