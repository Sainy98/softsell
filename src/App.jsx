import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import { useTheme } from './ThemeContext';

function App() {
 
  const { darkMode } = useTheme();
  const [showChat, setShowChat] = useState(false);
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Navbar className={darkMode} />
      
      <Hero />
      
      <HowItWorks />
      
      <WhyChooseUs />
      
      <Testimonials />
      
      <ContactForm />
      
      <Footer />

      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {showChat && <ChatWidget onClose={() => setShowChat(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;