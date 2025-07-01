import React from 'react';
import { Code, Database, Palette, BarChart3 } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"],
      color: "primary"
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Node.js", "Express", "MongoDB", "SQL", "API Development", "Database Design"],
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      skills: ["Data Visualization", "Statistical Analysis", "Report Generation", "Excel", "Data Cleaning"],
      color: "primary"
    },
    {
      icon: Palette,
      title: "Design & Tools",
      skills: ["UI/UX Design", "Figma", "Git", "VS Code", "Chrome DevTools", "Photoshop"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning frontend development, data analysis, and modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const colorClass = category.color === 'primary' ? 'primary' : 'accent';
            
            return (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 animate-fade-in">
                <div className={`w-12 h-12 bg-${colorClass}-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className={`text-${colorClass}-600 dark:text-${colorClass}-400`} size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className={`w-2 h-2 bg-${colorClass}-500 dark:bg-${colorClass}-400 rounded-full mr-3`}></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
