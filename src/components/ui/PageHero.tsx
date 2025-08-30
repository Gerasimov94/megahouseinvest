import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  accent?: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  accent,
  variant = 'light',
  className = ''
}: PageHeroProps) {
  const titleColor = variant === 'light' ? 'text-primary' : 'text-white';
  const subtitleColor = variant === 'light' ? 'text-primary-light' : 'text-white/80';

  return (
    <div className={`text-center mb-16 ${className}`}>
      <h1 className={`text-4xl md:text-5xl lg:text-6xl font-technical font-medium ${titleColor} leading-tight mb-6`}>
        {title}{accent && <> <span className="text-accent">{accent}</span></>}
      </h1>
      {subtitle && (
        <p className={`text-lg md:text-xl font-technical leading-relaxed max-w-3xl mx-auto ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
