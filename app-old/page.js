import { BlockRenderer } from "components/BlockRenderer";
import { getPageUri } from "utils/getPageUri";
import { getSeo } from "utils/getSeo";

export default async function Home() {
  const data = await getPageUri("/");
  console.log({ data });
  return <BlockRenderer blocks={data} />;
}

export async function generateMetadata() {
  const seo = await getSeo("/");
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
  };
}
