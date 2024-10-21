import React, { useState } from 'react';

// Example images (replace these with your actual image imports or URLs)
import frontEndImg1 from '../assets/images/frontend1.png';
import frontEndImg2 from '../assets/images/frontend2.png';
import frontEndImg3 from '../assets/images/frontend3.png';
import wordpressImg1 from '../assets/images/wordpress1.png';
import wordpressImg2 from '../assets/images/wordpress2.png';
import wordpressImg3 from '../assets/images/wordpress3.png';
import linuxImg1 from '../assets/images/linux1.jpg';
import linuxImg2 from '../assets/images/linux2.jpg';
import linuxImg3 from '../assets/images/linux3.jpg';

const frontEndProjects = [
  { title: "Front-End Project 1", description: "A responsive website built using React and TailwindCSS.", image: frontEndImg1, link: "https://example.com/frontend1" },
  { title: "Front-End Project 2", description: "An interactive dashboard built with HTML, CSS, and JavaScript.", image: frontEndImg2, link: "https://example.com/frontend2" },
  { title: "Front-End Project 3", description: "A mobile-first website with complex animations using React.", image: frontEndImg3, link: "https://example.com/frontend3" },
];

const wordpressProjects = [
  { title: "WordPress Project 1", description: "A custom WordPress theme for a portfolio site.", image: wordpressImg1, link: "https://example.com/wordpress1" },
  { title: "WordPress Project 2", description: "A WooCommerce integration for an online store.", image: wordpressImg2, link: "https://example.com/wordpress2" },
  { title: "WordPress Project 3", description: "A blog with custom functionality using WordPress plugins.", image: wordpressImg3, link: "https://example.com/wordpress3" },
];

const linuxProjects = [
  { title: "Linux Project 1", description: "Automated server setup with Bash scripting.", image: linuxImg1, link: "https://example.com/linux1" },
  { title: "Linux Project 2", description: "Linux server security optimization for a web server.", image: linuxImg2, link: "https://example.com/linux2" },
  { title: "Linux Project 3", description: "Docker container setup for a CI/CD pipeline.", image: linuxImg3, link: "https://example.com/linux3" },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const renderProjects = (projects) => {
    return projects.map((project, index) => (
      <div key={index} className="project-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 mb-6">
        <img src={project.image} alt={project.title} loading="lazy" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            View Project
          </a>
        </div>
      </div>
    ));
  };

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center mb-6">
          <button
            className={`mx-2 px-6 py-2 rounded-lg text-white transition duration-300 ${selectedCategory === 'frontend' ? 'bg-blue-500' : 'bg-gray-400 dark:bg-gray-600'}`}
            onClick={() => setSelectedCategory('frontend')}
          >
            Front-End Projects
          </button>
          <button
            className={`mx-2 px-6 py-2 rounded-lg text-white transition duration-300 ${selectedCategory === 'wordpress' ? 'bg-blue-500' : 'bg-gray-400 dark:bg-gray-600'}`}
            onClick={() => setSelectedCategory('wordpress')}
          >
            WordPress Projects
          </button>
          <button
            className={`mx-2 px-6 py-2 rounded-lg text-white transition duration-300 ${selectedCategory === 'linux' ? 'bg-blue-500' : 'bg-gray-400 dark:bg-gray-600'}`}
            onClick={() => setSelectedCategory('linux')}
          >
            Linux Projects
          </button>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedCategory === 'frontend' && renderProjects(frontEndProjects)}
          {selectedCategory === 'wordpress' && renderProjects(wordpressProjects)}
          {selectedCategory === 'linux' && renderProjects(linuxProjects)}
        </div>
      </div>
    </section>
  );
};

export default Projects;