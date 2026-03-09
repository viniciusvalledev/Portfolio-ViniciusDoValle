import React from 'react';

interface CardProps {
  children: React.ReactNode;
  borderColor?: string;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, borderColor = '#334155', className = "", title }) => (
  <div 
    className={`brand-card p-4 md:p-6 ${className}`}
    style={{ borderLeft: `4px solid ${borderColor}` } as React.CSSProperties}
  >
    {title && <h3 className="text-[10px] text-muted font-mono tracking-widest mb-4 uppercase">{title}</h3>}
    {children}
  </div>
);