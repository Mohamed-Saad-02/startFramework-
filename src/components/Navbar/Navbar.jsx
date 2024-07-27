import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const nav = ref.current;
    function handleScroll() {
      if (nav.clientHeight - 40 <= this.scrollY) {
        nav.classList.replace("h-[106px]", "h-[75px]");
        nav.classList.replace("py-8", "py-4");
      } else {
        nav.classList.replace("h-[75px]", "h-[106px]");
        nav.classList.replace("py-4", "py-8");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={ref}
      className={`bg-second-color py-8 transition-all duration-300 fixed left-0 top-0 w-full z-40 ${
        isActiveNav ? "h-[225px]" : "h-[106px]"
      }`}
    >
      <div
        className={`container text-white flex justify-between uppercase flex-wrap px-4 sm:px-0 transition-all duration-300 items-center`}
      >
        <Link
          to="/"
          className="md:text-[32px] sm:text-[25px] text-2xl font-bold"
        >
          Start Framework
        </Link>

        <button
          onClick={() => setIsActiveNav((active) => !active)}
          className="px-3 py-1 cursor-pointer text-2xl border rounded-lg lg:hidden block"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <ul
          className={`${
            isActiveNav
              ? "flex-col flex basis-full mt-3"
              : "hidden items-center gap-3 lg:flex"
          }`}
        >
          <li className="has-[.active]:bg-main-color font-bold rounded-md px-3 py-2 transition-colors duration-300 w-fit">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="has-[.active]:bg-main-color font-bold rounded-md px-3 py-2 transition-colors duration-300 w-fit">
            <NavLink to="/portfolio">portfolio</NavLink>
          </li>
          <li className="has-[.active]:bg-main-color font-bold rounded-md px-3 py-2 transition-colors duration-300 w-fit">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
