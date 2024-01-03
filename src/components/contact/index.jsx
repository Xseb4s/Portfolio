import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_mistp8n", "template_peed76v", form.current, "mJDQI2Cv1ivBdaGxe");
    e.target.reset();
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center mt-40">
      <h5 className="w-fit font-semibold text-gray-500 text-sm">Get In Touch</h5>
      <h2 className="w-fit font-bold text-2xl text-blue-500">Contact Me</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 w-[90%] md:w-[70%] mt-2">
        <div className="flex flex-col w-full sm:w-1/4 border-blue-400">
          <article className="flex flex-col items-center rounded-lg p-6 text-center transition duration-300 border-2 border-blue-400 bg-white hover:bg-blue-100/50 hover:border-gray-400">
            <MdOutlineEmail className="text-2xl mb-2 text-blue-500" />
            <h4>Email</h4>
            <h5>srodriguez44482</h5>
            <h5>@gmail.com</h5>
            <a
              href="mailto:srodriguez44482@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-blue-500 hover:text-blue-800 hover:font-bold inline-block mt-2"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 w-full sm:w-1/2">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="w-full p-6 rounded-md border-2 border-blue-400 bg-white text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-6 rounded-md border-2 border-blue-400 bg-white text-black"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            className="w-full p-6 rounded-md border-2 border-blue-400 bg-white text-black resize-none"
          ></textarea>
          <button
            type="button"
            className="border-2 border-transparent hover:border-blue-500 w-fit p-2 bg-blue-600 opacity-100 text-white rounded-lg hover:text-blue-500 hover:bg-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
