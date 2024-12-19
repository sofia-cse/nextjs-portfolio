"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";

const Back = ({
  referer,
  host,
}: {
  referer: string | null;
  host: string | null;
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const isInternalReferer =
    referer?.includes(host!) && !referer?.includes(pathName!);
  console.log(isInternalReferer);
  const parsedpath = pathName?.split("/")[0];
  console.log(parsedpath);

  const handleBack = () => {
    if (isInternalReferer) {
      router.back();
    } else {
      router.push("/#work");
    }
  };
  return (
    <div className="max-w-[1240px] mx-auto p-2 pt-8">
      <div
        className="underline py-4 pb-24 hover:cursor-pointer"
        onClick={handleBack}
      >
        <IoChevronBackOutline size={18} className="inline mr-1" />
        Back To My Work
      </div>
    </div>
  );
};

export default Back;
