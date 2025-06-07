
import React from 'react';
import { FileText, Rocket, Code, Coffee, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const AboutSection = () => {
  const { theme } = useTheme();
  
  const handleDownloadResume = () => {
    console.log('Downloading resume...');
    const link = document.createElement('a');
    link.href = '/resume/resumee.pdf';
    link.download = 'Venkata_Madhu_Resume.pdf';
    link.click();
  };

  const funFacts = [
    { icon: <Code className="w-6 h-6" />, fact: "Can debug code faster than making coffee ☕" },
    { icon: <Zap className="w-6 h-6" />, fact: "Crafted projects that helped me level up my coding skills" },
    { icon: <Coffee className="w-6 h-6" />, fact: "Survived on 2 hours of sleep during hackathons" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'light' ? 'text-gray-800' : 'text-white'
          }`}>
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-12">
          {/* My Journey - Single Column */}
          <div className={`backdrop-blur-lg rounded-2xl p-8 border ${
            theme === 'light' 
              ? 'bg-white/60 border-purple-200' 
              : 'bg-slate-800/30 border-purple-500/20'
          }`}>
            <h3 className={`text-3xl font-semibold mb-6 flex items-center ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>
              <Rocket className="w-8 h-8 text-purple-500 mr-3" />
              My Journey
            </h3>
            <div className={`space-y-6 leading-relaxed ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              <p>
               Driven full-stack enthusiast fueled by curiosity and endless cups of coffee, I’m Venkata madhu, currently deep-diving into Computer Science & Engineering at KL University. My tech adventure started even earlier during my diploma at Bapatla Engineering College, where I realized circuits and code aren’t just subjects — they’re the tools to shape tomorrow.
              </p>
              <p>
                Throughout my academic years, I've immersed myself in cutting-edge technologies, 
                from building responsive web applications with React and Node.js to developing machine 
                learning models for real-world applications. My current capstone project on Human Activity 
                Recognition using Hybrid Visual Transformer models represents the culmination of my 
                journey in deep learning and computer vision.
              </p>
              <p>
                I believe in continuous learning and pushing boundaries. Whether it's contributing to 
                open-source projects, participating in hackathons, or mentoring fellow students, 
                I'm driven by the endless possibilities that technology offers to create meaningful impact.
              </p>
            </div>
          </div>

          {/* Fun Facts */}
          <div className={`backdrop-blur-lg rounded-2xl p-8 border ${
            theme === 'light' 
              ? 'bg-white/60 border-purple-200' 
              : 'bg-slate-800/30 border-purple-500/20'
          }`}>
            <h3 className={`text-3xl font-semibold mb-6 text-center ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>
              Fun <span className="text-purple-500">Facts</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {funFacts.map((item, index) => (
                <div key={index} className={`flex flex-col items-center text-center p-4 rounded-lg border transition-all duration-300 group ${
                  theme === 'light' 
                    ? 'bg-purple-50/50 border-purple-200/50 hover:border-purple-300' 
                    : 'bg-slate-700/30 border-purple-500/10 hover:border-purple-500/30'
                }`}>
                  <div className="text-purple-500 mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                    {item.fact}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className={`rounded-lg p-6 border ${
                theme === 'light'
                  ? 'bg-gradient-to-r from-purple-100/50 to-blue-100/50 border-purple-200'
                  : 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/20'
              }`}>
                <h4 className="text-xl font-semibold text-purple-500 mb-2">🎯 Current Goal</h4>
                <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  Building full-stack apps that make technology easier and more useful!
                </p>
              </div>
            </div>
          </div>

          {/* Resume Download Button */}
          <div className="text-center">
            <button
              onClick={handleDownloadResume}
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center mx-auto"
            >
              <FileText className="mr-3 w-6 h-6" />
              Download Resume
              <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity">
                📄
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
