import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-serif font-bold">ARS Catering</span>
            </div>
            <p className="text-secondary-300">
              Creating unforgettable culinary experiences for your special moments since 2020.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-secondary-300 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="/services" className="text-secondary-300 hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="/menu" className="text-secondary-300 hover:text-primary-400 transition-colors">Menu</a></li>
              <li><a href="/gallery" className="text-secondary-300 hover:text-primary-400 transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-secondary-300 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-500" />
                <span className="text-secondary-300">9845464183</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-500" />
                <span className="text-secondary-300">arscaterersblr@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-500" />
                <span className="text-secondary-300">1st Flore, 2, Uttarahalli Main Rd, BHCS Layout II Stage, Canara Bank Colony, Chikkalasandra, Bengaluru, Karnataka 560061</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-secondary-300 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                className="text-secondary-300 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                className="text-secondary-300 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
            </div>
            <div className="mt-4">
              <p className="text-secondary-300 text-sm">
                Subscribe to our newsletter for updates and special offers!
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-secondary-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-secondary-400">
            &copy; 2025 ARS Catering. All rights reserved. | Crafted with passion for exceptional dining.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;