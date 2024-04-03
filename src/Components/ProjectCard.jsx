import React from 'react';

function ProjectCard({ title, description, technologies, githubLink, liveDemoLink, image }) {
  return (
    <div className="relative bg-gray-600 p-1 rounded-lg shadow-md h-[150px]  md:h-auto  overflow-hidden ">
      <img src={image} alt={title} className="md:w-full rounded-md   h-[150px] md:h-auto transition-transform duration-300 transform hover:scale-105" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between opacity-0 bg-black bg-opacity-70 hover:opacity-100 transition-opacity duration-300">
        <div className="p-4">
          <h3 className=" text-md md:text-xl text-[#BE7B72] font-bold mb-2">{title}</h3>
          <p className="text-white">{description}</p>
          <div className="flex flex-wrap items-center "> {/* Center the technologies horizontally and vertically */}
            {technologies.map((tech, index) => (
              <div key={index} className="bg-violet-500 ml-2 rounded-full px-2 md:px-3 py-1 text-sm md:font-semibold text-white mr-2">{tech}</div>
            ))}
          </div>
        </div>
        <div className="flex justify-between p-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white bg-violet-500 duration-500 max-w-20 text-center p-1 text-sm  rounded-md md:text-md cursor-pointer">GitHub</a>
          <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-white max-w-20 text-center duration-500 bg-violet-500 p-1 text-sm md:text-md hover:drop-shadow-lg drop-shadow-sm rounded-md cursor-pointer hover:bg-[#F2613F]">Live Link</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
