import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { 
  Briefcase, TrendingUp, Zap, ShoppingBag, Sparkles, 
  ExternalLink, Globe, Code2, Bot, ArrowRight
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'ADMIN To Us',
      role: 'Web Developer & SEO Optimizer',
      type: 'Client Project',
      category: 'WordPress Development',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Developed a dynamic website with booking and service management features.',
      achievements: [
        'Improved SEO performance and optimized page speed',
        'Implemented booking system with service management'
      ],
      website: 'admintous.com',
      websiteUrl: 'https://admintous.com'
    },
    {
      id: 2,
      title: 'Fiverr & Upwork',
      role: 'Freelance Web Developer & SEO Expert',
      type: 'Freelance Platforms',
      category: 'Multiple Projects',
      icon: Briefcase,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Delivered multiple client projects in web development and SEO.',
      achievements: [
        'Specialized in responsive WordPress, Shopify, and custom MERN stack sites',
        'Focused on delivering high-quality, optimized, and secure websites'
      ]
    },
    {
      id: 3,
      title: 'RFQ Processor',
      role: 'AI-powered Automation Tool',
      type: 'Personal Project',
      category: 'Python & AI',
      icon: Bot,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Built a system to extract and analyze RFQ data from Outlook and PDF files using OpenAI GPT, Tesseract OCR, and PyPDF2.',
      achievements: [
        'Automated complex manual workflows',
        'Improved data accuracy and processing speed'
      ]
    },
    {
      id: 4,
      title: 'Classic Mart',
      role: 'WordPress eCommerce Store',
      type: 'Entrepreneurial Project',
      category: 'eCommerce',
      icon: ShoppingBag,
      gradient: 'from-orange-500 to-red-500',
      description: 'Created and managed a complete eCommerce platform with shopping cart to checkout.',
      achievements: [
        'Implemented SEO, payment integration, and custom theme modifications',
        'Full product catalog and inventory management'
      ]
    },
    {
      id: 5,
      title: 'KFthreads',
      role: 'Online Clothing Brand',
      type: 'Personal Startup',
      category: 'eCommerce Platform',
      icon: TrendingUp,
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Developed modern eCommerce platform kfthreads.me for apparel sales.',
      achievements: [
        'Integrated inventory management and product filters',
        'SEO optimization for maximum visibility'
      ],
      website: 'kfthreads.me',
      websiteUrl: 'https://kfthreads.me'
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center space-y-6 mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20 dark:border-cyan-500/30 backdrop-blur-sm shadow-lg shadow-blue-500/5 dark:shadow-cyan-500/10"
          >
            <Briefcase className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span className="text-sm text-blue-600 dark:text-cyan-400 tracking-wide">Professional Journey</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-gray-900 dark:text-white relative inline-block">
              Experience
              {/* Animated Underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent dark:via-cyan-400 origin-center"
              ></motion.div>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            My professional journey and the projects I've contributed to.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Enhanced Timeline Line with Scroll Progress */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 origin-top transform -translate-x-1/2"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-blue-500 to-blue-200 dark:from-cyan-900 dark:via-cyan-500 dark:to-cyan-900 rounded-full shadow-lg shadow-blue-500/20 dark:shadow-cyan-500/30"></div>
            {/* Animated gradient overlay */}
            <motion.div
              animate={{
                y: ['-100%', '100%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 dark:via-cyan-300/30 to-transparent"
            ></motion.div>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className={`relative ${
                    isEven ? 'md:pr-1/2' : 'md:pl-1/2'
                  }`}
                >
                  {/* Enhanced Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="hidden md:block absolute left-1/2 top-12 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <div className={`relative w-8 h-8 rounded-full bg-gradient-to-br ${exp.gradient} shadow-2xl shadow-blue-500/40 dark:shadow-cyan-500/40 ring-4 ring-white dark:ring-gray-900`}>
                      {/* Pulsing rings */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.gradient} opacity-50`}
                      ></motion.div>
                      <motion.div
                        animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.gradient} opacity-30`}
                      ></motion.div>
                    </div>
                  </motion.div>

                  {/* Card Container */}
                  <div className={`md:w-[calc(50%-3rem)] ${isEven ? 'md:ml-0' : 'md:ml-auto'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="group bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-cyan-500/30 overflow-hidden relative">
                        {/* Enhanced gradient border effect on hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className={`absolute inset-0 p-[2px] rounded-xl bg-gradient-to-br ${exp.gradient} -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        >
                          <div className="w-full h-full bg-white dark:bg-gray-950 rounded-xl"></div>
                        </motion.div>

                        {/* Animated Top Gradient Bar */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
                          className={`h-1.5 bg-gradient-to-r ${exp.gradient} origin-left`}
                        ></motion.div>

                        <CardContent className="p-8 relative">
                          {/* Enhanced Glow Effect */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.08 }}
                            transition={{ duration: 0.4 }}
                            className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} pointer-events-none`}
                          ></motion.div>

                          {/* Decorative Corner Accent */}
                          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.gradient} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-500`}></div>

                          {/* Header */}
                          <div className="flex items-start gap-5 mb-6 relative z-10">
                            {/* Enhanced Icon */}
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6, type: "spring" }}
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-xl shadow-blue-500/30 dark:shadow-cyan-500/30 flex-shrink-0 relative overflow-hidden`}
                            >
                              {/* Icon shimmer effect */}
                              <motion.div
                                animate={{
                                  x: ['-100%', '200%']
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatDelay: 3
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                              ></motion.div>
                              <Icon className="w-8 h-8 text-white relative z-10" />
                            </motion.div>

                            {/* Title & Role */}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                                {exp.title}
                              </h3>
                              <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                                {exp.role}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0 px-3 py-1">
                                  {exp.type}
                                </Badge>
                                <Badge 
                                  variant="secondary" 
                                  className={`text-xs bg-gradient-to-r ${exp.gradient} text-white border-0 px-3 py-1 shadow-md`}
                                >
                                  {exp.category}
                                </Badge>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Achievements with staggered animation */}
                          <div className="space-y-3 mb-6">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + idx * 0.1 }}
                                className="flex items-start gap-3 group/item"
                              >
                                <motion.div
                                  whileHover={{ scale: 1.3, rotate: 180 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Zap className="w-4 h-4 text-blue-500 dark:text-cyan-400 flex-shrink-0 mt-1" />
                                </motion.div>
                                <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {achievement}
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Enhanced Website Link */}
                          {exp.website && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                              href={exp.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-cyan-800/30 text-blue-600 dark:text-cyan-400 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-cyan-500/30 transition-all duration-300 group/link font-medium"
                            >
                              <Globe className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                              <span className="text-sm">{exp.website}</span>
                              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                            </motion.a>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-flex flex-wrap items-center justify-center gap-3 px-10 py-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-cyan-800/30 shadow-xl shadow-blue-500/10 dark:shadow-cyan-500/20 relative overflow-hidden"
          >
            {/* Animated background shimmer */}
            <motion.div
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/30 dark:via-cyan-400/10 to-transparent skew-x-12"
            ></motion.div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
            </motion.div>
            <p className="text-gray-700 dark:text-gray-300 relative z-10">
              <span className="text-blue-600 dark:text-cyan-400">5+</span> major projects completed across{' '}
              <span className="text-blue-600 dark:text-cyan-400">web development</span>, 
              <span className="text-blue-600 dark:text-cyan-400"> SEO</span>, and{' '}
              <span className="text-blue-600 dark:text-cyan-400">eCommerce</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: 'Client Projects', value: '20+', gradient: 'from-blue-500 to-cyan-500', icon: '🚀' },
            { label: 'Years Experience', value: '3+', gradient: 'from-green-500 to-emerald-500', icon: '⏱️' },
            { label: 'Technologies', value: '30+', gradient: 'from-purple-500 to-pink-500', icon: '⚡' },
            { label: 'Success Rate', value: '100%', gradient: 'from-orange-500 to-red-500', icon: '🎯' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <Card className="group p-8 bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-2xl text-center relative overflow-hidden">
                {/* Gradient border on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 p-[2px] rounded-xl bg-gradient-to-br ${stat.gradient} -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                >
                  <div className="w-full h-full bg-white dark:bg-gray-950 rounded-xl"></div>
                </motion.div>

                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Icon */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="text-3xl mb-3"
                >
                  {stat.icon}
                </motion.div>

                {/* Value */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`text-4xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 relative`}
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
