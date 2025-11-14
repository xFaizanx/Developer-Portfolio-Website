import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { motion, AnimatePresence } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Anderson',
      role: 'CEO',
      company: 'TechStart Solutions',
      image: 'https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MzAxNDc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      feedback: 'Faizan delivered exceptional work on our WordPress site. His attention to detail and SEO expertise helped us rank on the first page within months. Highly recommended!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Project Manager',
      company: 'Admin To Us',
      image: 'https://images.unsplash.com/photo-1568585105565-e372998a195d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjMwOTgwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      feedback: 'Working with Faizan was a pleasure. He understood our requirements perfectly and delivered a fast, responsive website that exceeded our expectations. Great communication throughout!'
    },
    {
      id: 3,
      name: 'David Martinez',
      role: 'Founder',
      company: 'KFthreads',
      image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzA0NTUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      feedback: 'Faizan built our entire eCommerce platform from scratch. The site is beautiful, user-friendly, and has helped us grow our online sales significantly. Couldn\'t ask for better results!'
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Operations Director',
      company: 'Classic Mart',
      image: 'https://images.unsplash.com/photo-1618591552964-837a5a315fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWwlMjBtYWxlfGVufDF8fHx8MTc2MzExNTk3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      feedback: 'Professional, reliable, and highly skilled. Faizan transformed our vision into reality with his technical expertise. His SEO optimization brought us tangible results quickly.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 md:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 border border-purple-500/20 dark:border-purple-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm text-purple-600 dark:text-purple-400">Client Feedback</span>
          </div>
          
          <h2 className="text-gray-900 dark:text-white px-4">
            Testimonials
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            What clients and collaborators say about working with me.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto px-2 sm:px-0">
          {/* Main Carousel Container */}
          <div className="relative min-h-[550px] sm:min-h-[500px] md:min-h-[400px] flex items-center justify-center px-8 sm:px-12 md:px-0">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                className="absolute w-full"
              >
                <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
                  
                  <CardContent className="p-6 sm:p-8 md:p-12 relative">
                    {/* Quote Icon Background */}
                    <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-5 dark:opacity-10">
                      <Quote className="w-20 h-20 sm:w-32 sm:h-32 text-purple-500" />
                    </div>

                    <div className="relative z-10 space-y-4 sm:space-y-6">
                      {/* Profile Section */}
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6">
                        {/* Avatar */}
                        <Avatar className="w-20 h-20 sm:w-24 sm:h-24 ring-4 ring-purple-500/20 dark:ring-purple-400/20 shadow-xl shrink-0">
                          <AvatarImage 
                            src={testimonials[currentIndex].image} 
                            alt={testimonials[currentIndex].name}
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white text-xl sm:text-2xl">
                            {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>

                        {/* Name and Role */}
                        <div className="flex-1 text-center md:text-left space-y-1.5 sm:space-y-2">
                          <h3 className="text-gray-900 dark:text-white">
                            {testimonials[currentIndex].name}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                            {testimonials[currentIndex].role}
                          </p>
                          <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400">
                            {testimonials[currentIndex].company}
                          </p>

                          {/* Star Rating */}
                          <div className="flex gap-1 justify-center md:justify-start pt-1">
                            {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Quote Mark */}
                      <div className="flex justify-center md:justify-start">
                        <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500 dark:text-purple-400" />
                      </div>

                      {/* Feedback Text */}
                      <blockquote className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic text-center md:text-left">
                        "{testimonials[currentIndex].feedback}"
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none -mx-2 sm:-mx-4 md:-mx-16">
            <Button
              onClick={handlePrev}
              size="icon"
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:border-purple-500 hover:text-white dark:hover:bg-purple-500 dark:hover:border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <Button
              onClick={handleNext}
              size="icon"
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-purple-500 hover:border-purple-500 hover:text-white dark:hover:bg-purple-500 dark:hover:border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-10 sm:w-12 h-2.5 sm:h-3 bg-gradient-to-r from-purple-500 to-blue-500'
                    : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 dark:bg-gray-600 hover:bg-purple-400 dark:hover:bg-purple-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          {isAutoPlaying && (
            <div className="flex justify-center mt-3 sm:mt-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Auto-playing</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in-up px-4" style={{ animationDelay: '300ms' }}>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
            Want to share your experience working with me?
          </p>
          <Button
            variant="outline"
            className="border-2 border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white transition-all duration-300 px-6"
          >
            Leave a Testimonial
          </Button>
        </div>
      </div>
    </section>
  );
}
