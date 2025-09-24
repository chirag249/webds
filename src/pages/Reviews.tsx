import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const reviews = [
    {
      id: 1,
      name: 'mahesh shetty',
      
      rating: 5,
      comment: 'The team was professional, punctual, and very accommodating to our requests. They managed the setup smoothly and ensured everything was served hot and fresh I highly recommend ARS Food Caterers for any event where you want great food and excellent service.',
                       
      image: 'https://lh3.googleusercontent.com/a/ACg8ocI0liXcw3dXB7yJCq0eFkF5VonLHOqjtERhO-xQOIJ3RVaoXw=w50-h50-p-rp-mo-br100',
      
     
    },
    {
      id: 2,
      name: 'Shriganesh Bhat',

      rating: 5,
      comment: 'ARS comes with the trust of quality food serving. Love the taste of every bite.',
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjUSiumbKPu7Qr-RGqDrH4Af2nlVv2CJi_gsZ9hPP8HzenG4MoJhmw=w50-h50-p-rp-mo-ba4-br100',
     
    },
    {
      id: 3,
      name: 'prahlad raj',
      
      rating: 5,
      comment: 'Superb and nice tastes food.',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocIBK1Mzh4X9BqpiuGdJoNwa9f78JnkD45OGhnXpEQ2i8vo_-Rs=w50-h50-p-rp-mo-br100',
     
    },
    {
      id: 4,
      name: 'Raghavendra Kulal',
      
      rating: 5,
      comment: 'ARS catering service was excellent. Food was delicious hygienic and servo down time. Highly recommended. Thank you ARS .',
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjU8M4i6hJWU5NU2w7brNQY8bUGov-dyR6vT-J8A6iA6OXAxcxem=w50-h50-p-rp-mo-br100',
      
    },
    {
      id: 5,
      name: 'Lakshmi KM',
      
      rating: 5,
      comment: 'We recently hired ARS caterers for our event, and everything was perfect. The food was delicious, fresh, and beautifully presented. The team was professional, well-organized, and attentive to every detail. Our guests truly enjoyed the variety and taste. Highly recommend their service!',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocIP8wx39T3oeuFjzd4Bz9pbw-LkWSPunQD0bIsPyOWNPknCtA=w50-h50-p-rp-mo-br100',
      
    },
    {
      id: 6,
      name: 'Rashmi V',
      
      rating: 5,
      comment: 'I recently used the ARS catering service for an event, and  iam very satisfied with their work. The food was fresh, tasty, and well presented. And the service was prompt and professional.The staffs were polite , cooperative ,and made sure everything ran smoothly.Overall it was great experience. And I would definitely recommend ARS catering service for functions, parties,or any special occasions.',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocKWuBa7cy_00AZJi52irdFYYPgodY4Qr44i87Z7VFSRIcLNTA=w50-h50-p-rp-mo-br100',
      
    }
  ];

  const stats = [
    { label: 'Average Rating', value: '4.9/5' },
    { label: 'Total Reviews', value: '500+' },
    { label: 'Repeat Clients', value: '85%' },
    { label: 'Events Catered', value: '2000+' }
  ];

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setIsAutoplay(false);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoplay(false);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
    setIsAutoplay(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

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
              Client Reviews
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Don't just take our word for it. See what our satisfied clients have to say 
              about their experiences with ARS Catering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-secondary-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <div className="flex items-center mb-6">
                  <Quote className="h-12 w-12 text-primary-200 mr-4" />
                  <div className="flex">
                    {renderStars(reviews[currentReview].rating)}
                  </div>
                </div>

                <p className="text-xl text-secondary-700 leading-relaxed mb-8 italic">
                  "{reviews[currentReview].comment}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={reviews[currentReview].image}
                      alt={reviews[currentReview].name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-secondary-800 text-lg">
                        {reviews[currentReview].name}
                      </h4>
                      <p className="text-secondary-600">{reviews[currentReview].role}</p>
                      <p className="text-sm text-primary-600 font-medium">
                        {reviews[currentReview].event}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-secondary-500 text-sm">{reviews[currentReview].date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-200 hover:bg-primary-50"
            >
              <ChevronLeft className="h-6 w-6 text-secondary-600" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-200 hover:bg-primary-50"
            >
              <ChevronRight className="h-6 w-6 text-secondary-600" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentReview ? 'bg-primary-600 w-8' : 'bg-secondary-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
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
              More Happy Clients
            </h2>
            <p className="text-xl text-secondary-600">
              Discover why clients choose us for their special events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-secondary-800">{review.name}</h4>
                    <p className="text-sm text-secondary-600">{review.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-secondary-700 text-sm leading-relaxed mb-4">
                  "{review.comment.substring(0, 120)}..."
                </p>
                
                <div className="text-xs text-primary-600 font-medium">
                  {review.event} • {review.date}
                </div>
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
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Experience the exceptional service and quality that our clients rave about.
            </p>
            <a href="tel:9845464183">
  <motion.button
    className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Book Your Event Today
  </motion.button>
</a>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;