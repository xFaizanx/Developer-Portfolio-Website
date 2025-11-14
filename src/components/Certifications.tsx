import { Award, ExternalLink, CheckCircle2, Sparkles, GraduationCap, TrendingUp, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Certifications() {
  const certifications = [
    {
      id: 1,
      title: 'Google IT Support Specialization',
      issuer: 'Google / Coursera',
      description: 'Comprehensive IT support and system administration program covering networking, security, and technical troubleshooting.',
      skills: ['Technical Support', 'Networking', 'System Administration', 'Security Fundamentals'],
      status: 'Completed',
      icon: GraduationCap,
      link: null,
      gradient: 'from-blue-500 to-cyan-500',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Digital Marketing & SEO',
      issuer: 'NAVTTC Certified',
      description: 'Professional certification in digital marketing strategies, search engine optimization, and online advertising campaigns.',
      skills: ['SEO', 'SEM', 'Google Ads', 'Facebook Ads', 'Web Analytics'],
      institute: 'ADAN IT Center',
      status: 'Certified',
      icon: TrendingUp,
      link: null,
      gradient: 'from-purple-500 to-pink-500',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Web Development & SEO Optimization',
      issuer: 'ADMIN To Us',
      description: 'Specialized training in full-stack WordPress development with focus on performance optimization and search engine visibility.',
      skills: ['Full-Stack WordPress', 'Performance Optimization', 'SEO'],
      status: 'Client Training Project',
      icon: Search,
      link: null,
      gradient: 'from-cyan-500 to-blue-500',
      color: 'cyan'
    }
  ];

  return (
    <section id="certifications" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20 dark:border-cyan-500/30 backdrop-blur-sm">
            <Award className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span className="text-sm text-blue-600 dark:text-cyan-400">Learning Journey</span>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-gray-900 dark:text-white relative inline-block">
              Certifications & Courses
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full"></span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Recognitions and courses that enhanced my technical expertise.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.id}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 hover:-translate-y-2 relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                  
                  <CardHeader className="relative space-y-4 pb-4">
                    {/* Icon Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Status Badge */}
                      <Badge 
                        variant="secondary" 
                        className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
                      >
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        {cert.status}
                      </Badge>
                    </div>

                    {/* Title & Issuer */}
                    <div className="space-y-2">
                      <CardTitle className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                        <Award className="w-4 h-4 flex-shrink-0" />
                        {cert.issuer}
                      </CardDescription>
                      {cert.institute && (
                        <CardDescription className="text-xs text-gray-500 dark:text-gray-500">
                          {cert.institute}
                        </CardDescription>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="relative space-y-5">
                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Key Skills */}
                    <div className="space-y-2.5">
                      <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                        Key Skills
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-cyan-400 transition-colors duration-300 border border-gray-200 dark:border-gray-700"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* View Certificate Button */}
                    {cert.link ? (
                      <Button
                        asChild
                        className={`w-full group/btn bg-gradient-to-r ${cert.gradient} hover:opacity-90 text-white shadow-md hover:shadow-lg transition-all duration-300 mt-4`}
                      >
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          View Certificate
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    ) : (
                      <div className="pt-4">
                        <div className="w-full py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-900 text-center text-sm text-gray-500 dark:text-gray-500 border border-gray-200 dark:border-gray-700">
                          Certificate Available Upon Request
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <div className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-cyan-800/30">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
            <p className="text-gray-700 dark:text-gray-300">
              Continuously learning and expanding my skill set with new technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
