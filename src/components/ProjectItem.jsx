import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({
  title,
  role,
  backgroundImg,
  projectUrl,
  arialabel,
  identifier,
}) => {
  return (
    <div className={identifier}>
      <div className="relative flex items-center justify-center h-auto min-h-full w-full group hover:bg-[#a284fb] rounded-sm">
        <Image
          src={backgroundImg}
          alt="Project Image"
          className="group-hover:opacity-10 h-full min-h-full object-cover rounded-sm"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white">
          <h3 className="text-2xl w-max m-auto">{title}</h3>
          <p className="pt-2 pb-4">{role}</p>
          <Link
            href={projectUrl}
            aria-label={arialabel}
            className="m-auto text-center py-3 px-4 rounded-sm w-fit bg-white text-gray-800"
          >
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
