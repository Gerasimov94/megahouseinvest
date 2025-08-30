import React from 'react';

interface IconCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant?: 'light' | 'dark' | 'glass';
  className?: string;
}

export default function IconCard({ 
  title, 
  description, 
  icon,
  variant = 'light',
  className = '' 
}: IconCardProps) {
  const getTitleColor = () => {
    return variant === 'light' ? 'text-foreground' : 'text-white';
  };

  const getDescriptionColor = () => {
    return variant === 'light' ? 'text-primary-dark' : 'text-white/80';
  };

  const getIconBgClasses = () => {
    if (variant === 'light') {
      return 'bg-accent/10';
    }
    return 'bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/15 group-hover:border-accent/50';
  };

  return (
    <div className={`text-center group ${className}`}>
      <div className={`w-20 h-20 ${getIconBgClasses()} rounded-2xl flex items-center justify-center text-accent mx-auto mb-6 transition-all duration-300`}>
        {icon}
      </div>
      <h3 className={`text-lg font-semibold font-technical ${getTitleColor()} mb-4`}>
        {title}
      </h3>
      <p className={`${getDescriptionColor()} text-sm leading-relaxed`}>
        {description}
      </p>
    </div>
  );
}
