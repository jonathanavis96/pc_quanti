import React from 'react';
import Link from 'next/link';

export interface LinkButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-pc-blue text-white hover:bg-pc-blue-dark active:bg-pc-blue-dark',
    secondary: 'bg-pc-neutral-100 text-pc-neutral-900 hover:bg-pc-neutral-200 active:bg-pc-neutral-200',
    outline: 'border-2 border-pc-blue text-pc-blue hover:bg-pc-blue-light active:bg-pc-blue-light',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};
