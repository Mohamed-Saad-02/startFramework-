import { useEffect } from "react";
import SpecialTitle from "../components/SpecialTitle/SpecialTitle";

function About() {
  useEffect(() => {
    document.title = "about";
  }, []);

  return (
    <section className="bg-main-color h-full flex items-center justify-center">
      <div className="container text-white text-center space-y-3">
        <SpecialTitle>About Component</SpecialTitle>

        <div className="flex justify-between text-start gap-6 md:px-14 px-8 flex-wrap md:flex-nowrap">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
