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
  const isInternalReferer = () =>
    referer && host
      ? referer.includes(host) && !referer?.includes(pathName!)
      : false;

  const handleGoBack = () => {
    if (isInternalReferer()) {
      router.back();
    } else {
      router.push("/#work");
    }
  };
  return (
    <div className="mx-auto max-w-[1240px] p-2 pt-8">
      <div
        className="py-4 pb-24 underline hover:cursor-pointer"
        onClick={handleGoBack}
      >
        <IoChevronBackOutline size={18} className="mr-1 inline" />
        Back To My Work
      </div>
    </div>
  );
};

export default Back;
