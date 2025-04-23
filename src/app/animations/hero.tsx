import React, { FunctionComponent, useCallback } from "react";
import { motion } from "framer-motion";
import Img from "../../../public/Images/irfan.png";
import { Typewriter } from "react-simple-typewriter";

const HeroSection: React.FC<{ heading: string; para: string }> = ({
  heading,
  para,
}: {
  heading: string;
  para: string;
}) => {
  return (
    <section className=" w-full flex flex-col justify-center items-center  text-white px-6 text-center overflow-hidden ">
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hey, I’m <span className="text-[#b292ff] ...">{heading}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl max-w-xl mb-4"
      >
        {para}
      </motion.p>

      <div className="mb-4 text-2xl">
        <Typewriter
          words={[
            "Frontend Developer",
            "Creative Coder",
            "UI/UX Explorer",
            "React Enthusiast",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </div>

      <motion.div>
        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-[#b292ff] transition duration-300"
        >
          Download My CV ↓
        </motion.a>
        <motion.a
          href="#Expereince"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="inline-block text-white px-6 py-3  hover:text-[#b292ff] transition duration-300 ml-4"
        >
          Experince
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
