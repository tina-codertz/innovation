import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollAnimation from '../components/UI/ScrollAnimation';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('http://127.0.0.1:8000/api/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was a problem submitting the form. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: [
        'Innovation Hub',
        'Department of Computer Systems & Mathematics',
        'Ardhi University',
        'P.O. Box 35176, Observation Hill,Plot No.3,Block L,',
        'University Road.'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      content: ['(+255)-738 357 310', '+255 754 123 456']
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['innovation@aru.ac.tz', 'info@aru.ac.tz']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: ['Monday - Friday: 8:00 AM - 5:00 PM', ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('contactTitle')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('contactSubtitle')}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation>
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Send us a Message
                </h2>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">
                      Thank you! Your message has been sent successfully.
                    </span>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors"
                      placeholder="Subject of your message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your inquiry, project idea, or collaboration opportunity..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold hover:bg-orange-600/90 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t('send')}</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollAnimation>

            {/* Contact Information */}
            <ScrollAnimation delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Whether you have a question, want to collaborate, or are interested in joining our innovation community, 
                    we'd love to hear from you. Our team is here to help and provide the information you need.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.content.map((item, itemIndex) => (
                            <p key={itemIndex} className="text-gray-600">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Find Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visit our Innovation Hub located at Ardhi University campus in Dar es Salaam.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Ardhi University Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.019964073624!2d39.21197731532644!3d-6.764722095099998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c6e2e2e2e2b%3A0x7e2e2e2e2e2e2e2e!2sArdhi%20University!5e0!3m2!1sen!2stz!4v1680000000000!5m2!1sen!2stz"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96 rounded-lg border-none"
              ></iframe>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-20 bg-[#000068] text-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Subscribe to our newsletter to receive updates about new projects, events, and innovation opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                />
                <button className="bg-[#FFA500] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FFA500]/90 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>  */}
    </div>
  );
};

export default Contact;