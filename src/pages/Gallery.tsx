import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      title: 'Corporate Event Setup',
      description: 'Elegant corporate dining setup with professional service'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'weddings',
      title: 'Wedding Reception',
      description: 'Beautiful wedding reception with floral arrangements'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1116558/pexels-photo-1116558.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'food',
      title: 'Gourmet Appetizers',
      description: 'Artfully arranged appetizer platter'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'food',
      title: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with seasonal vegetables'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'food',
      title: 'Prime Steak',
      description: 'USDA Prime ribeye with perfect searing'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'food',
      title: 'Truffle Risotto',
      description: 'Creamy mushroom risotto with truffle oil'
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      title: 'Birthday Party',
      description: 'Festive birthday celebration setup'
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      title: 'Luxury Dining',
      description: 'High-end dining experience with premium service'
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/6102166/pexels-photo-6102166.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'food',
      title: 'Classic Tiramisu',
      description: 'Traditional Italian dessert'
    },
    {
      id: 10,
      url: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'food',
      title: 'Chocolate Cake',
      description: 'Decadent chocolate cake with fresh berries'
    },
    {
      id: 11,
      url: 'https://images.pexels.com/photos/1229149/pexels-photo-1229149.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'food',
      title: 'Cheese Board',
      description: 'Artisan cheese selection with accompaniments'
    },
    {
      id: 12,
      url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      title: 'Outdoor Catering',
      description: 'Beautiful outdoor event setup'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Images', count: galleryImages.length },
    { id: 'food', name: 'Food', count: galleryImages.filter(img => img.category === 'food').length },
    { id: 'events', name: 'Events', count: galleryImages.filter(img => img.category === 'events').length },
    { id: 'weddings', name: 'Weddings', count: galleryImages.filter(img => img.category === 'weddings').length },
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
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
              Our Gallery
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Take a visual journey through our culinary creations and memorable events. 
              Every image tells a story of passion, quality, and unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterOption) => (
              <motion.button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === filterOption.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-primary-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{filterOption.name}</span>
                <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                  {filterOption.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 masonry-grid"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold mb-1">
                      {image.title}
                    </h3>
                    <p className="text-white text-sm opacity-90">
                      {image.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 rounded-lg p-4 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-sm opacity-90">
                  {filteredImages[selectedImage].description}
                </p>
              </div>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;