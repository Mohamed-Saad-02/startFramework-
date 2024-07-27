import { useEffect } from "react";
import SpecialTitle from "../components/SpecialTitle/SpecialTitle";

function Home() {
  useEffect(() => {
    document.title = "home";
  }, []);

  return (
    <section className="bg-main-color h-full flex items-center justify-center">
      <div className="container text-center text-white space-y-3">
        <img src="/avatar.svg" alt="avatar" className="w-64 mx-auto mb-10" />
        <SpecialTitle>Start framework</SpecialTitle>
        <div>Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </section>
  );
}

export default Home;
