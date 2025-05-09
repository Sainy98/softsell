// components/WhyChooseUs.jsx
import { motion } from 'framer-motion';
import { FiShield, FiDollarSign, FiClock, FiGlobe } from 'react-icons/fi';

const benefits = [
  {
    icon: <FiDollarSign className="w-6 h-6" />,
    title: "Highest Payouts",
    description: "We offer the most competitive rates in the industry, ensuring you get maximum value."
  },
  {
    icon: <FiClock className="w-6 h-6" />,
    title: "Fast Transactions",
    description: "Get paid within 24 hours after verification - faster than any competitor."
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: "Secure Process",
    description: "Bank-level encryption and strict verification protect your transactions."
  },
  {
    icon: <FiGlobe className="w-6 h-6" />,
    title: "Global Marketplace",
    description: "Access to buyers worldwide increases demand and prices for your licenses."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose SoftSell
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're revolutionizing the way companies monetize unused software
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="[&>*]:stroke-[#52009c] dark:[&>*]:stroke-white bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;