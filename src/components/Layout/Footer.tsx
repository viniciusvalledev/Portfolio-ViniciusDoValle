import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-8 pb-4 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-muted uppercase tracking-widest border-t border-white/5 mt-12">
      <p style={{ color: 'var(--muted)' }}>© 2026 VINICIUS_VALLE — Todos os direitos reservados</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a 
          href="https://github.com/viniciusvalledev" 
          target="_blank" 
          rel="noreferrer" 
          className="brand-link hover:underline transition-colors"
        >
          github
        </a>
        <a 
          href="https://linkedin.com/in/viniciusvalledev" 
          target="_blank" 
          rel="noreferrer" 
          className="brand-link hover:underline transition-colors"
        >
          linkedin
        </a>
      </div>
    </footer>
  );
};