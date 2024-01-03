import CV from "/cv.pdf";

const CTA = () => {
  return (
    <div className="flex flex-col my-6">
      <div className="flex gap-6">
        <a
          href={CV}
          download
          className="bg-blue-500 p-2 rounded-lg border-2 border-blue-500 text-white font-semibold hover:bg-white hover:text-blue-500"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="bg-transparent border-blue-500 text-blue-500 border-2 p-2 rounded-lg font-semibold hover:bg-blue-500 hover:text-white"
        >
          Let&apos;s Talk
        </a>
      </div>
      <span>
        <a href="#about" className="font-light text-sm text-gray-500">
          Scroll Down
        </a>
      </span>
    </div>
  );
};

export default CTA;
