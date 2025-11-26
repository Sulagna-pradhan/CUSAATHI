import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, align = 'center', className = '' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 96 }} // 96px = w-24
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6 ${align === 'center' ? 'mx-auto' : ''}`}
        style={{ width: '6rem' }} // Fallback/Force width handling via framer
      />

      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
