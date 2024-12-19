import React from "react";
import Back from "@/components/Back";
import { headers } from "next/headers";

export default async function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const referer = headersList.get("referer");
  const host = headersList.get("host");

  return (
    <div>
      {children}
      <Back referer={referer} host={host} />
    </div>
  );
}
