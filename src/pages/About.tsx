import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Clock } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    
    {
      year: '2019',
      title: 'Innovation Leader',
      description: 'Pioneered sustainable catering practices and introduced plant-based menu options.',
      milestone: 'Sustainability Initiative'
    },
    {
      year: '2022',
      title: 'Digital Transformation',
      description: 'Launched our comprehensive online booking system and virtual menu tastings.',
      milestone: 'Technology Upgrade'
    },
    {
      year: '2025',
      title: 'Excellence Continues',
      description: 'Celebrating 15 years of creating memorable experiences with over 5000 events catered.',
      milestone: '5000+ Events Served'
    }
  ];

  const team = [
    {
      name: 'Chef Alessandro Rodriguez',
      role: 'Founder & Executive Chef',
      bio: 'With over 20 years of culinary experience, Alessandro founded ARS Catering with a passion for creating unforgettable dining experiences.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      specialties: ['Mediterranean Cuisine', 'Wedding Catering', 'Menu Development']
    },
    {
      name: 'Maria Santos',
      role: 'Head Pastry Chef',
      bio: 'Maria brings artistic flair to our desserts and baked goods, having trained in Paris and worked at Michelin-starred establishments.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      specialties: ['Artisan Desserts', 'Wedding Cakes', 'French Pastries']
    },
    {
      name: 'James Wilson',
      role: 'Operations Manager',
      bio: 'James ensures every event runs smoothly, coordinating logistics and maintaining our high standards of service excellence.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      specialties: ['Event Coordination', 'Team Management', 'Client Relations']
    },
    {
      name: 'Sophie Chen',
      role: 'Creative Director',
      bio: 'Sophie designs the visual presentation of our events, from table settings to food styling, creating Instagram-worthy experiences.',
      image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      specialties: ['Event Design', 'Food Styling', 'Visual Presentation']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We pour our heart into every dish and every event, treating each celebration as if it were our own special occasion.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in ingredients, preparation, and service to deliver exceptional experiences.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in building lasting relationships with our clients and supporting our local community and suppliers.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'We understand that timing is everything in events, and we pride ourselves on punctual, dependable service.'
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
              About ARS Catering
            </h1>
            <p className="text-xl text-secondary-600 max-w-4xl mx-auto">
              For over 15 years, we've been crafting culinary experiences that bring people together, 
              create lasting memories, and celebrate life's most precious moments. From intimate gatherings 
              to grand celebrations, we bring passion, creativity, and excellence to every event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-secondary-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-secondary-700">
                <p className="text-lg leading-relaxed">
                  ARS Catering was born from a simple belief: that food has the power to bring people together 
                  and create unforgettable moments. Founded in 2010 by Chef Alessandro Rodriguez, our company 
                  started as a small operation with big dreams and an unwavering commitment to quality.
                </p>
                <p className="text-lg leading-relaxed">
                  What began as catering for friends and family has grown into one of the region's most 
                  trusted catering companies, serving over 5,000 events and creating countless memories 
                  along the way. Despite our growth, we've never lost sight of our core values: passion 
                  for great food, dedication to exceptional service, and the belief that every event 
                  deserves to be extraordinary.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, our team of talented chefs, creative designers, and dedicated service professionals 
                  work together to make your vision come to life. From the freshest ingredients to the final 
                  presentation, every detail is carefully crafted to exceed your expectations.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Story"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-90">Creating memories since 2020</p>
                  <p className="text-2xl font-bold">5+ Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-secondary-800 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-secondary-600">
              Milestones that shaped our commitment to excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <div className="text-primary-600 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-secondary-800 mb-2">{item.title}</h3>
                    <p className="text-secondary-600 mb-3">{item.description}</p>
                    <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {item.milestone}
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-secondary-600">
              The passionate professionals behind every exceptional event
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-800 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-secondary-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-secondary-800 mb-2">Specialties:</p>
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-block bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium mr-2 mb-1"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-secondary-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-secondary-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="h-10 w-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-800 mb-4">{value.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
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
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Ready to experience the ARS Catering difference? Let's discuss your upcoming event.
            </p>
            <motion.button
              className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey With Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;