import React from "react";
import GoBack from "@/app/utils/GoBack";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <GoBack />
    </div>
  );
}
