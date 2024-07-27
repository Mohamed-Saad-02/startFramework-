import { useEffect } from "react";
import SpecialTitle from "../components/SpecialTitle/SpecialTitle";
import ImagePopup from "../feathers/portfolio/ImagePopup";

function Portfolio() {
  useEffect(() => {
    document.title = "portfolio";
  }, []);

  return (
    <section className="h-full">
      <div className="container text-center text-[#2c3e50] pt-4 pb-12">
        <SpecialTitle color="#2c3e50">portfolio component</SpecialTitle>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3  gap-12 mt-3 px-3">
          <ImagePopup imageSrc="/port1.png" imageAlt="port1" />
          <ImagePopup imageSrc="/port2.png" imageAlt="port2" />
          <ImagePopup imageSrc="/port3.png" imageAlt="port3" />
          <ImagePopup imageSrc="/port1.png" imageAlt="port1" />
          <ImagePopup imageSrc="/port2.png" imageAlt="port2" />
          <ImagePopup imageSrc="/port3.png" imageAlt="port3" />
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
