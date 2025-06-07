
import React from 'react';
import { ArrowDown } from 'lucide-react';
import profileImg from './images/profile.jpg';


export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Creative Hexagonal Photo with Floating Elements */}
        <div className="mb-8 animate-fade-in">
          <div className="relative w-56 h-56 mx-auto">
            {/* Hexagonal frame with gradient border */}
            <div className="absolute inset-0" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <div className="w-full h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 animate-pulse"></div>
            </div>
            
            {/* Inner photo container */}
            <div className="absolute inset-2" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <div className="w-full h-full bg-slate-800 overflow-hidden">
                <img
  src={profileImg}
  alt="Professional headshot"
  className="w-full h-full object-cover-[50%_40%] transform hover:scale-110 transition-transform duration-700"
/>

              </div>
            </div>
            
            {/* Orbiting particles */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 translate-y-1"></div>
            </div>
            
            {/* Static floating elements */}
            <div className="absolute -top-6 -right-6 w-4 h-4 bg-cyan-400 rounded-full opacity-80 animate-bounce delay-1000"></div>
            <div className="absolute -bottom-6 -left-6 w-4 h-4 bg-pink-400 rounded-full opacity-80 animate-bounce delay-2000"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Kunchala Venkata Madhu
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-6">
            Full Stack Developer & UI/UX Design Enthusiast
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Crafting intelligent digital experiences with cutting-edge technologies and creative innovation
          </p>

          <button
            onClick={scrollToProjects}
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            Explore My Work
            <ArrowDown className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
