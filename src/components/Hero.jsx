import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "./lotties/developer.json";
import { styles } from "../styles";
import { introChild, introContainer } from "../utils/motion";

const intro = [
  {
    text: "Hi, my name is",
    styles: "font-roboto text-blue-500 pb-1.5 sm:pb-3",
  },
  {
    text: "Rishav Nandi.",
    styles: "text-4xl sm:text-5xl text-slate-900 font-extrabold pb-1.5 sm:pb-3",
  },
  {
    text: "I build things for the web.",
    styles: "text-2xl sm:text-4xl text-slate-600 font-extrabold pb-2.5 sm:pb-5",
  },
  {
    text: "I'm a Full-Stack Developer based in West Bengal, India. I enjoy working on every aspect of web development, from the user interface to the server logic.",
    styles: " text-sm sm:text-base text-slate-600 font-medium pb-4 sm:pb-10",
  },
];

const Hero = () => {
  return (
    <section
      className={`relative w-full min-h-screen mx-auto flex flex-col justify-center`}
    >
      <div
        className={`h-full inset-0 sm:top-[200px] top-24 max-w-7xl mx-auto ${styles.padding} flex flex-row items-start justify-center gap-5`}
      >
        <div className="w-full flex flex-col justify-center lg:flex-row lg:items-center  gap-8">
          {/* left */}
          <motion.div
            variants={introContainer}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            {intro.map((ele, index) => (
              <motion.p
                key={index}
                variants={introChild}
                className={ele.styles}
              >
                {ele.text}
              </motion.p>
            ))}
            <div>
              <a
                href="https://docs.google.com/document/d/1bwtVgXVskXxwkC4Fe4aY_H9Po5lQsOP-N52_uy8mDWY/edit?usp=sharing"
                download="RishavNandi_RESUME"
                target="_blank"
                className="border cursor-pointer text-sm sm:text-base inline-flex gap-2 items-center justify-center px-6 sm:px-10 py-2.5 sm:py-4 rounded  hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-200 border-blue-400 transition-all font-medium "
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.944 11.112C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.61 5.757 9.149 3.609 9.792 2 11.82 2 14c0 2.657 2.089 4.815 4.708 4.971V19H17.99v-.003L18 19c2.206 0 4-1.794 4-4a4.008 4.008 0 0 0-3.056-3.888zM8 12h3V9h2v3h3l-4 5-4-5z"></path>
                </svg>
                <button type="button" className="">
                  Resume
                </button>
              </a>
            </div>
          </motion.div>
          {/* right */}
          <motion.div
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
            initial={{ opacity: 0, scale: 1.25, translateZ: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            // exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Lottie animationData={animationData} autoPlay={true} />
          </motion.div>
        </div>
      </div>

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
