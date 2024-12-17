import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProjectItem = ({
  title,
  role,
  backgroundImg,
  projectUrl,
  arialabel,
  identifier,
}: {
  title: string;
  role?: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
  arialabel: string;
  identifier: string;
}) => {
  return (
    <div className={identifier}>
      <Link href={projectUrl} aria-label={arialabel} className="w-fit h-full">
        <div className="flex flex-col items-start justify-start h-full min-h-full w-full">
          <div className="w-full project-image-wrapper">
            <Image
              priority
              src={backgroundImg}
              alt="Project Image"
              className="object-contain h-full max-h-[530px]"
            />
          </div>
          <div className="flex flex-col items-start justify-end text-left h-auto p-6">
            <h3 className="text-2xl mt-2 mb-4">{title}</h3>
            <p className="">{role}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
