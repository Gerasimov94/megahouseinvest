import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  accent?: string;
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  accent,
  className = ''
}: PageHeroProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-technical font-medium text-primary leading-tight mb-6">
        {title}{accent && <> <span>{accent}</span></>}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-primary-light font-technical leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
