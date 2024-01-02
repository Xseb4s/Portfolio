import { VerticalTimelineElement } from "react-vertical-timeline-component";

const CustomElement = ({ title, desc, year, role }) => (
  <VerticalTimelineElement
    className={`vertical-timeline-element--work elements element-${title}`}
    date={year}
    iconStyle={{ background: "rgba(59, 130, 246)", boxShadow: "3px 3px 3px 3px rgba(0, 50, 88, 0.4)" }}
    contentStyle={{ background: "white", color: "black", boxShadow: "3px 3px 3px 3px rgba(0, 50, 88, 0.4)" }}
    contentArrowStyle={{ borderRight: "7px solid gray" }}
    dateClassName="date-class font-bold"
  >
    <article>
      <h1 className="text-blue-500 font-bold">{title} - <span className="text-gray-400 font-semibold text-sm">{role}</span></h1>
      <p>
        <span className="text-sm font-normal text-black/70">
          {desc}
        </span>
      </p>
    </article>
  </VerticalTimelineElement>
);

export default CustomElement;
