import "./slider.css";

const Card = ({ title, desc, urlImg, url }) => {

  return(
  <>
    <div className={`card ${title}`}>
      <figure className="w-full h-full">
        <img src={`/Portfolio/${urlImg}`} alt={title} className="w-full h-full relative object-cover" />
      </figure>
    </div>
    <p className="p-4 text-sm">
      <h2 className="text-blue-500 mr-2 font-bold mb-2 text-lg">
        {title}
      </h2>
      {desc}
    </p>
    <a href={url} alt="click to demo" target="_blank" rel="noreferrer" className="border-2 p-1 ml-2 border-blue-500 rounded-lg text-blue-500 bg-white hover:bg-blue-500 hover:text-white text">
      <button type="button">
        Demo
      </button>
    </a>
  </>
  )
};

export default Card;
