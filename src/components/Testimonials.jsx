// components/Testimonials.jsx
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechNova Inc.",
    content: "SoftSell helped us recover over $120,000 in unused licenses. Their platform is incredibly efficient and their team was helpful throughout the process.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    role: "IT Director",
    company: "Global Solutions",
    content: "The fastest and most transparent software resale experience we've had. We'll definitely use SoftSell for all our future license management needs.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trusted by companies worldwide
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;