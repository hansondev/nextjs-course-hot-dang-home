import { ButtonLink } from "components/ButtonLink";

export const CtaButton = ({
  buttonLabel,
  destination,
  buttonAlign = "left",
}) => {
  const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return (
    <div className={alignMap[buttonAlign]}>
      <ButtonLink destination={destination} label={buttonLabel} />
    </div>
  );
};
