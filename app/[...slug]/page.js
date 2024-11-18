import { BlockRenderer } from "components/BlockRenderer";
import { getPageUri } from "utils/getPageUri";
import { getSeo } from "utils/getSeo";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const data = await getPageUri(params.slug.join("/"));
  if (!data) {
    notFound();
  }
  //   console.log({ data });
  return <BlockRenderer blocks={data} />;
}

export async function generateMetadata({ params }) {
  const seo = await getSeo(params.slug.join("/"));
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
  };
}
