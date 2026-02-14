import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  centered?: boolean;
  children: React.ReactNode;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxWidth = 'lg', centered = true, className = '', children, ...props }, ref) => {
    const baseStyles = 'w-full';
    
    const maxWidthStyles = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    };
    
    const centeredStyles = centered ? 'mx-auto px-4 sm:px-6 lg:px-8' : '';
    
    const classes = `${baseStyles} ${maxWidthStyles[maxWidth]} ${centeredStyles} ${className}`;
    
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
