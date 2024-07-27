import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SpecialTitle({ children, color = "#fff" }) {
  return (
    <div title={children}>
      <h2 className="md:text-[40px] text-[28px] font-bold uppercase mb-2">
        {children}
      </h2>
      <div className="flex items-center justify-center gap-x-4">
        <span
          style={{ backgroundColor: `${color}` }}
          className="w-20 h-1"
        ></span>
        <FontAwesomeIcon icon={faStar} />
        <span
          style={{ backgroundColor: `${color}` }}
          className="w-20 h-1"
        ></span>
      </div>
    </div>
  );
}

export default SpecialTitle;
