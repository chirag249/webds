import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Briefcase, Gift, Utensils, Calendar, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Catering',
      description: 'Make your special day perfect with our elegant wedding catering services featuring customized menus and impeccable presentation.',
      features: ['Custom menu planning', 'Professional service staff', 'Elegant presentation', 'Cake and dessert options'],
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional catering solutions for business meetings, conferences, and corporate celebrations that impress your clients.',
      features: ['Business lunch packages', 'Coffee and refreshments', 'Presentation-ready setups', 'Dietary accommodation'],
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Gift,
      title: 'Birthday Parties',
      description: 'Celebrate life\'s milestones with our fun and festive birthday catering packages for all ages.',
      features: ['Themed decorations', 'Custom birthday cakes', 'Kid-friendly options', 'Party entertainment coordination'],
      image: 'https://images.pexels.com/photos/7552330/pexels-photo-7552330.jpeg'
    },
    {
      icon: Utensils,
      title: 'Custom Menus',
      description: 'Personalized menu creation based on your preferences, dietary restrictions, and cultural requirements.',
      features: ['Dietary restrictions accommodation', 'Cultural cuisine specialties', 'Seasonal ingredients', 'Nutritional consultation'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Calendar,
      title: 'Social Events',
      description: 'From family reunions to holiday parties, we make every social gathering memorable with delicious food.',
      features: ['Holiday menu specials', 'Family-style service', 'Buffet and plated options', 'Venue coordination'],
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Star,
      title: 'VIP Experiences',
      description: 'Exclusive catering services for high-end events with premium ingredients and white-glove service.',
      features: ['Premium ingredients', 'White-glove service', 'Exclusive menu options', 'Personal chef consultation'],
      image: 'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-serif font-bold text-secondary-800 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we provide comprehensive catering services 
              tailored to your unique needs and vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="p-3 bg-primary-600 rounded-full">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-serif font-bold text-secondary-800 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-secondary-600 mb-6">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-secondary-800 mb-3">Features included:</h4>
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center text-secondary-600"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.1) }}
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-secondary-800 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We make planning your event simple with our streamlined process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your vision, requirements, and budget' },
              { step: '02', title: 'Menu Planning', description: 'Custom menu creation based on your preferences' },
              { step: '03', title: 'Preparation', description: 'Our chefs prepare everything with attention to detail' },
              { step: '04', title: 'Service', description: 'Professional service on the day of your event' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                  {process.title}
                </h3>
                <p className="text-secondary-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              Ready to Plan Your Event?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact us today to discuss your catering needs and get a personalized quote.
            </p>
            <motion.button
              className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;