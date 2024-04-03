import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('about'); // Set default active section to 'about'

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if screen width is less than or equal to 768px (mobile size)
    };

    handleResize(); // Call once to set the initial state

    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Remove the event listener on component unmount
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
    toggleMenu(); // Close the menu when a section is clicked
  };

  useEffect(() => {
    const underline = document.getElementById('animated-underline');
    let animate = true;

    const toggleAnimation = () => {
      if (animate) {
        underline.style.width = '100%'; // Expand the underline
        setTimeout(() => {
          underline.style.width = '0%'; // Shrink the underline after 3 milliseconds
        }, 3000);
      } else {
        underline.style.width = '0%'; // Shrink the underline
        setTimeout(() => {
          underline.style.width = '100%'; // Expand the underline after 3 milliseconds
        }, 3000);
      }
      animate = !animate;
    };

    toggleAnimation(); // Start the animation loop

    const interval = setInterval(toggleAnimation, 6000); // Repeat the animation every 6 milliseconds (3 milliseconds for each animation phase)

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);


  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center">
        <div className="relative">
      <h1 className="text-2xl font-bold" style={{
          fontFamily: "Edu NSW ACT Foundation",
          background: "linear-gradient(90deg, #4F46E5 0%, #A86AF8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          position: "relative"
      }}>
          CaptainMASUD
      </h1>
      <div
        id="animated-underline"
        className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500"
        style={{ transition: 'width 1s ease-in-out' }} // Adjusted transition duration to 1 second for slower animation
      ></div>
    </div>
        </div>
        {isMobile ? ( // If it's a mobile screen
          <div className="md:hidden">
            <motion.button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none"
              whileTap={{ scale: 0.9 }} // Add motion animation while tapping the button
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 6h14v1H3V6zm0 5h14v1H3v-1zm0 5h14v1H3v-1z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h12v1H4V5zm0 4h12v1H4V9zm0 4h12v1H4v-1z"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        ) : (
          <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="md:flex space-x-4">
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer ${activeSection === 'about' ? 'text-orange-500' : 'text-white'}`}
                  onClick={() => handleSetActive('about')}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer ${activeSection === 'skills' ? 'text-orange-500' : 'text-white'}`}
                  onClick={() => handleSetActive('skills')}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer ${activeSection === 'projects' ? 'text-orange-500' : 'text-white'}`}
                  onClick={() => handleSetActive('projects')}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer ${activeSection === 'contact' ? 'text-orange-500' : 'text-white'}`}
                  onClick={() => handleSetActive('contact')}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {isMobile && isMenuOpen && ( // If it's a mobile screen and the menu is open
        <div className="md:hidden flex flex-col items-center justify-center space-y-4">
          <motion.div
            whileHover={{ scale: 1.1 }} // Add motion animation while hovering
            key={activeSection}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`block py-2 px-4 text-white ${activeSection === 'about' ? 'text-orange-500' : 'hover:bg-gray-700'}`}
              onClick={() => handleSetActive('about')}
            >
              About
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }} // Add motion animation while hovering
            key={activeSection}
          >
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`block py-2 px-4 text-white ${activeSection === 'skills' ? 'text-orange-500' : 'hover:bg-gray-700'}`}
              onClick={() => handleSetActive('skills')}
            >
              Skills
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }} // Add motion animation while hovering
            key={activeSection}
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`block py-2 px-4 text-white ${activeSection === 'projects' ? 'text-orange-500' : 'hover:bg-gray-700'}`}
              onClick={() => handleSetActive('projects')}
            >
              Projects
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }} // Add motion animation while hovering
            key={activeSection}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`block py-2 px-4 text-white ${activeSection === 'contact' ? 'text-orange-500' : 'hover:bg-gray-700'}`}
              onClick={() => handleSetActive('contact')}
            >
              Contact
            </Link>
          </motion.div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
