import React from "react";

import { Metadata } from "next";
import MainWrapper from "./../components/MainWrapper";

export const metadata: Metadata = {
  title: "Sofia Martin",
  description:
    "Sofia Martin is a technologist experienced with all parts of the product discovery, design, and development process.",
  openGraph: {
    title: "Sofia Martin",
    images: "https://www.sofiamartin.io/assets/cartoon_avatar.png",
  },
};

export default function Home() {
  return (
    <>
      <MainWrapper />
    </>
  );
}
