import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-8 pb-4 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-slate-600 uppercase tracking-widest border-t border-slate-800/30">
      <p>© 2026 VINICIUS_VALLE -- TODOS OS DIREITOS RESERVADOS</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a 
          href="https://github.com/viniciusvalledev" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-blue-400 transition-colors"
        >
          github
        </a>
        <a 
          href="https://linkedin.com/in/viniciusvalledev" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-blue-400 transition-colors"
        >
          linkedin
        </a>
      </div>
    </footer>
  );
};