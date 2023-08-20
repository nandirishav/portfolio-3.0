import React from "react";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { introChild, introContainer } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <motion.div
      variants={introContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex flex-row flex-wrap justify-center gap-10"
    >
      {technologies.map((technology) => (
        <motion.div
          key={technology.name}
          className="w-28 h-28  bg-slate-50 p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-200 transition-all"
          variants={introChild}
        >
          <img src={technology.icon} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");
