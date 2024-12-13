import React from "react";
import Back from "@/components/Back";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <Back />
    </div>
  );
}
