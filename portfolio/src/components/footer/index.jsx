import SocialMedia from "../socialMedia";

function Footer() {
  return (
    <footer className="bg-blue-500 p-12 text-center text-sm mt-28 text-white">
      <a href="#" className="font-semibold text-2xl mb-8 inline-block">
        Sebastian Rodriguez
      </a>

      <ul className="permalinks flex flex-wrap justify-center gap-8 mx-auto mb-12">
        <li><a href="#">Home</a></li>
        <li><a href="#about" className="text-bg">About</a></li>
        <li><a href="#portafolio" className="text-bg">Portfolio</a></li>
        <li><a href="#contact" className="text-bg">Contact</a></li>
      </ul>
      <div className="mb-16">
        <SocialMedia/>
      </div>

      <div className="mb-16">
        <small>&copy; Sebastian Rodriguez. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
