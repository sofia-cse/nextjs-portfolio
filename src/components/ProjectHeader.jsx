import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectHeader = ({
  projectName,
  shortDescription,
  projectImage,
  identifier,
}) => {
  return (
    <div className="projectheader">
      <div className="w-full py-6 md:h-[70vh]">
        <div className="max-w-[1240px] h-full mx-auto px-2 grid md:grid-cols-10 gap-0 md:gap-12 items-center">
          <div className="col-span-5 md:order-2 py-4">
            <h1>{projectName}</h1>
            <h3>{shortDescription}</h3>
          </div>
          <div className="col-span-5 py-4">
            <Image
              src={projectImage}
              alt={identifier}
              className="w-full object-contain rounded-sm"
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
