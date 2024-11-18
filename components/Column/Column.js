export const Column = ({ children, width, textColor, backgroundColor }) => {
  const widthStyle = width
    ? { minWidth: width, flexGlow: 1 }
    : { flexGrow: 1, flexBasis: 0 };

  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  return (
    <div
      style={{ ...widthStyle, ...textColorStyle, ...backgroundColorStyle }}
      className="px-5 py-5 items-center"
    >
      {children}
    </div>
  );
};
