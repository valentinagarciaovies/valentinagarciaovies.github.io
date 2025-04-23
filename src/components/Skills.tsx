import React from 'react';
import { skills } from '../data/skills';
import SkillItem from './SkillItem';

const Skills: React.FC = () => {
  // Group skills by category
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  const languageSkills = skills.filter(skill => skill.category === 'languages');
  const analyticsSkills = skills.filter(skill => skill.category === 'analytics');

  return (
    <section id="skills" className="py-20 bg-neutral-lightest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-darkest mb-4">
            Skills & Expertise
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            My comprehensive toolkit for business analytics, featuring industry-standard tools, programming languages, and specialized analytical skills.
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-bold text-neutral-darker mb-6">
            <span className="text-primary-main">Analytics</span> Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {analyticsSkills.map(skill => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-bold text-neutral-darker mb-6">
            <span className="text-secondary-main">Programming</span> Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {languageSkills.map(skill => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-neutral-darker mb-6">
            <span className="text-accent-main">Analysis</span> Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolsSkills.map(skill => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;