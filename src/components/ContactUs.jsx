import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      value: 'hello@admark.com',
      link: 'mailto:hello@admark.com',
      color: '#00F0FF'
    },
    {
      icon: '📞',
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: '#7B2CBF'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      value: 'Available 24/7',
      link: '#',
      color: '#FF006E'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      value: '123 Marketing St, NYC',
      link: 'https://maps.google.com',
      color: '#00F0FF'
    }
  ];

  const socialMedia = [
    { name: 'LinkedIn', icon: '💼', link: '#', color: '#0077B5' },
    { name: 'Twitter', icon: '🐦', link: '#', color: '#1DA1F2' },
    { name: 'Facebook', icon: '👍', link: '#', color: '#4267B2' },
    { name: 'Instagram', icon: '📸', link: '#', color: '#E1306C' },
    { name: 'YouTube', icon: '▶️', link: '#', color: '#FF0000' }
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 2000);
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 md:py-32 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-admark-cyan rounded-full opacity-5 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-admark-pink rounded-full opacity-5 blur-3xl" style={{ animation: 'float 11s ease-in-out infinite', animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 gradient-text-admark neon-glow-cyan">
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Have a project in mind? Let's discuss how we can help you achieve your goals
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl glassmorphism-strong text-center card-hover-effect block"
              style={{
                border: `2px solid ${method.color}30`,
                textDecoration: 'none'
              }}
            >
              <div className="text-5xl mb-4">{method.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: method.color }}>
                {method.title}
              </h3>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text-cyan-pink">
              Send Us a Message
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-admark-bg-card border transition-all focus:ring-2"
                  style={{
                    borderColor: 'rgba(0, 240, 255, 0.2)',
                    color: 'white'
                  }}
                  placeholder="John Doe"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-admark-bg-card border transition-all focus:ring-2"
                    style={{
                      borderColor: 'rgba(0, 240, 255, 0.2)',
                      color: 'white'
                    }}
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-admark-bg-card border transition-all focus:ring-2"
                    style={{
                      borderColor: 'rgba(0, 240, 255, 0.2)',
                      color: 'white'
                    }}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-admark-bg-card border transition-all focus:ring-2"
                  style={{
                    borderColor: 'rgba(0, 240, 255, 0.2)',
                    color: 'white'
                  }}
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-admark-bg-card border transition-all focus:ring-2 resize-none"
                  style={{
                    borderColor: 'rgba(0, 240, 255, 0.2)',
                    color: 'white'
                  }}
                  placeholder="Tell us more about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-4 rounded-full font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: isSubmitting 
                    ? 'rgba(100, 100, 100, 0.5)' 
                    : 'linear-gradient(90deg, #00F0FF 0%, #FF006E 100%)',
                  boxShadow: '0 0 30px rgba(0, 240, 255, 0.4)',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 0 50px rgba(255, 0, 110, 0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.4)';
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : submitStatus === 'success' ? (
                  <span className="flex items-center justify-center gap-2">
                    ✓ Message Sent Successfully!
                  </span>
                ) : (
                  'Send Message 🚀'
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Office Hours */}
            <div className="p-8 rounded-2xl glassmorphism-strong" style={{ border: '2px solid rgba(0, 240, 255, 0.2)' }}>
              <h3 className="text-2xl font-bold mb-6 gradient-text-purple-cyan">
                ⏰ Office Hours
              </h3>
              <div className="space-y-4">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{schedule.day}</span>
                    <span className="font-semibold" style={{ color: '#00F0FF' }}>{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="p-8 rounded-2xl glassmorphism-strong" style={{ border: '2px solid rgba(255, 0, 110, 0.2)' }}>
              <h3 className="text-2xl font-bold mb-6 gradient-text-cyan-pink">
                📍 Our Location
              </h3>
              <div className="aspect-video rounded-lg overflow-hidden bg-admark-bg-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

            {/* Social Media */}
            <div className="p-8 rounded-2xl glassmorphism-strong" style={{ border: '2px solid rgba(123, 44, 191, 0.2)' }}>
              <h3 className="text-2xl font-bold mb-6 gradient-text-admark">
                🌐 Follow Us
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all duration-300"
                    style={{
                      background: `${social.color}20`,
                      border: `2px solid ${social.color}50`,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                      e.target.style.boxShadow = `0 0 20px ${social.color}80`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="p-6 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(255, 0, 110, 0.1))' }}>
              <p className="text-lg font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                💬 Quick Response Guaranteed
              </p>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                We typically respond within 1-2 business hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}