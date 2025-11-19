import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: string;
  variant?: 'light' | 'dark';
  showLine?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  accent,
  variant = 'light',
  showLine = false,
  className = ''
}: SectionHeaderProps) {
  const titleColor = variant === 'light' ? 'text-primary' : 'text-white';
  const subtitleColor = variant === 'light' ? 'text-primary-light' : 'text-white/80';

  return (
    <div className={`text-center ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-technical font-medium ${titleColor} mb-4`}>
        {title}{accent && <> <span className="text-accent">{accent}</span></>}
      </h2>
      {showLine && (
        <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
      )}
      {subtitle && (
        <p className={`text-lg ${subtitleColor} max-w-2xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
