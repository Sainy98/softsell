// components/HowItWorks.jsx
import { motion } from 'framer-motion';
import { FiUpload, FiDollarSign, FiCheckCircle } from 'react-icons/fi';

const steps = [
  {
    icon: <FiUpload className="w-8 h-8" />,
    title: "Upload License Details",
    description: "Provide information about your software licenses through our secure portal."
  },
  {
    icon: <FiDollarSign className="w-8 h-8" />,
    title: "Get Instant Valuation",
    description: "Our algorithm provides a fair market price based on current demand."
  },
  {
    icon: <FiCheckCircle className="w-8 h-8" />,
    title: "Get Paid Quickly",
    description: "Receive payment within 24 hours after we verify your licenses."
  }
];

const HowItWorks = () => {
  return (
    <section id='how-it-works' className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How SoftSell Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Selling your unused software licenses has never been easier
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
             <div className="[&>*]:stroke-[#52009c] dark:[&>*]:stroke-white bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
  {step.icon}
</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;