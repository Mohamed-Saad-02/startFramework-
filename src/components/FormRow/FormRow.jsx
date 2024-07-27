import PropTypes from "prop-types";
import { cloneElement, useState } from "react";

function FormRow({ label, error, children }) {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="min-h-[70px] relative overflow-hidden flex items-end">
        {label && (
          <label
            htmlFor={children.props.id}
            className={`text-main-color absolute left-0 ${
              value ? "-top-1" : "top-full"
            } z-10 mt-auto transition-all duration-500`}
          >
            {label}
          </label>
        )}

        {cloneElement(children, {
          ...children.props,
          onInput: (e) => setValue(e.target.value),
        })}
      </div>
      {error && (
        <p className="text-sm text-red-400 mt-4 font-medium">{error}</p>
      )}
    </>
  );
}

export default FormRow;

FormRow.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node,
};
