import React from "react";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28  bg-slate-50 p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:shadow-blue-200 transition-all"
          key={technology.name}
        >
          <img src={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
