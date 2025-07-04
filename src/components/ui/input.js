import React from 'react'

const Input = ({ 
  className = '', 
  type = 'text',
  placeholder,
  value,
  onChange,
  ...props 
}) => {
  const baseClasses = 'flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
  
  const classes = `${baseClasses} ${className}`
  
  return (
    <input
      type={type}
      className={classes}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export { Input } 