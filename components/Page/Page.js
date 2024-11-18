import { MainMenu } from "components/MainMenu";
import { BlockRenderer } from "components/BlockRenderer";
import Head from "next/head";

export const Page = (props) => {
  console.log("PAGE PROPS:", props);
  return (
    <div>
      <Head>
        <title>{props.seo.title}</title>
        <meta name="description" content={props.seo.metaDesc} />
      </Head>
      <div>
        <MainMenu
          items={props.mainMenuItems}
          ctaButtonLabel={props.ctaButtonLabel}
          ctaButtonDestination={props.ctaButtonDestination}
        />
        <BlockRenderer blocks={props.blocks} />
      </div>
    </div>
  );
};
