import { ExternalLink, Github, Sparkles, Code2, ShoppingCart, Shirt, Briefcase, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'RFQ Processor',
      subtitle: 'AI-Powered Automation',
      description: 'A system that extracts and analyzes RFQ data from Outlook .msg and PDF files using GPT, OCR, and PyPDF2.',
      image: 'https://images.unsplash.com/photo-1760952851538-17a59f691efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGF1dG9tYXRpb24lMjBjb2RlfGVufDF8fHx8MTc2MzAwNDU0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Python', 'OpenAI API', 'Tesseract OCR', 'PyPDF2', 'Flask'],
      type: 'Automation / AI',
      link: null,
      linkText: 'Private Project',
      icon: Code2,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Classic Mart',
      subtitle: 'E-commerce Website',
      description: 'WordPress-based online store with cart-to-checkout system, SEO optimization, and product management.',
      image: 'https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjMwMjU2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['WordPress', 'PHP', 'WooCommerce', 'Elementor'],
      type: 'E-commerce',
      link: '#',
      linkText: 'View Live',
      icon: ShoppingCart,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'KFthreads',
      subtitle: 'Online Clothing Brand',
      description: 'Custom eCommerce store for fashion products with product filters, inventory system, and mobile-friendly UI.',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGZhc2hpb258ZW58MXx8fHwxNzYyOTk2Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['WordPress', 'PHP', 'SEO', 'WooCommerce'],
      type: 'E-commerce',
      link: 'https://kfthreads.me',
      linkText: 'View Live',
      icon: Shirt,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 4,
      title: 'Admin To Us',
      subtitle: 'Client Project',
      description: 'Corporate WordPress site with service booking, responsive layout, and speed optimization.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjMwMjgwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['WordPress', 'SEO', 'PHP'],
      type: 'Corporate',
      link: 'https://admintous.com',
      linkText: 'View Live',
      icon: Briefcase,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Personal Blogging Website',
      subtitle: 'In Progress',
      description: 'A personal blog and portfolio hub to showcase articles, projects, and resume.',
      image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3NjMwNTYyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js'],
      type: 'Blog / Portfolio',
      link: null,
      linkText: 'Coming Soon',
      icon: FileText,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gray-100 dark:bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20 dark:border-cyan-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span className="text-sm text-blue-600 dark:text-cyan-400">My Work</span>
          </div>
          
          <h2 className="text-gray-900 dark:text-white">
            Projects
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my favorite and most impactful work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-cyan-500/20 hover:-translate-y-2">
                  
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-gray-200 dark:bg-gray-800">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay with Icon */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Project Type Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg`}>
                        {project.type}
                      </Badge>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-xl opacity-90 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Title */}
                    <div className="space-y-1">
                      <h3 className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-cyan-400 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      {project.link ? (
                        <Button
                          asChild
                          className={`w-full group/btn bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white shadow-md hover:shadow-lg transition-all duration-300`}
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            {project.linkText}
                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                          </a>
                        </Button>
                      ) : (
                        <Button
                          disabled
                          className="w-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-500 cursor-not-allowed"
                        >
                          {project.linkText}
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <Button
            asChild
            variant="outline"
            className="group border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-500 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-gray-900 transition-all duration-300 px-8"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              Visit My GitHub
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
