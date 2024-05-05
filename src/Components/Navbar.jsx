import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBars3BottomRight } from 'react-icons/hi2'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('about'); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 

    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
    toggleMenu(); 
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
              
            </motion.h1>
            <motion.div
              id="animated-underline"
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
              style={{ originX: 0, scaleX: 0 }}
              animate={{ scaleX: [0, 1, 0], transition: { duration: 8, repeat: Infinity } }}
            ></motion.div>
          </div>
        </div>
        {isMobile ? ( 
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              whileTap={{ scale: 0.9 }} 
            >
              {isMenuOpen ? ( 
                <HiX className="w-6 h-6" />
              ) : ( 
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
        {isMobile && isMenuOpen && ( 
          <motion.div
            className="md:hidden flex flex-col items-center justify-center space-y-4"
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }} 
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
              whileHover={{ scale: 1.1 }} 
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
              whileHover={{ scale: 1.1 }} 
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
              whileHover={{ scale: 1.1 }} 
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
