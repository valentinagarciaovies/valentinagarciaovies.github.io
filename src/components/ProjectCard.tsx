import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectType } from '../types';

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-neutral-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-darkest/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-neutral-darkest mb-2">
          {project.title}
        </h3>
        
        <p className="text-neutral-dark mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-primary-light/10 text-primary-dark rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {project.link && (
          <a
            href={project.link}
            className="inline-flex items-center text-secondary-main hover:text-secondary-dark transition-colors mt-auto"
          >
            <span className="mr-2">View project</span>
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;