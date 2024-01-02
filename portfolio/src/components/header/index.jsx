import CTA from "./CTA.jsx";
import ME from "/me.jfif";
import SocialMedia from "../socialMedia/index.jsx";

const Header = () => {
  return (
    <header className="w-screen border-0 relative">
      <div className="relative text-center w-full h-full flex flex-col items-center py-20 sm:py-28">
        <h5 className="text-xl font-semibold">Hi!</h5>
        <h1 className="font-bold text-2xl text-blue-500">I&apos;m Sebastian Rodriguez</h1>
        <h5 className="text-light mb-28 text-sm text-gray-500">Web Developer</h5>

        <CTA />
        <div className="absolute left-[20%] sm:left-0 bottom-8 sm:bottom-40 transform sm:-rotate-90 font-light text-sm text-blue-500">
          <SocialMedia />
        </div>

        <div className="relative w-72 h-72 sm:w-96 sm:h-96">
          <figure className="w-full h-full border-4 border-blue-500 rounded-full absolute">
            <img src={ME} alt="me" className="object-cover w-full h-full rounded-full absolute-20" />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Header;