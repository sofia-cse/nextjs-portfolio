import React from "react";
import Image from "next/image";
import { PropTypes } from "prop-types";

const ProjectHeader = ({
  projectName,
  shortDescription,
  projectImage,
  identifier,
}) => {
  return (
    <div className="projectheader mt-[0px]">
      <div className="w-full h-[40vh] lg:h-[55vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[55vh] bg-black/50 z-10" />
        <Image
          src={projectImage}
          alt={identifier}
          className="absolute z-1 object-cover object-bottom"
          fill
          priority
        />
        <div className="absolute bottom-[50%] translate-y-[50%] max-w-[1000px] w-full left-[50%] right-[50%] translate-x-[-50%] z-10 text-white">
          <div className="max-w-[1240px] mx-auto p-2 flex justify-center md:px-16 gap-0">
            <div className="text-center">
              <h1>{projectName}</h1>
              <p className="text-md md:text-lg pt-4">{shortDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectHeader.propTypes = {
  projectName: PropTypes.any.isRequired,
  shortDescription: PropTypes.any.isRequired,
  projectImage: PropTypes.any.isRequired,
  identifier: PropTypes.any.isRequired,
};

export default ProjectHeader;
