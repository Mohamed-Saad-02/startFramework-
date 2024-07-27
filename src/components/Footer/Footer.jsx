import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="bg-second-color pt-8 text-white text-center">
      <div className="container flex items-center justify-around py-10 flex-wrap gap-8 md:flex-nowrap">
        <div className="md:basis-1/3 basis-full">
          <h3 className="uppercase text-[28px] font-medium">location</h3>
          <p className="mb-3">2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="md:basis-1/3 basis-full">
          <h3 className="uppercase text-[28px] font-medium mb-1">
            around the web
          </h3>
          <ul className="flex items-center justify-center gap-2">
            <li className="border rounded-full w-9 h-9 flex items-center justify-center">
              <FontAwesomeIcon icon={faFacebook} fixedWidth />
            </li>
            <li className="border rounded-full w-9 h-9 flex items-center justify-center">
              <FontAwesomeIcon icon={faTwitter} fixedWidth />
            </li>
            <li className="border rounded-full w-9 h-9 flex items-center justify-center">
              <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
            </li>
            <li className="border rounded-full w-9 h-9 flex items-center justify-center">
              <FontAwesomeIcon icon={faGlobe} fixedWidth />
            </li>
          </ul>
        </div>
        <div className="md:basis-1/3 basis-full">
          <h3 className="uppercase text-[28px] font-medium">
            about freelancer
          </h3>
          <p>
            Freelance is a free to use, licensed Tailwind theme created by Route
          </p>
        </div>
      </div>
      <p className="bg-[#1a252f] p-6">Copyright © Your Website 2024</p>
    </footer>
  );
}

export default Footer;
