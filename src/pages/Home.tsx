import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Calendar, Award } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '2000+' },
    { icon: Calendar, label: 'Events Catered', value: '5000+' },
    { icon: Star, label: 'Average Rating', value: '4.9' },
    { icon: Award, label: 'Years Experience', value: '15+' },
  ];

  const services = [
    {
      title: 'Wedding Catering',
      description: 'Make your special day unforgettable with our elegant wedding catering services.',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Corporate Events',
      description: 'Professional catering solutions for your business meetings and corporate functions.',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Private Parties',
      description: 'Celebrate life\'s precious moments with our personalized catering services.',
      image: 'https://images.pexels.com/photos/1116558/pexels-photo-1116558.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <img
            src="https://images.pexels.com/photos/8818723/pexels-photo-8818723.jpeg"
            alt="Catering Hero"
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div
          className="relative z-20 text-center text-white max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            ARS Catering
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Crafting Culinary Experiences That Create Lasting Memories
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary-900 transition-all duration-300 transform hover:scale-105"
            >
              Book Us Now
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary-100 rounded-full">
                      <IconComponent className="h-8 w-8 text-primary-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-secondary-800 mb-2">{stat.value}</div>
                  <div className="text-secondary-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-secondary-800 mb-4">
              Our Specialties
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we bring culinary excellence to every occasion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let us bring our culinary expertise to your next event. Contact us today for a personalized consultation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;