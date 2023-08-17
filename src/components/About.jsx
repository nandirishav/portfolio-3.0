import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import Tech from "./Tech";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionDarkHeadText}>About Me</h2>
      </motion.div>

      <motion.div className="w-full flex flex-col justify-center lg:flex-row items-center gap-20 lg:gap-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] w-full lg:w-3/5 leading-[30px]"
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          D3.js. I'm a quick learner and collaborate closely with my peers to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="w-full md:w-2/3 lg:w-2/5 rounded-full"
        >
          <img
            className="rounded-full w-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-1"
            src="https://github.com/nandirishav/project-assets/blob/main/portfolio/Me.jpg?raw=true"
            alt=""
          />
        </motion.div>
      </motion.div>

      <motion.div variants={fadeIn("", "spring", 0.5, 0.75)}>
        <div className="mt-20 flex flex-wrap gap-10">
          <Tech />
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
