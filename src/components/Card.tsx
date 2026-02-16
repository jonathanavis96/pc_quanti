import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', padding = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'rounded-lg transition-shadow duration-200';
    
    const variantStyles = {
      default: 'bg-pc-neutral-50 border border-pc-neutral-200',
      outlined: 'bg-white border-2 border-pc-neutral-200',
      elevated: 'bg-white shadow-md hover:shadow-lg',
    };
    
    const paddingStyles = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };
    
    const classes = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`;
    
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
