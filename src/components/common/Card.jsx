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
  const baseStyles =
    'relative rounded-2xl overflow-hidden transition-all duration-300 ease-out';

  const variants = {
    // Slightly stronger border so multiple cards are clearly separated
    default:
      'bg-white/90 dark:bg-dark-card/95 border border-emerald-200 dark:border-emerald-800 shadow-sm shadow-emerald-50/80 dark:shadow-none',
    elevated:
      'bg-white dark:bg-dark-card border border-emerald-200 dark:border-emerald-800 shadow-md shadow-emerald-100/80 dark:shadow-emerald-950/40',
    glass:
      'bg-emerald-50/40 dark:bg-emerald-900/40 border border-emerald-200/70 dark:border-emerald-700/70 backdrop-blur-xl shadow-lg shadow-emerald-200/50 dark:shadow-emerald-950/60',
    gradient:
      'bg-gradient-to-br from-emerald-50 via-white to-lime-50 dark:from-emerald-950/70 dark:via-dark-bg dark:to-emerald-900/80 border border-emerald-200 dark:border-emerald-800 shadow-md shadow-emerald-100/80 dark:shadow-emerald-950/50',
  };

  const hoverStyles = hover
    ? 'hover:shadow-lg hover:shadow-emerald-200/80 dark:hover:shadow-emerald-900/80 hover:-translate-y-0.5'
    : '';

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
      {/* subtle inner outline to separate card content from background when many cards are together */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-emerald-100/60 dark:ring-emerald-900/70" />
      <div className="relative">{children}</div>
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

Card.Header = ({ children, className = '' }) => (
  <div
    className={`px-4 md:px-6 py-3 md:py-4 border-b border-emerald-100/90 dark:border-emerald-800 flex items-center gap-3 ${className}`}
  >
    {children}
  </div>
);

Card.Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.Body = ({ children, className = '' }) => (
  <div className={`px-4 md:px-6 py-4 md:py-5 ${className}`}>{children}</div>
);

Card.Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.Footer = ({ children, className = '' }) => (
  <div
    className={`px-4 md:px-6 py-3 md:py-4 border-t border-emerald-100/90 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/40 flex items-center gap-3 ${className}`}
  >
    {children}
  </div>
);

Card.Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
