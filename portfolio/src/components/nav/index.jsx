import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import "./nav.css"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "bg-blue-500 text-white" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "bg-blue-500 text-white" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#portafolio" onClick={() => setActiveNav("#portafolio")} className={activeNav === "#portafolio" ? "bg-blue-500 text-white" : ""}>
        <FiBook />
      </a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "bg-blue-500 text-white" : ""}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
