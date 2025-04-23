export interface ProjectType {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface SkillType {
  name: string;
  icon: string;
  category: 'tools' | 'languages' | 'analytics';
}