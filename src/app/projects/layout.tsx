import React from "react";
import Navbar from "@/components/Navbar";
import Back from "@/components/Back";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar activeSection="work" />
      {children}
      <Back />
    </div>
  );
}
