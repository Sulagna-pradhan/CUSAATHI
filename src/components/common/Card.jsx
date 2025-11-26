import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  variant = 'default',
  clickable = false,
  hover = true,
  className = '',
  onClick,
  ...props 
}) => {
  const baseStyles = 'rounded-xl overflow-hidden transition-all duration-300';
  
  const variants = {
    default: 'bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border shadow-sm',
    elevated: 'bg-white dark:bg-dark-card shadow-lg',
    glass: 'glass shadow-lg',
    gradient: 'bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10 border border-primary-200 dark:border-primary-800',
  };

  const hoverStyles = hover ? 'card-hover' : '';
  const clickableStyles = clickable ? 'cursor-pointer' : '';

  const Component = clickable ? motion.div : 'div';

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
      whileHover={clickable ? { scale: 1.02 } : {}}
      whileTap={clickable ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </Component>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'elevated', 'glass', 'gradient']),
  clickable: PropTypes.bool,
  hover: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

// Card sub-components
Card.Header = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-gray-200 dark:border-dark-border ${className}`}>
    {children}
  </div>
);

Card.Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.Body = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

Card.Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.Footer = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-t border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg/50 ${className}`}>
    {children}
  </div>
);

Card.Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
