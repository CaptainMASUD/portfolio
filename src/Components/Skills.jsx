import React from 'react';
import cssIcon from '../images/languages/css.png';
import cIcon from '../images/languages/c.png';
import htmlIcon from '../images/languages/html.png';
import jsIcon from '../images/languages/js.png';
import programingIcon from '../images/languages/programing.png';
import java from '../images/languages/java.png';
import physics from '../images/languages/physics.png';
import python from '../images/languages/python.png';
import t from '../images/languages/t.svg';
import bootstrap from '../images/languages/bootstrap.svg';
import MongoDB from '../images/languages/mdb.svg';

function Skills() {
  const skills = [
    { name: 'C', icon: cIcon },
    { name: 'Java', icon: java },
    { name: 'python', icon: python },
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'Node.js', icon: programingIcon },
    { name: 'Express js', icon: programingIcon },
    { name: 'MongoDB', icon: MongoDB },
    { name: 'React', icon: physics },
    { name: 'Tailwindcss', icon: t },
    { name: 'Bootstrap', icon: bootstrap },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-[2rem] font-semibold text-center grid place-content-center text-blue-500 mb-8" >SKILLS 
      <svg class="animate-bounce w-7 h-7 ... ml-10">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
</svg>
</svg> </h2>
     

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-[#EBE3D5] duration-500">
        {skills.map((skill, index) => (
          <div key={index} className=" border border-l-blue-600 text-sm p-4 rounded-lg shadow-md flex items-center justify-center transform transition-transform duration-500 hover:translate-x-2 hover:shadow-md  hover:shadow-[#76885B]">
            <img src={skill.icon} alt={skill.name} className="w-8 h-8 mr-2" />
            <span className="text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
