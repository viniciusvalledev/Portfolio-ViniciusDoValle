import React from 'react';

interface CardProps {
  children: React.ReactNode;
  borderColor?: string;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, borderColor = '#334155', className = "", title }) => (
  <div 
    className={`bg-[#0b101e] card-border-custom p-4 md:p-6 ${className}`}
    style={{ '--border-color': borderColor } as React.CSSProperties}
  >
    {title && <h3 className="text-[10px] text-slate-500 font-mono tracking-widest mb-4 uppercase">{title}</h3>}
    {children}
  </div>
);