import portfolio from "/json/portfolio.json";
import Carousel from "./carrousel";
import Card from "./card";

const Portfolio = () => {
  return (
    <>
      <section id="portafolio" className="flex flex-col items-center justify-center mt-28 mb-52">
        <h3 className="text-sm text-gray-500 font-semibold">My recent works</h3>
        <h1 className="text-2xl text-blue-500 font-bold">Portfolio</h1>
        <Carousel>
          {portfolio.map((item, i) => (
            <Card key={i} title={item.title} desc={item.desc} urlImg={item.urlImg} url={item.url} />
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default Portfolio;
