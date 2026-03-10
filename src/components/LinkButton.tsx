import React from 'react';
import Link from 'next/link';

export interface LinkButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  /** When true, renders gold-on-dark styling for dark background sections (Hero, CTA, Footer, Header). */
  onDark?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  onDark = false,
  className = '',
  children,
  onClick,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2';

  const variantStyles = onDark
    ? {
        primary: 'bg-pc-gold text-black hover:bg-pc-gold-light active:bg-pc-gold-light',
        secondary: 'bg-white/10 text-white hover:bg-white/20 active:bg-white/20',
        outline: 'border-2 border-pc-gold text-pc-gold hover:bg-pc-gold/10 active:bg-pc-gold/10',
      }
    : {
        primary: 'bg-pc-neutral-900 text-pc-gold hover:bg-pc-neutral-800 active:bg-pc-neutral-800',
        secondary: 'bg-pc-neutral-100 text-pc-neutral-900 hover:bg-pc-neutral-200 active:bg-pc-neutral-200',
        outline: 'border-2 border-pc-gold text-pc-neutral-900 hover:bg-pc-gold/10 active:bg-pc-gold/10',
      };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
};
