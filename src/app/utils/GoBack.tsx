import React from "react";
import { headers } from "next/headers";
import Back from "@/components/Back";

export default async function GoBack() {
  async function getHeaders() {
    //const headersList = await headers();
    const referer = await (await headers()).get("referer");
    const host = await (await headers()).get("host");

    const headerObj = await { referer: referer, host: host };

    return headerObj;
  }

  const referer = (await getHeaders()).referer;
  const host = (await getHeaders()).host;

  return (
    <div>
      <Back referer={referer} host={host} />
    </div>
  );
}
