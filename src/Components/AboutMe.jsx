import React, { useState, useEffect } from 'react';
import { FaCode, FaMobileAlt, FaGlobe, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaDownload } from "react-icons/fa6";

const profileImageLink = "https://avatars.githubusercontent.com/u/108082819?v=4";

function AboutMe() {
  const [shouldAnimate, setShouldAnimate] = useState({
    frontend: false,
    app: false,
    web: false,
  });

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShouldAnimate(prevState => ({
        ...prevState,
        frontend: true
      }));
    }, 200);
    const timer2 = setTimeout(() => {
      setShouldAnimate(prevState => ({
        ...prevState,
        app: true
      }));
    }, 400);
    const timer3 = setTimeout(() => {
      setShouldAnimate(prevState => ({
        ...prevState,
        web: true
      }));
    }, 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleGithubClick = () => {
    window.open("https://github.com/CaptainMASUD", "_blank");
  };

  return (
    <div className="mx-auto p-8 mt-20 grid place-content-center duration-500">
      <div className="flex md:flex-row flex-col items-center justify-center mb-8">
        <img src={profileImageLink} alt="Profile" className="w-56 h-56 mb-3 rounded-full border-2 ring-2 ring-blue-500 border-gray-500 mr-4" />
        <div className='grid place-content-center'>
          <h2 className="text-xl font-bold text-blue-500">Masudul Alam</h2>
          <p className="text-lg text-[#D6DAC8] mb-2"><span className='text-center ml-4'>Frontend App</span> <br />& Web Developer</p>
          <div className="flex">
            <button className="text-blue-500 w-36 flex items-center justify-center border border-blue-600 p-2 rounded-md duration-500 hover:text-white hover:bg-blue-600">
              <FaDownload className="mr-2 w-5 h-5" />Resume
            </button>
            <FaGithub className=" text-gray-400 hover:text-blue-500 duration-500 mt-2 ml-4 w-6 h-6 cursor-pointer" onClick={handleGithubClick} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ExpertiseCard icon={<FaCode size={40} />} title="Frontend Development" shouldAnimate={shouldAnimate.frontend} delay={0} />
        <ExpertiseCard icon={<FaMobileAlt size={40} />} title="App Development" shouldAnimate={shouldAnimate.app} delay={0.2} />
        <ExpertiseCardWithGitHub icon={<FaGlobe size={40} />} title="Web Development" githubLink="https://github.com/masudiiucracker" shouldAnimate={shouldAnimate.web} delay={0.4} />
      </div>
    </div>
  );
}

const iconVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

function ExpertiseCard({ icon, title, shouldAnimate, delay }) {
  return (
    <motion.div variants={iconVariants} initial="hidden" animate={shouldAnimate ? "visible" : "hidden"} transition={{ duration: 0.3, delay }} style={{ fontFamily: "Cabin" }} className="bg-gray-700 mt-8 p-4 rounded-lg shadow-md flex items-center text-[#B4B4B8] duration-500 hover:drop-shadow-xl hover:shadow-blue-500">
      <div className="bg-gradient-to-br  from-blue-500  to-blue-700 text-white rounded-full p-2 mr-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
    </motion.div>
  );
}

function ExpertiseCardWithGitHub({ icon, title, githubLink, shouldAnimate, delay }) {
  return (
    <motion.div variants={iconVariants} initial="hidden" animate={shouldAnimate ? "visible" : "hidden"} transition={{ duration: 0.3, delay }} style={{ fontFamily: "Cabin" }} className="bg-gray-700 mt-8 p-4 rounded-lg shadow-md flex items-center text-[#B4B4B8] duration-500 hover:drop-shadow-xl hover:shadow-blue-500">
      <div className="bg-gradient-to-br from-blue-500 to-blue-700  text-white rounded-full p-2 mr-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
    </motion.div>
  );
}

export default AboutMe;
