import { getTextAlign } from "utils/font";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({ textAlign = "left", content, textColor }) => {
  return (
    <p
      className={`max-w-5xl m-auto ${getTextAlign(textAlign)}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
};
