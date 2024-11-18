import Link from "next/link";

export const ButtonLink = ({ label, destination }) => {
  return (
    <Link href={destination}>
      <div className="btn">{label}</div>
    </Link>
  );
};
