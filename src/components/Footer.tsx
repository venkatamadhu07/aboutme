
import React from 'react';
import { Github, Linkedin, Mail, User, Heart } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/venkatamadhu07', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/k-venkat-60b341300/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:2200049188ece@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900/95 border-t border-purple-500/20 relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-white">Kunchala Venkata Madhu</span>
              <p className="text-gray-400 text-sm">Full Stack Developer & UI/UX Design Enthusiast</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="group p-3 bg-slate-800/50 rounded-full border border-purple-500/20 hover:border-purple-500/40 text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30 border border-purple-500/20 hover:border-purple-500/40 text-gray-300 hover:text-white px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium flex items-center space-x-2"
          >
            <span>Back to Top</span>
            <span className="transform group-hover:-translate-y-1 transition-transform">↑</span>
          </button>
        </div>

        <div className="border-t border-slate-700/50 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © 2024 Venkata Madhu. Crafted with precision and passion.
          </p>
          <p className="text-gray-500 text-xs flex items-center justify-center space-x-1">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-red-400 animate-pulse" />
            <span>using React, TypeScript </span>
          </p>
          <div className="mt-4">
            <p className="text-purple-400 text-sm font-medium italic">
              "Innovation distinguishes between a leader and a follower." - Steve Jobs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
