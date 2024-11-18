import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TickItem = ({ children }) => {
  return (
    <div className="grid grid-cols-[10px_1fr] gap-6">
      <div className="text-3xl text-green-500 flex justify-center items-center pl-4">
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
      <div className="px-4">{children}</div>
    </div>
  );
};
