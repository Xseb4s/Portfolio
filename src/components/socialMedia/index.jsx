import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="flex justify-center gap-10">
        <a href="https://www.linkedin.com/in/xseb4s/" target="_blank" rel="noreferrer" className="rounded-full flex items-center border-transparent">
          <FaLinkedin className='w-10 h-auto'/>
        </a>
        <a href="https://github.com/Xseb4s" target="_blank" rel="noreferrer" className="rounded-full flex items-center border-transparent">
          <FaGithub className='w-10 h-auto'/>
        </a>
        <a href="mailto:srodriguez44482@gmail.com" target="_blank" rel="noreferrer" className="rounded-full flex items-center border-transparent">
          <SiGmail className='w-10 h-auto'/>
        </a>
      </div>
  )
}
export default SocialMedia;