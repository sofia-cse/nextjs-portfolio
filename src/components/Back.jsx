"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import logo from "../../public/assets/florere.svg";

const Back = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-2 md:px-16 pt-8">
      <Link href="/#work" className="underline py-4 pb-24">
        <IoChevronBackOutline size={18} className="inline mr-1" />
        Back To My Work
      </Link>
    </div>
  );
};

export default Back;
