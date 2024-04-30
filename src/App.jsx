import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Components/Navbar';
import ProjectCarousel from './Components/ProjectCarousel';
import Skills from './Components/Skills';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';

function App() {
  const [isVisible, setIsVisible] = useState({ skills: false, projects: false, contact: false });
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > prevScrollY ? 'down' : 'up';
      const scrollPosition = currentScrollY + window.innerHeight;
      const aboutSection = document.getElementById('about').offsetTop;
      const skillsSection = document.getElementById('skills').offsetTop;
      const projectsSection = document.getElementById('projects').offsetTop;
      const contactSection = document.getElementById('contact').offsetTop;

      if (scrollDirection === 'down') {
        if (scrollPosition >= aboutSection) {
          setIsVisible((prevState) => ({ ...prevState, skills: true }));
        }

        if (scrollPosition >= skillsSection) {
          setIsVisible((prevState) => ({ ...prevState, projects: true }));
        }

        if (scrollPosition >= projectsSection) {
          setIsVisible((prevState) => ({ ...prevState, contact: true }));
        }
      } else {
        if (scrollPosition < contactSection) {
          setIsVisible((prevState) => ({ ...prevState, contact: false }));
        }

        if (scrollPosition < projectsSection) {
          setIsVisible((prevState) => ({ ...prevState, projects: false }));
        }

        if (scrollPosition < skillsSection) {
          setIsVisible((prevState) => ({ ...prevState, skills: false }));
        }
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return (
    <>
      <Navbar />
      <section id="about">
        <AboutMe />
      </section>

      <div className="container mx-auto p-8">
        <motion.section
          className="mb-8"
          id="skills"
          initial={{ opacity: 0, y: 100 }}
          animate={isVisible.skills ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <Skills />
        </motion.section>

        <motion.section
          className="mb-8"
          id="projects"
          initial={{ opacity: 0, y: 100 }}
          animate={isVisible.projects ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <h2 className="text-[3rem]  flex justify-center text-green-500 text-center mb-10 mt-16" >
            Projects<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mt-6 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
</svg>

          </h2>
          <ProjectCarousel />
        </motion.section>

        <motion.section
          className="mb-8"
          id="contact"
          initial={{ opacity: 0, y: 100 }}
          animate={isVisible.contact ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <h2 className="text-[2rem] font-bold mb-4 text-center text-purple-500 mt-16 flex justify-center">Contact me <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mt-2 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>

</h2>
          <ContactForm />
        </motion.section>

        <motion.footer
          className="text-center text-gray-600"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p> */}
        </motion.footer>
      </div>
      <Footer />
    </>
  );
}

export default App;
