
import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Electronics and Communication(Specialization in Data Science and Big Data Analyitcs)",
      institution: "KL University",
      year: "2023 - 2026",
      gpa: "9.37/10.0",
      description: "Specialized in Software Engineering and Machine Learning",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Diploma",
      institution: "Bapatla Engineering College",
      year: "2020 - 2023",
      percentage: "85%",
      description: "Advanced studies in Distributed Systems and Machine Learning",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const courses = [
    "Data Structures & Algorithms",
    "System Design",
    "Database Management",
    "Machine Learning",
    "Cloud Computing",
    "Web Development",
    "Mobile App Development",
    "Cybersecurity"
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Educational <span className="text-purple-400">Qualifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            My academic journey and the knowledge that shaped my career
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 mt-1">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                    <p className="text-purple-400 font-medium mb-1">{edu.institution}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-400 text-sm">{edu.year}</span>
                      <span className="text-blue-400 font-medium">
  {edu.gpa 
    ? `GPA: ${edu.gpa}` 
    : edu.percentage 
      ? `Percentage: ${edu.percentage}` 
      : "No GPA or Percentage"}
</span>



                      
                    </div>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Courses */}
          <div className="bg-slate-800/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <BookOpen className="w-6 h-6 text-purple-400 mr-3" />
              Key Courses
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                  <span className="text-gray-300 text-sm font-medium">{course}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/20">
              <h4 className="text-lg font-semibold text-white mb-2">Academic Achievements</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Dean's List - 7 consecutive semesters</li>
                <li>• Award for the best student of the year</li>
                <li>• Currently ongoing capstone project</li>
                <li>• Learning Full Stack Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
