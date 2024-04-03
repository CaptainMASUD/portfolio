import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCard from './ProjectCard';
import trabeltribe from '../images/project/trabeltribe.png'; 
import shadow from '../images/project/shadow.png'; 
import rock from '../images/project/rock.png'; 

function ProjectCarousel() {
  const projects = [
    {
      title: "Travel Tribe",
      technologies: ["React", "Bootstrap"],
      githubLink: "https://github.com/example/project2",
      liveDemoLink: "https://traveltribein.netlify.app/",
      image: trabeltribe 
    },
    {
      title: "Shadow Movies",
      technologies: ["React", "Bootstrap"],
      githubLink: "/",
      liveDemoLink: "https://shadow-movies.vercel.app/",
      image: shadow 
    },
    {
      title: "RHM PDF Converter",
      technologies: ["React", "Tailwind"],
      githubLink: "https://github.com/example/project3",
      liveDemoLink: "https://rocks-pdf-converter.vercel.app/",
      image: rock // Pass the imported image
    },
    // Add more projects as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display three cards at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="px-4"> {/* Added padding to create space around the slider */}
      <Slider {...settings} className="slick-slider">
        {projects.map((project, index) => (
          <div key={index} className="px-2"> {/* Added padding to create space around each card */}
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveDemoLink={project.liveDemoLink}
              image={project.image} // Pass the image to the ProjectCard component
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectCarousel;
