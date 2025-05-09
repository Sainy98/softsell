// components/Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-10 dark:opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 line-height: 1.2">
            Turn Unused Software Into <span className="text-purple-600">Cash</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10">
            SoftSell helps businesses monetize their unused software licenses quickly and securely.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-all"
          >
            Sell My Licenses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;