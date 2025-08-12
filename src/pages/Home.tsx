import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Target, Eye, Award,Lightbulb,Users, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollAnimation from '../components/UI/ScrollAnimation';
import image1 from '../assets/photo1.jpg';
import image2 from '../assets/photo5.jpg';
import image3 from '../assets/photo4.jpg';
import image4 from '../assets/photo7.jpg';


 const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We foster creative thinking and cutting-edge solutions to address real-world challenges.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships to achieve greater impact.',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We are committed to developing environmentally responsible and sustainable technologies.',
    },
  ];

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);


  const heroImages: string[] = [
    image1,
    image2,
    image3,
    image4,
  ];


  const goals = [
    'Foster innovation and entrepreneurship in technology',
    'Create sustainable solutions for societal challenges',
    'Bridge the gap between academia and industry',
    'Develop cutting-edge research in IoT, AI, and GIS',
    'Build partnerships with government and private sector',
    'Train the next generation of tech leaders',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-[#000068]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-orange-600 font-medium">
              {t('heroSubtitle')}
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#FFA500]/90 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>{t('learnMore')}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            
              

               <Link
                to="/events"
                className="bg-[#393938] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#FFA500]/90 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>{t('joinCommunity')}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-orange-600 w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

  
  {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#000068] mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our work and define our commitment to excellence.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={index} delay={0.2 * (index + 1)}>
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#000068] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
  
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lets Build the Future Together
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're looking to collaborate, sponsor, or simply learn more about our work we'd love to connect with you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600/90 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>{t('joinCommunity')}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/events"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 border border-white/20"
              >
                View Projects
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      
    </div>
  );
};

export default Home;