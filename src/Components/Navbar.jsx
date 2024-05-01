import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBars3BottomRight } from 'react-icons/hi2'; // Import hamburger icon
import { HiX } from 'react-icons/hi';

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

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center">
          <div className="relative">
            <motion.h1
              className="text-2xl font-bold"
              style={{
                fontFamily: "Edu NSW ACT Foundation",
                background: "linear-gradient(90deg, #4F46E5 0%, #A86AF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                position: "relative"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
            >
               <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.8 }}
              >
                C
              </motion.span>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                a
              </motion.span>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                p
              </motion.span>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                t
              </motion.span>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                a
              </motion.span>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                i
              </motion.span>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                n
              </motion.span>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                M
              </motion.span>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                A
              </motion.span>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                S
              </motion.span>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.8 }}
              >
                U
              </motion.span>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.8 }}
              >
                D
              </motion.span>
              {/* Repeat for other letters */}
            </motion.h1>
            <motion.div
              id="animated-underline"
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
              style={{ originX: 0, scaleX: 0 }}
              animate={{ scaleX: [0, 1, 0], transition: { duration: 8, repeat: Infinity } }}
            ></motion.div>
          </div>
        </div>
        {isMobile ? ( // If it's a mobile screen
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              whileTap={{ scale: 0.9 }} // Add motion animation while tapping the button
            >
              {isMenuOpen ? ( // If menu is open, show cross icon
                <HiX className="w-6 h-6" />
              ) : ( // If menu is closed, show hamburger icon
                <HiBars3BottomRight className="w-6 h-6" />
              )}
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
                  className={`cursor-pointer ${activeSection === 'about' ? 'text-blue-500' : 'text-white'}`}
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
                  className={`cursor-pointer ${activeSection === 'skills' ? 'text-blue-500' : 'text-white'}`}
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
                  className={`cursor-pointer ${activeSection === 'projects' ? 'text-blue-500' : 'text-white'}`}
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
                  className={`cursor-pointer ${activeSection === 'contact' ? 'text-blue-500' : 'text-white'}`}
                  onClick={() => handleSetActive('contact')}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <AnimatePresence>
        {isMobile && isMenuOpen && ( // If it's a mobile screen and the menu is open
          <motion.div
            className="md:hidden flex flex-col items-center justify-center space-y-4"
            initial={{ opacity: 0, y: -10 }} // Initial animation when menu opens
            animate={{ opacity: 1, y: 0 }} // Animation when menu is open
            exit={{ opacity: 0, y: -10 }} // Animation when menu closes
            transition={{ duration: 0.3 }} // Transition duration
          >
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
                className={`block py-2 px-4  text-white ${activeSection === 'about' ? 'text-blue-500' : 'hover:bg-gray-700'}`}
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
                className={`block py-2 px-4 text-white ${activeSection === 'skills' ? 'text-blue-500' : 'hover:bg-gray-700'}`}
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
                className={`block py-2 px-4 text-white ${activeSection === 'projects' ? 'text-blue-500' : 'hover:bg-gray-700'}`}
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
                className={`block py-2 px-4 text-white ${activeSection === 'contact' ? 'text-blue-500' : 'hover:bg-gray-700'}`}
                onClick={() => handleSetActive('contact')}
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
