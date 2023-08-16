import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "./lotties/developer.json";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const style = {
  height: 500,
  width: 500,
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[200px] mx-auto ${styles.paddingX} flex flex-row items-start justify-center gap-5`}
      >
        <div
          className=" 
       flex flex-col justify-center lg:flex-row lg:items-center  gap-8 px-5 xs:px-10 sm:px-12 md:px-24
        "
        >
          {/* left */}
          <div className="w-full">
            <p className="font-roboto text-blue-500 pb-1.5 sm:pb-3">
              {" "}
              Hi, my name is
            </p>
            <p className="text-4xl sm:text-5xl text-slate-900 font-extrabold pb-1.5 sm:pb-3">
              Rishav Nandi.
            </p>
            <p className="text-2xl sm:text-4xl text-slate-600 font-extrabold pb-2.5 sm:pb-5">
              I build things for the web.
            </p>
            <p className=" text-sm sm:text-base text-slate-600 font-medium pb-4 sm:pb-10">
              I'm a Full-Stack Developer based in West Bengal, India. I enjoy
              working on every aspect of web development, from the user
              interface to the server logic.
            </p>
            <div>
              <a
                href="/Resume.pdf"
                download=""
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
          </div>
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
            <Lottie
              animationData={animationData}
              autoPlay={true}
              style={style}
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
      </div>
    </section>
  );
};

export default Hero;
