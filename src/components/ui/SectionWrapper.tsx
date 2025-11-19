import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}

export default function SectionWrapper({
  children,
  variant = 'light',
  className = ''
}: SectionWrapperProps) {
  const baseClasses = 'py-8 lg:py-16';
  const variantClasses = variant === 'light' ? 'bg-white' : 'bg-neutral-950';
  const paddingClasses = 'px-6 lg:px-16 xl:px-32';

  return (
    <section className={`${baseClasses} ${variantClasses} ${className}`}>
      <div className={paddingClasses}>
        {children}
      </div>
    </section>
  );
}
