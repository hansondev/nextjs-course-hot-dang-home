export const getTextAlign = (textAlign = "left") => {
  const textAlignMap = {
    // Mapped the value that matched with the wp graphql query block data "attributes.textAlign" to associate with Tailwind css class name
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return `${textAlignMap[textAlign] || ""}`;
};

export const getHeadingFontSize = (level) => {
  const fontSizeMap = {
    // Mapped the object value that matched with the wp graphql query block data "attributes.level" to associate with Tailwind css class name
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
  };
  return `${fontSizeMap[level] || ""}`;
};
