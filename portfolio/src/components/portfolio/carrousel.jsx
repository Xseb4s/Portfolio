import "./slider.css";
import React, {useState, useEffect} from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Carousel = ({children}) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    const MAX_VISIBILITY = 3;
    
    return (
      <>
        <div className="carousel mb-24 sm:mb-[6%]">
          {active > 0 && (
            <div className="nav left bg-blue-500 w-10 h-10 rounded-full p-1" onClick={() => setActive((i) => i - 1)}>
              <FaArrowLeft />
            </div>
          )}
          {React.Children.map(children, (child, i) => (
            <div
              className="card-container"
              style={{
                "--active": i === active ? 1 : 0,
                "--offset": (active - i) / 3,
                "--direction": Math.sign(active - i),
                "--abs-offset": Math.abs(active - i) / 3,
                pointerEvents: active === i ? "auto" : "none",
                opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
                display: windowWidth <= 650 && i !== active ? "none" : (active - i) / 3 <= -1 ? "none" : "block",
                border: active === i ? "1px solid gray" : "none",
                borderRadius: active === i ? "10px" : "0",
              }}
            >
              {child}
            </div>
          ))}
          {active < count - 1 && (
            <div className="nav right bg-blue-500 w-10 h-10 rounded-full p-1" onClick={() => setActive((i) => i + 1)}>
              <FaArrowRight />
            </div>
          )}
        </div>      
      </>
    );
  };

  export default Carousel;