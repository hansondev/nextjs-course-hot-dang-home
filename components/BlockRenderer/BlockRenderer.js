import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { CtaButton } from "components/CtaButton";
import { FormspreeForm } from "components/FormspreeForm";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { PropertySearch } from "components/PropertySearch";
import { PropertyFeatures } from "components/PropertyFeatures";
import { Gallery } from "components/Gallery";
import { TickItem } from "components/TickItem";
import Image from "next/image";
import { theme } from "utils/theme";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/group":
      case "core/block": {
        return <BlockRenderer blocks={block.innerBlocks} />;
      }

      case "core/columns": {
        console.log("COLUMNS:", block.attributes);
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.elements?.color?.text
            }
            backgroundColor={
              theme[block.attributes?.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }

      case "core/column": {
        return (
          <Column
            key={block.id}
            width={block.attributes?.width}
            textColor={
              theme[block.attributes?.textColor] ||
              block.attributes?.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes?.backgroundColor] ||
              block.attributes?.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }

      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }

      case "core/image": {
        console.log("IMAGE:", block);
        return (
          <Image
            key={block.id}
            src={block.attributes.url}
            width={block.attributes.width}
            height={block.attributes.height}
            alt={block.attributes.alt || ""}
          />
        );
      }

      case "core/gallery": {
        return (
          <Gallery
            key={block.id}
            columns={block.attributes.columns || 3}
            cropImages={block.attributes.imageCrop}
            items={block.innerBlocks}
          />
        );
      }

      case "core/heading":
      case "core/post-title": {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
          />
        );
      }

      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.elements?.link?.color?.text
            }
          />
        );
      }

      case "acf/ctabutton": {
        return (
          <CtaButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination}
            buttonAlign={block.attributes.data.align}
          />
        );
      }

      case "acf/propertysearch": {
        return <PropertySearch key={block.id} />;
      }

      case "acf/formspreeform": {
        return (
          <FormspreeForm
            key={block.id}
            formId={block.attributes.data.form_id}
          />
        );
      }

      case "acf/propertyfeatures": {
        return (
          <PropertyFeatures
            key={block.id}
            price={block.attributes.price}
            bathrooms={block.attributes.bedrooms}
            bedrooms={block.attributes.bedrooms}
            hasParking={block.attributes.has_parking}
            petFriendly={block.attributes.pet_friendly}
          />
        );
      }

      case "acf/tickitem": {
        return (
          <TickItem key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </TickItem>
        );
      }

      default: {
        console.log("UNASSIGNED BLOCK:", block);
        return null;
      }
    }
  });
};
