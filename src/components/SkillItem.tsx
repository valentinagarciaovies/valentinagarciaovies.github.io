import React from 'react';
import * as Icons from 'lucide-react';
import { SkillType } from '../types';

interface SkillItemProps {
  skill: SkillType;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  // Get the icon component dynamically from lucide-react
  const IconComponent = (Icons as any)[skill.icon];
  
  return (
    <div className="bg-neutral-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center">
      <div className={`
        w-12 h-12 rounded-full flex items-center justify-center mr-4
        ${skill.category === 'tools' ? 'bg-primary-light/20' : ''}
        ${skill.category === 'languages' ? 'bg-secondary-light/20' : ''}
        ${skill.category === 'analytics' ? 'bg-accent-light/20' : ''}
      `}>
        {IconComponent && (
          <IconComponent
            size={24}
            className={`
              ${skill.category === 'tools' ? 'text-primary-dark' : ''}
              ${skill.category === 'languages' ? 'text-secondary-dark' : ''}
              ${skill.category === 'analytics' ? 'text-accent-dark' : ''}
            `}
          />
        )}
      </div>
      <span className="text-neutral-darker font-medium">{skill.name}</span>
    </div>
  );
};

export default SkillItem;