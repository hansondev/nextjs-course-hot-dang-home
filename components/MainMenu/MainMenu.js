import { ButtonLink } from "components/ButtonLink";
import Link from "next/link";
import { FaHouseUser, FaHeart } from "react-icons/fa";

export const MainMenu = ({ items, ctaButtonLabel, ctaButtonDestination }) => {
  console.log("MAIN MENU:", items);
  return (
    <div className="bg-slate-800 px-5 h-[64px] sticky top-0 z-20 text-white flex items-center">
      <div className="py-4 pl-2 flex text-pink-600">
        <FaHouseUser size={30} />
        <FaHeart size={30} />
      </div>
      <div className="flex flex-1 justify-end">
        {(items || []).map((item) => (
          <div
            key={item.id}
            className="hover:bg-slate-600 cursor-pointer relative group"
          >
            <div>
              <Link href={item.destination} className="p-5 block">
                {item.label}
              </Link>
            </div>
            {!!item.subMenuItems?.length && (
              <div className="group-hover:block hidden top-full right-0 absolute bg-slate-800 text-right -mt-3">
                {item.subMenuItems.map((subMenuItem) => (
                  <Link
                    key={subMenuItem.id}
                    href={subMenuItem.destination}
                    className="block whitespace-nowrap p-5 hover:bg-slate-600"
                  >
                    {subMenuItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="ml-3 my-auto">
          <ButtonLink
            label={ctaButtonLabel}
            destination={ctaButtonDestination}
          />
        </div>
      </div>
    </div>
  );
};
