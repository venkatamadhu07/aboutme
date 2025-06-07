
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    // Frontend Projects
    {
      id: 1,
      title: 'Invoice Generator',
      description: 'Professional invoice generation system with PDF export, client management, and payment tracking features',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'jsPDF'],
      category: 'Frontend',
      liveDemo: 'https://event-registration-website-woad.vercel.app/',
      sourceCode: 'https://github.com/venkatamadhu07/invoice-generator'
    },
    {
      id: 2,
      title: 'Fitness Website',
      description: 'Modern fitness platform with workout tracking, nutrition plans, progress analytics, and social features',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      technologies: ['React', 'Redux', 'Chart.js', 'Firebase'],
      category: 'Frontend',
      liveDemo: '#',
      sourceCode: 'https://github.com/venkatamadhu07/fitlife-project'
    },
    
    // Backend Projects
    {
      id: 3,
      title: 'Career Assessment Tool',
      description: 'AI-powered career guidance system with comprehensive skill assessment and personalized career recommendations',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Python'],
      category: 'Backend',
       liveDemo: 'https://event-registration-website-woad.vercel.app/', 
  sourceCode: 'https://github.com/venkatamadhu07/career-assessment-tool' 
},
    
{


      id: 4,
      title: 'Event Registration Platform',
      description: 'Comprehensive event management system with registration, payment processing, ticketing, and analytics dashboard',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&h=300&fit=crop',
      technologies: ['Node.js', 'PostgreSQL', 'Stripe API', 'Redis'],
      category: 'Backend',
      liveDemo: 'https://event-registration-website-woad.vercel.app/',
      sourceCode: 'https://github.com/venkatamadhu07/event-registration-website'
    },
    
    // Full Stack Projects
    {
      id: 5,
      title: 'Clothzy E-commerce',
      description: 'Full-stack fashion e-commerce platform with AR try-on features, secure payment gateway, and inventory management',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS S3'],
      category: 'Full Stack',
      liveDemo: 'https://clothzy-seven.vercel.app/',
      sourceCode: 'https://github.com/venkatamadhu07/Clothzy'
    },
    
    // Machine Learning Projects
    {
      id: 6,
      title: 'Face & Eye Detection',
      description: 'Real-time facial recognition and eye tracking system using advanced computer vision and deep learning algorithms',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe'],
      category: 'Machine Learning',
      liveDemo: '#',
      sourceCode: 'https://github.com/venkatamadhu07/Face-Eye-Detection'
    },
    
    // Data Science Projects
    {
      id: 7,
      title: 'Healthcare Analytics Platform',
      description: 'Real-time patient monitoring system with predictive analytics, automated health alerts, and comprehensive dashboards',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop',
      technologies: ['Python', 'Pandas', 'Plotly', 'Flask', 'PostgreSQL'],
      category: 'Data Science',
      liveDemo: '#',
      sourceCode: '#'
    },
    
    // Deep Learning Projects (Current Capstone)
    {
      id: 8,
      title: 'Human Activity Recognition',
      description: '🚀 Capstone Project: Advanced HAR system using Hybrid Visual Transformer models for precise human activity classification from video sequences',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop',
      technologies: ['Python', 'PyTorch', 'Vision Transformers', 'CNNs'],
      category: 'Deep Learning',
      liveDemo: '#',
      sourceCode: '#',
      isOngoing: true
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Machine Learning', 'Data Science', 'Deep Learning'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8" />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-purple-500/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 relative"
            >
              {project.isOngoing && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  🚀 Ongoing
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <a
                      href={project.liveDemo}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                    <a
                      href={project.sourceCode}
                      className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Focus */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-semibold text-white mb-4">🎯 Current Focus</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Working on my Master's capstone project: Human Activity Recognition using Hybrid Visual Transformer models. 
              This cutting-edge research combines CNN architectures with Vision Transformers to achieve state-of-the-art 
              accuracy in recognizing human activities from video sequences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
