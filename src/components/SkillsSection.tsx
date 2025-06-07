
import React, { useState } from 'react';
import { Code, Database, Cloud, Palette, Brain, Zap, Cpu, BarChart3 } from 'lucide-react';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('core');

  const skillCategories = {
    core: {
      title: 'Core Technologies',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'JavaScript/TypeScript', level: 85, description: 'Advanced programming & type safety' },
        { name: 'Python', level: 80, description: 'Data science & backend development' },
        { name: 'Java', level: 75, description: 'Enterprise applications' },
        { name: 'C++', level: 50, description: 'System programming & algorithms' }
      ]
    },
    frontend: {
      title: 'Frontend Magic',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-pink-500 to-purple-500',
      skills: [
        { name: 'React/Next.js', level: 75, description: 'Building dynamic UIs' },
        { name: 'Vue.js', level: 55, description: 'Progressive frameworks' },
        { name: 'Tailwind CSS', level: 82, description: 'Utility-first styling' },
        { name: 'Three.js', level: 58, description: '3D web experiences' }
      ]
    },
    backend: {
      title: 'Backend Power',
      icon: <Database className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Node.js', level: 70, description: 'Server-side JavaScript' },
        { name: 'Express/FastAPI', level: 58, description: 'RESTful API development' },
        { name: 'PostgreSQL', level: 65, description: 'Relational databases' },
        { name: 'MongoDB', level: 73, description: 'NoSQL solutions' }
      ]
    },
    ml: {
      title: 'Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'TensorFlow/PyTorch', level: 40, description: 'Deep learning frameworks' },
        { name: 'Computer Vision', level: 68, description: 'Image processing & analysis' },
        { name: 'NLP', level: 55, description: 'Natural language processing' },
        { name: 'Data Analysis', level: 72, description: 'Pandas, NumPy, Scikit-learn' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'AWS/GCP', level: 65, description: 'Cloud architecture' },
        { name: 'Docker/Kubernetes', level: 42, description: 'Containerization' },
        { name: 'Git/GitHub', level: 75, description: 'Version control' },
        { name: 'CI/CD', level: 70, description: 'Automation pipelines' }
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Problem Solving', level: 85, description: 'Analytical thinking' },
        { name: 'Team Leadership', level: 88, description: 'Project management' },
        { name: 'Communication', level: 92, description: 'Technical presentation' },
        { name: 'Research', level: 80, description: 'Academic & industry research' }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-purple-400">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive technical expertise across multiple domains
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Skills Display */}
        <div className="bg-slate-800/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} mb-4`}>
              {skillCategories[activeCategory].icon}
            </div>
            <h3 className="text-3xl font-bold text-white">
              {skillCategories[activeCategory].title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={skill.name} className="bg-slate-700/30 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                  <span className="text-purple-400 font-bold text-lg">{skill.level}%</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                <div className="relative">
                  <div className="w-full bg-slate-600 rounded-full h-3">
                    <div
                      className={`bg-gradient-to-r ${skillCategories[activeCategory].color} h-3 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Arsenal */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Technology Arsenal</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'JavaScript', 'Python', 'TypeScript', 'React', 'Vue.js', 'Node.js',
              'TensorFlow', 'PyTorch', 'OpenCV', 'scikit-learn', 'PostgreSQL',
              'MongoDB', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'Git',
              'Express', 'FastAPI', 'Three.js', 'Tailwind CSS', 'Next.js'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm font-medium hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
