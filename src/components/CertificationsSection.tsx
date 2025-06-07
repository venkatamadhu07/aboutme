import React, { useState } from 'react';
import { Award, Trophy, Users, Code } from 'lucide-react';

export const CertificationsSection = () => {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  const certifications = [
    {
      id: 1,
      name: 'MongoDB Developer Associate Node.js',
      organization: 'MongoDB',
      date: '2025',
      logo: '☁️',
      verificationLink: 'https://www.credly.com/badges/48d404fa-6072-4d35-a3c0-2e5a9e300c1a/linked_in_profile'
    },
    {
      id: 2,
      name: 'TESSOLVE AIML Level 1',
      organization: 'TESSOLVE',
      date: '2024',
      logo: '🌐',
      verificationLink: 'file:///C:/Users/madhu/Downloads/AIML_LEVEL1.pdf'
    },
    {
      id: 3,
      name: 'Python foundation course',
      organization: 'Infosys Spring board',
      date: '2023',
      logo: '🧠',
      verificationLink: 'file:///C:/Users/madhu/Downloads/Python_certificate.pdf'
    },
    {
      id: 4,
      name: 'Sales force AI AssociateI',
      organization: 'Sales force',
      date: '2023',
      logo: '🤖',
      verificationLink: 'file:///C:/Users/madhu/Downloads/SALES_FORCE%20ASSOCIATE%20CERTIFICATE.pdf'
    }
  ];

  const hackathons = [
    {
      name: 'Infineon Launch Pad',
      position: 'Runner',
      year: '2025',
      project: 'Defend the kingdom'
    }
  ];

  const collegeActivities = [
    {
      activity: 'President, Graduate AI Research Club',
      year: '2023-2024',
      description: 'Led 50+ member research community focusing on cutting-edge AI applications'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-purple-400">Certifications</span> & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional credentials and recognition in technology excellence
          </p>
        </div>

        {/* Professional Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-slate-800/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 text-center cursor-pointer"
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              {/* Certified Popup */}
              {hoveredCert === cert.id && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold z-10 animate-fade-in">
                  ✅ Certified
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-green-500"></div>
                </div>
              )}
              
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{cert.logo}</div>
              <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                {cert.name}
              </h3>
              <p className="text-purple-400 font-medium mb-1">{cert.organization}</p>
              <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
              <a
                href={cert.verificationLink}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
              >
                <Award className="w-4 h-4 mr-1" />
                Verify
              </a>
            </div>
          ))}
        </div>

        {/* Other Achievements */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hackathons */}
          <div className="bg-slate-800/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
              Hackathon Victory
            </h3>
            <div className="space-y-4">
              {hackathons.map((hack, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-purple-500/10">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-semibold">{hack.name}</h4>
                    <span className="text-yellow-400 font-bold text-sm">{hack.position}</span>
                  </div>
                  <p className="text-purple-400 text-sm mb-1">{hack.project}</p>
                  <p className="text-gray-400 text-xs">{hack.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* College Activities */}
          <div className="bg-slate-800/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Users className="w-6 h-6 text-blue-400 mr-3" />
              College Activity
            </h3>
            <div className="space-y-4">
              {collegeActivities.map((activity, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-purple-500/10">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-semibold">{activity.activity}</h4>
                    <span className="text-blue-400 text-sm">{activity.year}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center flex items-center justify-center">
            <Code className="w-6 h-6 text-purple-400 mr-3" />
            Achievement Stats
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">6+</div>
              <p className="text-gray-300">Certifications</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <p className="text-gray-300">Hackathons</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
              <p className="text-gray-300">Leadership Roles</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
              <p className="text-gray-300">Students Mentored</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
