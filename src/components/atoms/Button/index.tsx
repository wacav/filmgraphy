import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'link' | 'ghost' | 'accent' | 'secondary';
  isOutline?: boolean;
};

const Button = ({
  children,
  variant,
  isOutline,
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  return (
    <button className={`btn ${isOutline && 'btn-outline'} ${variant && `btn-${variant}`} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
