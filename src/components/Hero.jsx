import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Meeting scheduled:', formData);
    alert('✅ Meeting request sent! We will confirm via email.');
    setShowSchedulePopup(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
  };

  useEffect(() => {
    if (showSchedulePopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSchedulePopup]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        background: '#0A0A0A',
        paddingTop: '100px'
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FFC107 0%, transparent 70%)',
            top: '20%',
            right: '10%',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FF9800 0%, transparent 70%)',
            bottom: '20%',
            left: '10%',
            animation: 'float 25s ease-in-out infinite',
            animationDelay: '5s',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(255, 193, 7, 0.1)',
                border: '1px solid rgba(255, 193, 7, 0.3)',
              }}
            >
              <span className="text-2xl">💡</span>
              <span style={{ color: '#FFC107' }} className="text-sm font-semibold">
                Digital Marketing Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFC107 50%, #FF9800 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-flow 5s ease infinite',
              }}
            >
              Transform Your Business With Data-Driven Marketing
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              We don't just create campaigns — we engineer growth systems that magnetize customers and multiply revenue.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-8 mb-12"
            >
              {[
                { value: '500+', label: 'Clients', icon: '👥' },
                { value: '300%', label: 'Avg ROI', icon: '📈' },
                { value: '15+', label: 'Countries', icon: '🌍' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-black mb-1" style={{ color: '#FFC107' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => setShowSchedulePopup(true)}
                className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
                  boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
                  color: '#000'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(255, 193, 7, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(255, 193, 7, 0.4)';
                }}
              >
                📅 Schedule Meeting
              </button>

              <a
                href="#case-studies"
                className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
                style={{
                  background: 'rgba(255, 193, 7, 0.1)',
                  border: '2px solid rgba(255, 193, 7, 0.4)',
                  color: '#FFC107'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 193, 7, 0.2)';
                  e.target.style.borderColor = '#FFC107';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 193, 7, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 193, 7, 0.4)';
                }}
              >
                View Success Stories →
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Visual Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[500px] h-[500px]">
              {/* Rotating Circle */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #FFC107 0%, #FF9800 25%, #FFC107 50%, #FF9800 75%, #FFC107 100%)',
                  animation: 'spin 20s linear infinite',
                  opacity: 0.15,
                }}
              />
              
              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12 rounded-3xl" style={{
                  background: 'rgba(255, 193, 7, 0.05)',
                  border: '2px solid rgba(255, 193, 7, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div className="text-8xl mb-4">📊</div>
                  <div className="text-3xl font-black mb-2" style={{ color: '#FFC107' }}>
                    Growth
                  </div>
                  <div className="text-2xl font-bold" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Engineering
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              {[
                { emoji: '🎯', angle: 0 },
                { emoji: '💰', angle: 60 },
                { emoji: '📈', angle: 120 },
                { emoji: '🚀', angle: 180 },
                { emoji: '💡', angle: 240 },
                { emoji: '⚡', angle: 300 }
              ].map((item, index) => {
                const radius = 220;
                const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                const y = Math.sin((item.angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute text-5xl"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`,
                    }}
                  >
                    {item.emoji}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Schedule Meeting Popup - Properly Centered */}
      <AnimatePresence>
        {showSchedulePopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-85 z-[1000] flex items-center justify-center p-4"
              onClick={() => setShowSchedulePopup(false)}
            >
              {/* Popup Container - Centered */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 relative"
                style={{
                  background: 'rgba(15, 15, 15, 0.98)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255, 193, 7, 0.3)',
                  boxShadow: '0 25px 50px -12px rgba(255, 193, 7, 0.4)',
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowSchedulePopup(false)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all z-10"
                  style={{
                    background: 'rgba(255, 193, 7, 0.1)',
                    color: '#FFC107',
                    border: '1px solid rgba(255, 193, 7, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 193, 7, 0.2)';
                    e.target.style.transform = 'rotate(90deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 193, 7, 0.1)';
                    e.target.style.transform = 'rotate(0deg)';
                  }}
                >
                  ✕
                </button>

                <div className="text-center mb-8">
                  <h2 className="text-4xl font-black mb-3" style={{ color: '#FFC107' }}>
                    Schedule Your Free Consultation
                  </h2>
                  <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Let's discuss how we can grow your business together
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                        style={{
                          background: 'rgba(255, 193, 7, 0.05)',
                          border: '1px solid rgba(255, 193, 7, 0.2)',
                          color: 'white'
                        }}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                        style={{
                          background: 'rgba(255, 193, 7, 0.05)',
                          border: '1px solid rgba(255, 193, 7, 0.2)',
                          color: 'white'
                        }}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                      style={{
                        background: 'rgba(255, 193, 7, 0.05)',
                        border: '1px solid rgba(255, 193, 7, 0.2)',
                        color: 'white'
                      }}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                        style={{
                          background: 'rgba(255, 193, 7, 0.05)',
                          border: '1px solid rgba(255, 193, 7, 0.2)',
                          color: 'white',
                          colorScheme: 'dark'
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2"
                        style={{
                          background: 'rgba(255, 193, 7, 0.05)',
                          border: '1px solid rgba(255, 193, 7, 0.2)',
                          color: 'white'
                        }}
                      >
                        <option value="" style={{ background: '#1a1a1a' }}>Select time</option>
                        <option value="9:00 AM" style={{ background: '#1a1a1a' }}>9:00 AM</option>
                        <option value="10:00 AM" style={{ background: '#1a1a1a' }}>10:00 AM</option>
                        <option value="11:00 AM" style={{ background: '#1a1a1a' }}>11:00 AM</option>
                        <option value="12:00 PM" style={{ background: '#1a1a1a' }}>12:00 PM</option>
                        <option value="1:00 PM" style={{ background: '#1a1a1a' }}>1:00 PM</option>
                        <option value="2:00 PM" style={{ background: '#1a1a1a' }}>2:00 PM</option>
                        <option value="3:00 PM" style={{ background: '#1a1a1a' }}>3:00 PM</option>
                        <option value="4:00 PM" style={{ background: '#1a1a1a' }}>4:00 PM</option>
                        <option value="5:00 PM" style={{ background: '#1a1a1a' }}>5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg resize-none transition-all focus:outline-none focus:ring-2"
                      style={{
                        background: 'rgba(255, 193, 7, 0.05)',
                        border: '1px solid rgba(255, 193, 7, 0.2)',
                        color: 'white'
                      }}
                      placeholder="Tell us about your business goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full font-bold text-xl transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
                      boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
                      color: '#000'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.02)';
                      e.target.style.boxShadow = '0 12px 35px rgba(255, 193, 7, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '0 8px 25px rgba(255, 193, 7, 0.4)';
                    }}
                  >
                    Confirm Meeting 🚀
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translate(var(--tx), var(--ty)) translateY(0px); }
          50% { transform: translate(var(--tx), var(--ty)) translateY(-20px); }
        }
      `}</style>
    </section>
  );
}