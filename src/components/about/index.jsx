import { VerticalTimeline } from "react-vertical-timeline-component";
import CustomElement from "./customElement";
import TimelineData from "/json/timeline";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";

const About = () => {
  const data = TimelineData;
  return (
    <>
      <section id="about" className="mt-28 flex flex-col items-center justify-center">
        <h3 className="text-gray-500 font-semibold text-sm">Get to know</h3>
        <h1 className="text-blue-500 text-2xl font-bold">About me</h1>
        <VerticalTimeline lineColor={"rgba(59, 130, 246, 1)"} animate={true}>
          {data.map(({ title, desc, year, role }, index) => (
            <CustomElement key={index} title={title} desc={desc} year={year} role={role} />
          ))}
        </VerticalTimeline>
      </section>
    </>
  );
};

export default About;
