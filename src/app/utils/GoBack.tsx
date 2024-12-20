import React from "react";
import { headers } from "next/headers";
import Back from "@/components/Back";

export default async function GoBack() {
  const referer = await (await headers()).get("referer");
  const host = await (await headers()).get("host");

  return (
    <div>
      <Back referer={referer} host={host} />
    </div>
  );
}
