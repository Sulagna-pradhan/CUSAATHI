import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({ 
  label,
  error,
  helperText,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  containerClassName = '',
  ...props 
}, ref) => {
  const baseStyles = 'w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1';
  const normalStyles = 'border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text focus:border-primary-500 focus:ring-primary-500';
  const errorStyles = 'border-red-500 focus:border-red-500 focus:ring-red-500';

  return (
    <div className={`space-y-1 ${containerClassName}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      
      <div className="relative">
        {Icon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        
        <input
          ref={ref}
          className={`
            ${baseStyles}
            ${error ? errorStyles : normalStyles}
            ${Icon && iconPosition === 'left' ? 'pl-11' : ''}
            ${Icon && iconPosition === 'right' ? 'pr-11' : ''}
            ${className}
          `}
          {...props}
        />
        
        {Icon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  containerClassName: PropTypes.string,
};

export default Input;
