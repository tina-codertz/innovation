import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, ExternalLink, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollAnimation from '../components/UI/ScrollAnimation';

interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  status: 'ongoing' | 'completed' | 'upcoming';
  type: 'project' | 'event';
  image: string;


}

const Events: React.FC = () => {
  const { t } = useLanguage();

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // 👈 Add loading state

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/events/");
        const data = await res.json();

        //Check if paginated
        const eventsArray = Array.isArray(data) ? data : data.results;

        if (!Array.isArray(eventsArray)) {
          throw new Error("API did not return an array");
        }

        setProjects(eventsArray);
        console.log("Fetched Events:", eventsArray);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch events");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filters = [
    { id: 'all', label: t('allProjects') },
    { id: 'ongoing', label: t('ongoingProjects') },
    { id: 'completed', label: t('completedProjects') },
    { id: 'upcoming', label: t('upcomingEvents') },
  ];

  const typeFilters = [
    { id: 'all', label: 'All' },
    { id: 'project', label: 'Projects' },
    { id: 'event', label: 'Events' },
  ];

  const filteredProjects = projects.filter(project => {
    const statusMatch = activeFilter === 'all' || project.status === activeFilter;
    const typeMatch = selectedType === 'all' || project.type === selectedType;
    return statusMatch && typeMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing':
        return 'bg-orange-600';
      case 'completed':
        return 'bg-[#708238]';
      case 'upcoming':
        return 'bg-blue-900';
      default:
        return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'event' ? Calendar : Users;
  };


  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('projectsTitle')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore our innovative projects and upcoming events that are shaping the future of technology in Tanzania.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-blue-900" />
                <span className="font-medium text-blue-900">Filter by Status:</span>
                <div className="flex flex-wrap gap-2">
                  {filters.map(filter => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        activeFilter === filter.id
                          ? 'bg-blue-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium text-blue-900">Type:</span>
                <div className="flex flex-wrap gap-2">
                  {typeFilters.map(filter => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedType(filter.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        selectedType === filter.id
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const TypeIcon = getTypeIcon(project.type);
              return (
                <ScrollAnimation key={project.id} delay={0.1 * index}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getStatusColor(project.status)}`}>
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                          <TypeIcon className="w-4 h-4 text-blue-900" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center space-x-4 mb-4">
                        <MapPin className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-4 mb-4">
                        <Calendar className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">{new Date(project.date).toLocaleDateString()}</span>
                      </div>
                      
                    
                     
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <ScrollAnimation>
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Users className="w-16 h-16 mx-auto" />
                </div>
                <p className="text-gray-600 text-lg">
                  No projects or events found matching your criteria.
                </p>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </section>

      {/* Featured Tags */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Our Focus Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Explore the diverse technological domains we're working on to create innovative solutions.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['IoT', 'AI', 'Sustainability', 'Energy','Edge computing', 'Agriculture','Software','Multimedia', 'Data Science', 'Monitoring', 'Innovation', 'Training'].map((tag, index) => (
              <ScrollAnimation key={tag} delay={0.05 * index}>
                <div className="bg-gradient-to-r from-blue-900 to-orange-600 rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300">
                  <span className="text-white font-semibold">
                    {tag}
                  </span>
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
              Have a Project Idea?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're always looking for innovative project ideas and collaboration opportunities. 
              Let's work together to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600/90 transition-colors duration-200"
              >
                Propose a Project
              </a>
              <a
                href="mailto:innovation@aru.ac.tz"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 border border-white/20"
              >
                Get in Touch
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Events;