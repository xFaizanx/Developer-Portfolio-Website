import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');

    // Update document title
    document.title = 'Codeli - Modern Developer Portfolio';
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <AboutMe />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Certifications Section */}
      <Certifications />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* AI Assistant */}
      <AIAssistant />

      {/* Toast Notifications */}
      <Toaster 
        position="bottom-right"
        theme={theme}
        richColors
        closeButton
      />
    </div>
  );
}
