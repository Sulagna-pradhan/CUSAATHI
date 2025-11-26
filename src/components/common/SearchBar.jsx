import { Search, X } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchBar = ({ 
  placeholder = 'Search...',
  value,
  onChange,
  onClear,
  className = '',
  variant = 'default', // default, glass
  size = 'md', // sm, md, lg
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    if (onClear) {
      onClear();
    } else if (onChange) {
      onChange({ target: { value: '' } });
    }
  };

  const variants = {
    default: 'bg-gray-100 dark:bg-dark-card border-2 border-transparent focus:bg-white dark:focus:bg-dark-border',
    glass: 'bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm border-2 border-white/20 shadow-lg focus:bg-white dark:focus:bg-dark-card',
  };

  const sizes = {
    sm: 'py-1.5 text-sm',
    md: 'py-2.5 text-base',
    lg: 'py-4 text-lg',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`
        relative flex items-center transition-all duration-200
        ${isFocused ? 'ring-2 ring-primary-500 ring-offset-1' : ''}
        rounded-xl
      `}>
        <Search className={`absolute left-4 text-gray-400 ${iconSizes[size]}`} />
        
        <input
          type="text"
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`
            w-full pl-12 pr-12 rounded-xl text-gray-900 dark:text-dark-text 
            placeholder-gray-400 focus:outline-none transition-all
            ${variants[variant]}
            ${sizes[size]}
          `}
          {...props}
        />
        
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-4 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-dark-border transition-colors"
          >
            <X className={iconSizes[size]} />
          </button>
        )}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'glass']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default SearchBar;
