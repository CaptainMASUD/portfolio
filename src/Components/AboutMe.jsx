import React from 'react';
import masud from '../images/project/masud.png';
import c from '../images/developer/c.png';
import d from '../images/developer/d.png';
import u from '../images/developer/u.png';

let a = "https://avatars.githubusercontent.com/u/108082819?v=4"

function AboutMe() {
  return (
    <div className="container mx-auto p-8 grid place-content-center duration-500">
      <div className="flex md:flex-row flex-col items-center justify-center mb-8">
        <img src={a} alt="Profile" className="w-56 h-56 mb-3 rounded-full border-2 ring-2 ring-blue-500 border-gray-500 mr-4" />
        <div>
          <h2 className="text-xl font-bold text-[#A8CD9F]">Masudul Alam</h2>
          <p className="text-lg text-[#D6DAC8] mb-2">Frontend App <br />and Web Developer</p>
          <a href="https://github.com/CaptainMASUD" target="_blank" rel="noopener noreferrer" className="text-white bg-gray-700 p-2 rounded-md duration-500   hover:bg-orange-600">GitHub</a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ExpertiseCard image={c}  title="Frontend Development" />
        <ExpertiseCard image={d} title="App Development" />
        <ExpertiseCardWithGitHub image={u} title="Web Development" githubLink="https://github.com/masudiiucracker" />
      </div>
    </div>
  );
}

function ExpertiseCard({ image, title }) {
  return (
    <div style={{fontFamily: "Cabin"}} className="bg-gray-700 mt-8 duration-500 p-4 rounded-lg shadow-md flex items-center justify-center text-[#B4B4B8] hover:drop-shadow-xl hover:shadow-red-500">
      <img src={image} alt={title} className="w-16 h-16 mb-2 " />&nbsp;
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  );
}

function ExpertiseCardWithGitHub({ image, title, githubLink }) {
  return (
    <div style={{fontFamily: "Cabin"}} className="bg-gray-700 mt-8 duration-500 p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-[#B4B4B8] hover:drop-shadow-xl hover:shadow-red-500">
      <img src={image} alt={title} className="w-16 h-16 mb-2" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
    </div>
  );
}

export default AboutMe;
