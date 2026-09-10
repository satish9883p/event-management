import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md',
  isLoading = false,
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 flex items-center gap-2';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 disabled:border-gray-400',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></span>
      ) : null}
      {children}
    </motion.button>
  );
};
