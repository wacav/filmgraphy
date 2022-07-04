import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'link' | 'ghost' | 'accent' | 'secondary';
  isOutline?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const Button = ({
  children,
  variant,
  isOutline,
  size = 'md',
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  return (
    <button
      className={`btn ${isOutline && 'btn-outline'} ${variant && `btn-${variant}`} btn-${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
