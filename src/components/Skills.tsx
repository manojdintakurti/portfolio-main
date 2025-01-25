
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaAws,
  FaDatabase, FaDocker, FaPython
} from 'react-icons/fa';
import {
  SiSpringboot, SiMongodb, SiPostman, SiGit, SiKubernetes,
  SiAngular, SiJquery, SiAstro, SiTailwindcss, SiTypescript,
  SiExpress, SiGradle, SiBitbucket, SiJenkins, SiBamboo,
  SiPostgresql, SiTensorflow, SiOpenai
} from 'react-icons/si';
import { GiBrain } from 'react-icons/gi';

const skillCategories = [
  {
    title: 'Frontend Technologies',
    description: 'Building responsive and interactive user interfaces',
    skills: [
      { icon: FaReact, name: 'React' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      { icon: SiAngular, name: 'Angular' },
      { icon: FaHtml5, name: 'HTML5' },
      { icon: FaCss3Alt, name: 'CSS3' },
      { icon: SiJquery, name: 'jQuery' },
      { icon: SiAstro, name: 'Astro' }
    ]
  },
  {
    title: 'Backend Technologies',
    description: 'Creating robust server-side applications',
    skills: [
      { icon: FaNodeJs, name: 'Node.js' },
      { icon: SiSpringboot, name: 'Spring Boot' },
      { icon: SiExpress, name: 'Express' },
      { icon: FaDatabase, name: 'SQL' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiPostgresql, name: 'PostgreSQL' }
    ]
  },
  {
    title: 'Cloud / Tools',
    description: 'DevOps and development tools expertise',
    skills: [
      { icon: FaAws, name: 'AWS' },
      { icon: FaDocker, name: 'Docker' },
      { icon: SiKubernetes, name: 'Kubernetes' },
      { icon: SiPostman, name: 'Postman' },
      { icon: SiGit, name: 'Git' },
      { icon: SiBitbucket, name: 'BitBucket' },
      { icon: SiGradle, name: 'Gradle' },
      { icon: SiJenkins, name: 'Jenkins' },
      { icon: SiBamboo, name: 'Bamboo' }
    ]
  },
  {
    title: 'AI & ML',
    description: 'Machine learning and artificial intelligence skills',
    skills: [
      { icon: GiBrain, name: 'Reinforcement Learning' },
      { icon: FaPython, name: 'DQN' },
      { icon: SiTensorflow, name: 'PPO' },
      { icon: FaPython, name: 'PyTorch' },
      { icon: SiOpenai, name: 'OpenAI Gym' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group"
            >
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <div className="grid grid-cols-4 gap-6">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group cursor-pointer"
                    >
                      <IconComponent 
                        className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" 
                        title={skill.name}
                      />
                      <span className="text-xs font-medium text-purple-700 text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}