import { ArrowDown, Download, Code2, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { CodeRain } from './CodeRain';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Placeholder for resume download
    alert('Resume download will be implemented with your actual PDF link');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800"
    >
      {/* Code Rain Animation Background */}
      <CodeRain />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 dark:bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Geometric Grid Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgb(59, 130, 246) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(59, 130, 246) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Abstract Illustration Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-30">
        <div className="relative w-full h-full max-w-4xl">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-500/30 dark:to-cyan-500/30 backdrop-blur-sm border border-blue-500/30 dark:border-cyan-500/40 flex items-center justify-center animate-pulse-slow">
            <Code2 className="w-20 h-20 text-blue-600 dark:text-cyan-400" />
          </div>

          {/* Orbiting Elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50 flex items-center justify-center text-white text-xl">
              &lt;/&gt;
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-spin-slow animation-delay-1000">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50 flex items-center justify-center text-white text-xl">
              {'{'}
              {'}'}
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-spin-slow animation-delay-2000">
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/50 flex items-center justify-center text-white text-xl">
              [ ]
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-spin-slow animation-delay-3000">
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50 flex items-center justify-center text-white text-xl">
              ( )
            </div>
          </div>

          {/* Decorative Concentric Circles */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
            <svg className="w-[600px] h-[600px]" viewBox="0 0 600 600">
              <defs>
                <linearGradient id="hero-grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="text-blue-500 dark:text-blue-400" stopColor="currentColor" />
                  <stop offset="100%" className="text-cyan-500 dark:text-cyan-400" stopColor="currentColor" />
                </linearGradient>
              </defs>
              <circle cx="300" cy="300" r="220" stroke="url(#hero-grid-gradient)" strokeWidth="2" fill="none" strokeDasharray="10 5" className="animate-spin-very-slow" />
              <circle cx="300" cy="300" r="150" stroke="url(#hero-grid-gradient)" strokeWidth="2" fill="none" strokeDasharray="8 4" className="animate-spin-very-slow-reverse" />
              <circle cx="300" cy="300" r="80" stroke="url(#hero-grid-gradient)" strokeWidth="2" fill="none" strokeDasharray="5 3" className="animate-spin-very-slow" />
            </svg>
          </div>

          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 dark:bg-cyan-400 rounded-full animate-float-particle"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-500 dark:bg-blue-400 rounded-full animate-float-particle animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-500 dark:bg-purple-400 rounded-full animate-float-particle animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 dark:bg-cyan-300 rounded-full animate-float-particle animation-delay-3000"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-10">
          
          {/* Status Badge */}
          <div className="flex justify-center animate-fade-in-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20 dark:border-cyan-500/30 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-cyan-500"></span>
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Available for Freelance & Full-time Opportunities
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white tracking-tight">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    Faizan Ali
                  </span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-500/20 dark:bg-cyan-500/20 -skew-y-1 animate-slide-in"></span>
                </span>
                <span className="inline-block ml-2 animate-wave origin-[70%_70%]">👋</span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                Transforming ideas into{' '}
                <span className="text-gray-900 dark:text-white relative inline-block">
                  interactive digital experiences
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5C50 2 100 2 199 5" stroke="url(#gradient1)" strokeWidth="3" strokeLinecap="round" className="animate-draw-line"/>
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" className="text-blue-500 dark:text-cyan-400" stopColor="currentColor" />
                        <stop offset="100%" className="text-cyan-500 dark:text-blue-400" stopColor="currentColor" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                {' '}with{' '}
                <span className="text-blue-600 dark:text-cyan-400">MERN Stack</span>
                {' '}and{' '}
                <span className="text-blue-600 dark:text-cyan-400">AI chatbot solutions</span>.
              </h2>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up animation-delay-400">
            {['MongoDB', 'Express.js', 'React', 'Node.js', 'AI/ML'].map((tech, index) => (
              <div
                key={tech}
                className="group relative px-5 py-2.5 bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-full transition-all duration-300 hover:border-blue-500 dark:hover:border-cyan-500 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 hover:-translate-y-1 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="group relative px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 border-0 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadResume}
              className="group px-8 py-6 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-500 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 animate-fade-in-up animation-delay-800">
            {[
              { icon: Code2, number: '3+', label: 'Years Experience', color: 'blue' },
              { icon: Sparkles, number: '50+', label: 'Projects Completed', color: 'cyan' },
              { icon: Code2, number: '100%', label: 'Client Satisfaction', color: 'purple' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-900 dark:to-gray-800/50 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 hover:-translate-y-2 cursor-default"
                  style={{ animationDelay: `${800 + index * 150}ms` }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${
                      stat.color === 'blue' ? 'from-blue-500/10 to-cyan-500/10' :
                      stat.color === 'cyan' ? 'from-cyan-500/10 to-purple-500/10' :
                      'from-purple-500/10 to-blue-500/10'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${
                        stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                        stat.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                        'text-purple-600 dark:text-purple-400'
                      }`} />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl text-gray-900 dark:text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => scrollToSection('#about')}>
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
