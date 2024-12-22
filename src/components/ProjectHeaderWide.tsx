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
    <div className="relative h-[40vh] w-full lg:h-[55vh]">
      <div className="absolute left-0 top-0 z-10 h-[40vh] w-full bg-black/50 lg:h-[55vh]" />
      <Image
        src={projectImage}
        alt={identifier}
        placeholder="blur"
        className="z-1 absolute object-cover object-bottom"
        fill
        priority
      />
      <div className="absolute bottom-[50%] left-[50%] right-[50%] z-10 w-full max-w-[1000px] translate-x-[-50%] translate-y-[50%] text-white">
        <div className="mx-auto flex max-w-[1240px] justify-center gap-0 p-2 md:px-16">
          <div className="text-center">
            <h1>{projectName}</h1>
            <p className="text-md pt-4 md:text-lg">{shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
