import { Code2, Layers, Rocket, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function AboutMe() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    {
      icon: Code2,
      emoji: '💻',
      title: 'Modern Web Technologies',
      description: 'Strong expertise in modern web technologies (MERN stack, PHP, and WordPress)'
    },
    {
      icon: Layers,
      emoji: '⚙️',
      title: 'Full-Stack Development',
      description: 'Experience in both front-end and back-end development'
    },
    {
      icon: Rocket,
      emoji: '🚀',
      title: 'Performance & SEO',
      description: 'Focus on performance, SEO, and modern design principles'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-400/5 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-10 animate-fade-in-left">
            {/* Section Header */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20 dark:border-cyan-500/30 backdrop-blur-sm">
                <Code2 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span className="text-sm text-blue-600 dark:text-cyan-400">Who I Am</span>
              </div>
              <div className="space-y-5">

                <p className="text-xl max-w-xl leading-relaxed">
                  <span className="bg-gradient-to-r from-gray-600 via-blue-600 to-cyan-600 dark:from-gray-400 dark:via-blue-400 dark:to-cyan-400 bg-[length:200%_100%] bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite] inline-block">
                    Full-Stack Developer | MERN Stack & AI Solutions
                  </span>
                </p>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-5">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm <span className="text-blue-600 dark:text-cyan-400">Faizan Ali</span>, a Full-Stack Developer specializing in the MERN ecosystem. I transform complex challenges into elegant solutions that drive results.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I build scalable web applications with a focus on clean code, modern design, and performance optimization. My expertise spans responsive websites, SEO solutions, and AI chatbot integrations.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '3+', label: 'Years Exp.' },
                { number: '50+', label: 'Projects' },
                { number: '100%', label: 'Satisfaction' }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="relative group p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center space-y-1">
                    <div className="text-2xl text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={highlight.title}
                    className="group relative overflow-hidden flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 cursor-default"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 dark:from-blue-500/0 dark:via-cyan-500/10 dark:to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-500/10 dark:from-blue-500/20 dark:via-cyan-500/20 dark:to-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-blue-500/20 dark:border-cyan-500/30">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                    </div>
                    <div className="relative flex-1 space-y-1">
                      <h3 className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                    <ArrowRight className="relative w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                onClick={() => scrollToSection('#skills')}
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 px-6"
              >
                Explore My Skills
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('#projects')}
                className="group border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-500 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 px-6"
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Right Column - Illustration/Graphic */}
          <div className="relative animate-fade-in-right">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-3xl blur-3xl"></div>
            
            {/* Developer Illustration - Abstract Code Blocks */}
            <div className="relative w-full aspect-square max-w-lg mx-auto p-8 rounded-3xl bg-gradient-to-br from-white/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              {/* Floating Code Blocks */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Center Circle */}
                <div className="absolute w-52 h-52 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 dark:from-blue-500/40 dark:to-cyan-500/40 backdrop-blur-sm border-2 border-blue-500/40 dark:border-cyan-500/50 flex items-center justify-center animate-pulse-slow shadow-2xl shadow-blue-500/20 dark:shadow-cyan-500/20">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 flex items-center justify-center">
                    <Code2 className="w-24 h-24 text-blue-600 dark:text-cyan-400" />
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute w-full h-full animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-2xl shadow-blue-500/50 flex items-center justify-center text-white border border-white/20">
                    <span className="text-xl">&lt;/&gt;</span>
                  </div>
                </div>

                <div className="absolute w-full h-full animate-spin-slow animation-delay-1000">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-2xl shadow-cyan-500/50 flex items-center justify-center text-white border border-white/20">
                    <span className="text-xl">
                      {'{'}
                      {'}'}
                    </span>
                  </div>
                </div>

                <div className="absolute w-full h-full animate-spin-slow animation-delay-2000">
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-2xl shadow-purple-500/50 flex items-center justify-center text-white border border-white/20">
                    <span className="text-xl">[ ]</span>
                  </div>
                </div>

                <div className="absolute w-full h-full animate-spin-slow animation-delay-3000">
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/50 flex items-center justify-center text-white border border-white/20">
                    <span className="text-xl">( )</span>
                  </div>
                </div>
              </div>

              {/* Decorative Grid Lines */}
              <div className="absolute inset-0 opacity-20 dark:opacity-30">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" className="text-blue-500" stopColor="currentColor" />
                      <stop offset="100%" className="text-cyan-500" stopColor="currentColor" />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="200" r="160" stroke="url(#grid-gradient)" strokeWidth="2" fill="none" strokeDasharray="10 5" className="animate-spin-very-slow" />
                  <circle cx="200" cy="200" r="110" stroke="url(#grid-gradient)" strokeWidth="2" fill="none" strokeDasharray="8 4" className="animate-spin-very-slow-reverse" />
                  <circle cx="200" cy="200" r="60" stroke="url(#grid-gradient)" strokeWidth="2" fill="none" strokeDasharray="5 3" className="animate-spin-very-slow" />
                </svg>
              </div>

              {/* Floating Particles */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 dark:bg-cyan-400 rounded-full animate-float-particle shadow-lg shadow-blue-500/50"></div>
              <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-500 dark:bg-blue-400 rounded-full animate-float-particle animation-delay-1000 shadow-lg shadow-cyan-500/50"></div>
              <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-500 dark:bg-purple-400 rounded-full animate-float-particle animation-delay-2000 shadow-lg shadow-purple-500/50"></div>
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 dark:bg-cyan-300 rounded-full animate-float-particle animation-delay-3000 shadow-lg shadow-blue-400/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
