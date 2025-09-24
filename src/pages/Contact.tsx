import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    eventType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit the form to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        guestCount: '',
        eventType: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '9845464183',
      link: 'tel:9845464183'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'arscaterersblr@gmail.com',
      link: 'mailto:arscaterersblr@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '1st Flore, 2, Uttarahalli Main Rd, BHCS Layout II Stage, Canara Bank Colony, Chikkalasandra, Bengaluru, Karnataka 560061',
      link: 'https://maps.app.goo.gl/AsK2syzQm8EWDNcv8'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Sun: 24 hours',
      link: null
    }
  ];

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Holiday Party',
    'Baby Shower',
    'Graduation',
    'Other'
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
              Contact Us
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Ready to plan your next event? We'd love to hear from you. Get in touch to discuss 
              your vision and let us create something extraordinary together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-secondary-800 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-secondary-600 hover:text-primary-600 transition-colors"
                      target={info.title === 'Address' ? '_blank' : undefined}
                      rel={info.title === 'Address' ? 'noopener noreferrer' : undefined}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-secondary-600">{info.content}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-secondary-800 mb-6">
                Get A Free Quote
              </h2>
              <p className="text-secondary-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a personalized quote for your event.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-secondary-700 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-secondary-700 mb-2">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="50"
                      min="1"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-secondary-700 mb-2">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us more about your event, special requirements, or any questions you have..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-secondary-800 mb-6">
                Visit Our Location
              </h2>
              <p className="text-secondary-600 mb-8">
                Come visit our kitchen facility or schedule a tasting appointment. We'd love to show you 
                our operation and discuss your event in person.
              </p>

              <div className="rounded-xl overflow-hidden shadow-lg h-96 mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9875140794015!2d77.54609027560909!3d12.908523887401055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f3a0852a265%3A0xc555550972f88331!2sARS%20CATERER'S!5e0!3m2!1sen!2sin!4v1758638235385!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ARS Caterers Location"
                ></iframe>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-secondary-800 mb-4">
                  Schedule a Tasting
                </h3>
                <p className="text-secondary-600 mb-4">
                  Experience our cuisine firsthand with a complimentary tasting session. 
                  Available by appointment Monday through Friday.
                </p>
                <motion.button
                  className="w-full bg-secondary-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-secondary-900 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Tasting Appointment
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold text-secondary-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary-600">
              Quick answers to common questions about our catering services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 4-6 weeks in advance for optimal menu selection and availability. However, we can often accommodate shorter notice for smaller events."
              },
              {
                question: "Do you offer tastings?",
                answer: "Yes! We offer complimentary tastings for events over 50 guests. For smaller events, tastings are available for a small fee that's credited toward your final bill."
              },
              {
                question: "What's included in your service?",
                answer: "Our full-service catering includes menu planning, professional chefs, serving staff, table setup, and cleanup. We can also coordinate with vendors for linens, flowers, and entertainment."
              },
              {
                question: "Can you accommodate dietary restrictions?",
                answer: "Absolutely! We specialize in accommodating all dietary needs including vegetarian, vegan, gluten-free, kosher, and various allergies. Just let us know your requirements."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-secondary-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

