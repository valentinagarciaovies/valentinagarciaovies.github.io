import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-neutral-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-darkest mb-4">
            Project Portfolio
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            Explore a selection of my business analytics projects that demonstrate expertise in data visualization, predictive modeling, and strategic analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-primary-main hover:bg-primary-dark text-neutral-white px-6 py-3 rounded-full transition-colors duration-300"
          >
            Interested in working together?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;