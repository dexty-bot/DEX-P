import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
import SplitText from "./SplitText";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-up">
          <SplitText
            text="Hi, I'm Dex"
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Frontend Developer & Data Analyst passionate about creating beautiful, functional web experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 px-8 py-3 rounded-full hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-all transform hover:scale-105 flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
        
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-900 rounded-full animate-float opacity-60 dark:opacity-30"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent-200 dark:bg-accent-900 rounded-full animate-float opacity-60 dark:opacity-30" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300 dark:bg-primary-800 rounded-full animate-float opacity-60 dark:opacity-30" style={{animationDelay: '4s'}}></div>
    </section>
  );
}

export default Hero;
