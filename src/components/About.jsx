import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate BCA student specializing in web development and programming, with hands-on experience in data analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm currently pursuing my Bachelor of Computer Applications at CMR University, where I've developed a strong foundation in web development and programming. My journey combines academic excellence with practical experience in data analysis.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              At Renovars Digital Solutions, I've honed my analytical skills by conducting data analysis and preparing insightful reports for clients. This experience has taught me the importance of attention to detail and data-driven decision making.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about creating beautiful, functional web experiences and constantly learning new technologies to stay at the forefront of web development.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-primary-600 dark:text-primary-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Bachelor of Computer Applications</h4>
                  <p className="text-gray-600 dark:text-gray-300">CMR University • Web Development & Programming</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Graduate with Distinction</h4>
                  <p className="text-gray-600 dark:text-gray-300">SREE Veerendhra Patil</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent-50 to-primary-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Briefcase className="text-accent-600 dark:text-accent-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h3>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Data Analyst</h4>
                <p className="text-gray-600 dark:text-gray-300">Renovars Digital Solutions</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Conducted data analysis and prepared insightful reports for clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
