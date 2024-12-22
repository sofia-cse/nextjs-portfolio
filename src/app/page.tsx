import React from "react";

import { Metadata } from "next";
import MainWrapper from "./../components/MainWrapper";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sofia Martin",
  description:
    "Sofia Martin is a technologist experienced with all parts of the product discovery, design, and development process.",
};

export default function Home() {
  return (
    <div className="">
      <MainWrapper />
      <Footer />
    </div>
  );
}
