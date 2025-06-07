
import React from 'react';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { EducationSection } from '../components/EducationSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { SkillsSection } from '../components/SkillsSection';
import { CertificationsSection } from '../components/CertificationsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

const AppContent = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100' 
        : 'bg-gradient-to-br from-slate-900 via-purple-900 via-blue-900 to-slate-900'
    }`}>
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className={`absolute top-0 left-0 w-full h-full ${
          theme === 'light'
            ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200/40 via-transparent to-transparent'
            : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent'
        }`} />
        <div className={`absolute bottom-0 right-0 w-full h-full ${
          theme === 'light'
            ? 'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-200/40 via-transparent to-transparent'
            : 'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent'
        }`} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse ${
          theme === 'light'
            ? 'bg-gradient-to-r from-indigo-300/30 to-purple-300/30'
            : 'bg-gradient-to-r from-purple-600/10 to-blue-600/10'
        }`} />
        
        {/* Additional floating elements */}
        <div className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-2xl animate-pulse delay-1000 ${
          theme === 'light' ? 'bg-blue-200/30' : 'bg-cyan-500/10'
        }`} />
        <div className={`absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-2xl animate-pulse delay-2000 ${
          theme === 'light' ? 'bg-violet-200/30' : 'bg-pink-500/10'
        }`} />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default Index;
