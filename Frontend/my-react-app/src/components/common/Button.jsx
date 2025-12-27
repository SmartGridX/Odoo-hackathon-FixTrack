import React from 'react';

export const Button = ({
  onClick,
  children,
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = 'w-full py-3 rounded-lg font-semibold transition duration-200';
  const variantStyles = variant === 'primary'
    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
    : 'bg-gray-200 text-gray-700 hover:bg-gray-300';

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};