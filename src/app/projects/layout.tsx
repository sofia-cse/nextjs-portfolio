import React from "react";
import GoBack from "@/components/GoBack";

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
