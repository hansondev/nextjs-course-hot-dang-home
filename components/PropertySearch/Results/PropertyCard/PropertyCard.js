import {
  faBathtub,
  faBed,
  faCar,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";

export const PropertyCard = ({
  title,
  destination,
  price,
  bedrooms,
  bathrooms,
  hasParking,
  petFriendly,
  image,
}) => {
  return (
    <Link
      href={destination}
      className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200"
    >
      <div className="flex w-full relative h-[200px]">
        <Image src={image} fill sizes="300px" className="object-cover" alt="" />
      </div>
      <div className="mt-3 text-lg font-bold">{title}</div>
      <div className="mt-3">£{numeral(price).format("0,0")}</div>
      <div>
        <FontAwesomeIcon icon={faBathtub} />
        <span className="pl-2">{bathrooms}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faBed} />
        <span className="pl-2">{bedrooms}</span>
      </div>
      {(!!hasParking || petFriendly) && (
        <div className="flex justify-between text-xs mt-3">
          <div>
            {!!hasParking && (
              <>
                <FontAwesomeIcon icon={faCar} /> Parking available
              </>
            )}
          </div>
          <div>
            {!!petFriendly && (
              <>
                <FontAwesomeIcon icon={faDog} /> Pet Friendly
              </>
            )}
          </div>
        </div>
      )}
    </Link>
  );
};
