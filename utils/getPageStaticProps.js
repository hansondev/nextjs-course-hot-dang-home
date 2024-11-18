import { gql } from "@apollo/client";
import client from "client";
import { generateBlockIds } from "utils/generateBlockIds";
import { mapMainMenuItems } from "utils/mapMainMenuItems";

export const getPageStaticProps = async (context) => {
  console.log("CONTEXT:", context);
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            blocks(postTemplate: false)
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
          ... on Property {
            id
            blocks(postTemplate: false)
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            ctaButton {
              label
              destination {
                ... on Page {
                  uri
                }
              }
            }
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });
  const blocks = generateBlockIds(data.nodeByUri?.blocks);
  return {
    props: {
      seo: data.nodeByUri.seo || [],
      blocks,
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      ctaButtonLabel: data.acfOptionsMainMenu.mainMenu.ctaButton.label,
      ctaButtonDestination:
        data.acfOptionsMainMenu.mainMenu.ctaButton.destination.uri,
    },
  };
};
