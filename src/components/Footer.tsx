import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { CodeliLogo } from './CodeliLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 dark:bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          {/* Brand Section - Takes 5 columns */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="group">
                <CodeliLogo variant="horizontal" size="medium" className="mb-3" />
                <span className="text-sm text-blue-600 dark:text-cyan-400 block ml-16">
                  Web Developer & SEO Expert
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Building exceptional digital experiences with modern web technologies. Specialized in full-stack development, SEO optimization, and creating scalable solutions.
              </p>
            </div>

            {/* Newsletter or CTA */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-cyan-800/30">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Available for freelance projects
              </span>
            </div>
          </div>

          {/* Quick Links - Takes 3 columns */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="text-gray-900 dark:text-white relative inline-block pb-2">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-cyan-400 dark:to-blue-400"></div>
            </h3>
            <ul className="space-y-3">
              {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 dark:bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links - Takes 4 columns */}
          <div className="md:col-span-4 space-y-5">
            <h3 className="text-gray-900 dark:text-white relative inline-block pb-2">
              Let's Connect
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-cyan-400 dark:to-blue-400"></div>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Follow me on social media for updates and insights
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 hover:from-blue-500 hover:to-cyan-500 dark:hover:from-blue-500 dark:hover:to-cyan-500 hover:text-white dark:hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-cyan-500/30 border border-gray-200 dark:border-gray-700 hover:border-transparent"
                  >
                    <Icon className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>

            {/* Email CTA */}
            <div className="pt-2">
              <a
                href="mailto:mrfaizan726@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-md hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-cyan-500/30 transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">mrfaizan726@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="relative mt-12 mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent dark:via-cyan-400 rounded-full"></div>
          </div>
        </div>

        {/* Copyright & Additional Info */}
        <div className="text-center space-y-4 relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <span>© {currentYear} Codeli</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved</span>
            <span className="hidden sm:inline">•</span>
            <a 
              href="#hero" 
              className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300"
            >
              Back to Top ↑
            </a>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Crafted with 💙 using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
