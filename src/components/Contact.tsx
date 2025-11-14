import { useState } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { 
  Mail, Globe, MapPin, Send, Linkedin, Github, 
  Briefcase, CheckCircle2, Sparkles
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';

// EmailJS Configuration
// Get these values from your EmailJS dashboard: https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_dwug2ny'; // Replace with your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'template_ynooxzf'; // Replace with your EmailJS Template ID
const EMAILJS_PUBLIC_KEY = 'hH00nHxuIfvDlqnrl'; // Replace with your EmailJS Public Key

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mrfaizan726@gmail.com',
      link: 'mailto:mrfaizan726@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'codeli.tech',
      link: 'https://codeli.tech',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available Worldwide',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/faizanali',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/faizanali',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      icon: Briefcase,
      label: 'Fiverr',
      link: 'https://fiverr.com/faizanali',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Briefcase,
      label: 'Upwork',
      link: 'https://upwork.com/freelancers/faizanali',
      gradient: 'from-emerald-600 to-teal-600'
    }
  ];

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      // Template parameters that will be passed to your EmailJS template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'mrfaizan726@gmail.com',
        message: formData.message,
        reply_to: formData.email
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          duration: 5000,
          icon: <CheckCircle2 className="w-5 h-5" />
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setErrors({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again or email me directly at mrfaizan726@gmail.com', {
        duration: 6000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20 dark:border-cyan-500/30 backdrop-blur-sm">
            <Send className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span className="text-sm text-blue-600 dark:text-cyan-400">Get In Touch</span>
          </div>
          
          <h2 className="text-gray-900 dark:text-white">
            Let's Connect
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="group bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 overflow-hidden">
                      <CardContent className="p-4 relative">
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                        
                        <div className="flex items-center gap-4 relative">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                              {info.label}
                            </p>
                            {info.link ? (
                              <a
                                href={info.link}
                                target={info.link.startsWith('http') ? '_blank' : undefined}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-gray-900 dark:text-white">
                                {info.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-gray-900 dark:text-white mb-4">
                Connect on Social
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      className="group p-4 rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-3"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-emerald-800/30"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="text-green-600 dark:text-green-400">Available</span> for freelance projects
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
              {/* Gradient Header */}
              <div className="h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"></div>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-900 dark:text-white">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`bg-gray-50 dark:bg-gray-800 border-2 ${
                        errors.name 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-200 dark:border-gray-700'
                      } focus:border-blue-500 dark:focus:border-cyan-500 transition-colors duration-300`}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900 dark:text-white">
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`bg-gray-50 dark:bg-gray-800 border-2 ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-200 dark:border-gray-700'
                      } focus:border-blue-500 dark:focus:border-cyan-500 transition-colors duration-300`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-900 dark:text-white">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className={`bg-gray-50 dark:bg-gray-800 border-2 ${
                        errors.message 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-200 dark:border-gray-700'
                      } focus:border-blue-500 dark:focus:border-cyan-500 transition-colors duration-300 resize-none`}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-cyan-500/50 transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          Send Message
                        </>
                      )}
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-8 py-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-cyan-800/30">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
            <p className="text-gray-700 dark:text-gray-300">
              Looking for a{' '}
              <span className="text-blue-600 dark:text-cyan-400">reliable developer</span>?
              Let's build something{' '}
              <span className="text-blue-600 dark:text-cyan-400">amazing</span> together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
