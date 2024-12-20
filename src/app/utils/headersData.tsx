import { headers } from "next/headers";

const GoBack = async () => {
  async function getHeaders() {
    //const headersList = await headers();
    const referer = await (await headers()).get("referer");
    const host = await (await headers()).get("host");

    const headerObj = await { referer: referer, host: host };

    return headerObj;
  }

  const referer = (await getHeaders()).referer;
  const host = (await getHeaders()).host;

  return { referer, host };
};
export const referer = (await GoBack()).referer;
export const host = (await GoBack()).host;
