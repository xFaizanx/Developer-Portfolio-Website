import { 
  Code2, Database, Terminal, Globe, TrendingUp, Wrench, Sparkles,
  FileCode2, Palette, Blocks, Box, Wind, Server, Zap,
  FileJson, Code, Coffee, ShoppingBag, Chrome,
  Search, BarChart3, Megaphone, Gauge, GitBranch, FileCode, 
  Figma, Send, PieChart, Workflow, Rocket, Cloud, Settings,
  Network, Lock, HardDrive, ShieldCheck
} from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend',
      icon: Code2,
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML', icon: FileCode2 },
        { name: 'CSS', icon: Palette },
        { name: 'JavaScript', icon: FileJson },
        { name: 'React', icon: Blocks },
        { name: 'Bootstrap', icon: Box },
        { name: 'Tailwind CSS', icon: Wind }
      ]
    },
    {
      id: 2,
      title: 'Backend',
      icon: Database,
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', icon: Server },
        { name: 'Express.js', icon: Zap },
        { name: 'PHP', icon: Code },
        { name: 'MySQL', icon: Database },
        { name: 'MongoDB', icon: Database }
      ]
    },
    {
      id: 3,
      title: 'Programming Languages',
      icon: Terminal,
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'C', icon: Code },
        { name: 'C++', icon: Code },
        { name: 'Java', icon: Coffee },
        { name: 'Python', icon: Workflow }
      ]
    },
    {
      id: 4,
      title: 'CMS Platforms',
      icon: Globe,
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'WordPress', icon: Globe },
        { name: 'Wix', icon: Chrome },
        { name: 'Shopify', icon: ShoppingBag }
      ]
    },
    {
      id: 5,
      title: 'Digital Marketing',
      icon: TrendingUp,
      gradient: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'SEO', icon: Search },
        { name: 'SEM', icon: BarChart3 },
        { name: 'Google Ads', icon: Megaphone },
        { name: 'Facebook Ads', icon: Megaphone },
        { name: 'Speed Optimization', icon: Gauge }
      ]
    },
    {
      id: 6,
      title: 'Tools & Technologies',
      icon: Wrench,
      gradient: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Git', icon: GitBranch },
        { name: 'VS Code', icon: FileCode },
        { name: 'Figma', icon: Figma },
        { name: 'Postman', icon: Send },
        { name: 'Google Analytics', icon: PieChart }
      ]
    },
    {
      id: 7,
      title: 'Deployment & DevOps',
      icon: Rocket,
      gradient: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Hostinger', icon: Server },
        { name: 'DigitalOcean', icon: Cloud },
        { name: 'cPanel', icon: Settings },
        { name: 'DNS Setup', icon: Network },
        { name: 'SSH Access', icon: Lock },
        { name: 'Linux Server Deployment', icon: HardDrive },
        { name: 'GitHub Deployment Workflow', icon: GitBranch },
        { name: 'SSL Configuration', icon: ShieldCheck }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20 dark:border-cyan-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span className="text-sm text-blue-600 dark:text-cyan-400">Technical Expertise</span>
          </div>
          
          <h2 className="text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <Card className="h-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 hover:-translate-y-1 group overflow-hidden">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                  
                  <CardContent className="p-6 relative">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-gray-100 dark:border-gray-800">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills Icon Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="group/skill flex flex-col items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                            style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` }}
                          >
                            {/* Icon Container with Animation */}
                            <div className="relative">
                              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-md group-hover/skill:shadow-xl group-hover/skill:shadow-blue-500/30 dark:group-hover/skill:shadow-cyan-500/30 transition-all duration-500 group-hover/skill:scale-110 group-hover/skill:rotate-12`}>
                                <SkillIcon className="w-6 h-6 text-white group-hover/skill:scale-110 transition-transform duration-300" />
                              </div>
                              
                              {/* Floating glow effect */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-lg blur-md opacity-0 group-hover/skill:opacity-50 transition-opacity duration-500 -z-10`}></div>
                              
                              {/* Pulse ring on hover */}
                              <div className={`absolute inset-0 rounded-lg border-2 border-blue-500 dark:border-cyan-500 opacity-0 group-hover/skill:opacity-100 group-hover/skill:scale-125 transition-all duration-500`}></div>
                            </div>

                            {/* Skill Name */}
                            <span className="text-xs text-center text-gray-700 dark:text-gray-300 group-hover/skill:text-blue-600 dark:group-hover/skill:text-cyan-400 transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Skill Count Badge */}
                    <div className="mt-6 pt-4 border-t-2 border-gray-100 dark:border-gray-800">
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                        <span>{category.skills.length} skills</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Proficient
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Summary */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-8 py-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-cyan-800/30">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
            <p className="text-gray-700 dark:text-gray-300">
              <span className="text-blue-600 dark:text-cyan-400">38+</span> technologies mastered across{' '}
              <span className="text-blue-600 dark:text-cyan-400">7</span> core disciplines
            </p>
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          {[
            { label: 'Frontend Expert', value: '6 Technologies', gradient: 'from-blue-500 to-cyan-500' },
            { label: 'Backend Pro', value: '5 Technologies', gradient: 'from-purple-500 to-pink-500' },
            { label: 'DevOps Ready', value: '8 Skills', gradient: 'from-indigo-500 to-purple-500' },
            { label: 'Marketing Savvy', value: '5 Tools', gradient: 'from-pink-500 to-rose-500' }
          ].map((highlight, index) => (
            <div
              key={highlight.label}
              className="group p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center"
            >
              <div className={`text-2xl bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                {highlight.value}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {highlight.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
