import { useState } from "react";
import { createPortal } from "react-dom";

import PropTypes from "prop-types";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ImagePopup({ imageSrc, imageAlt }) {
  const [popupImage, setPopupImage] = useState(false);

  return (
    <>
      <li
        className="group rounded-lg overflow-hidden cursor-pointer relative"
        onClick={() => setPopupImage(true)}
      >
        <img src={imageSrc} alt={imageAlt} className="w-full" />

        <div className="w-full h-full bg-main-color absolute left-0 top-0 opacity-0 transition-opacity duration-500 group-hover:opacity-80 flex items-center justify-center text-white text-7xl">
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </li>

      {popupImage &&
        createPortal(
          <div
            className="fixed top-0 left-0 flex items-center justify-center w-full h-full before:bg-blue-600 before:w-full before:h-full before:absolute before:left-0 before:top-0 before:-z-10 before:opacity-20"
            onClick={() => setPopupImage(false)}
          >
            <div
              className="lg:w-1/2 p-4 sm:w-3/4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full rounded-lg"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

ImagePopup.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default ImagePopup;
