import React from "react";
import { getTextAlign, getHeadingFontSize } from "utils/font";

export const Heading = ({ textAlign, content, level = 2 }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-4xl mx-auto my-5 ${getTextAlign(
      textAlign
    )} ${getHeadingFontSize(level)}`,
  });
  return tag;
};
