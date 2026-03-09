import React, { useEffect, useState } from 'react';

interface TopNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TopNav: React.FC<TopNavProps> = ({ activeTab, setActiveTab }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Bloqueia scroll do body quando o menu mobile está aberto
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const items = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'certification', label: 'Certification' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileOpen(false);
  };

  return (
    <header className="top-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-3 px-4">
        <div className="top-nav__left flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">VV</div>
          <div className="hidden md:block">
            <div className="text-sm font-extrabold" style={{ color: 'var(--text)' }}>Vinicius Valle</div>
            <div className="text-[11px] text-muted -mt-0.5">Software Developer</div>
          </div>
        </div>

        {/* Desktop nav (invisível no mobile) */}
        <nav className="top-nav__center hidden md:flex gap-6 items-center" aria-label="Main navigation">
          {items.map(it => (
            <button
              key={it.id}
              onClick={() => handleNavClick(it.id)}
              className={`text-sm transition-colors duration-150 ${activeTab === it.id ? 'text-primary cursor-pointer' : 'text-muted hover:text-slate-200 hover:bg-slate-800/50 cursor-pointer'} px-2 py-1 rounded`}
              aria-current={activeTab === it.id ? 'page' : undefined}
            >
              {it.label}
            </button>
          ))}
        </nav>

        <div className="top-nav__right flex items-center gap-3">
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            {/* ícone simples: três barras ou X */}
            <span className="sr-only">Menu</span>
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>

          <div className="hidden md:block">
            {/* Espaço para futuros CTAs ou ícones */}
          </div>
        </div>
      </div>

      {/* Mobile menu: painel fixo abaixo da topbar */}
      <div
        className={`mobile-menu fixed left-0 right-0 bg-[#071023] shadow-xl border-t border-slate-800/60 transform transition-transform duration-200 ease-in-out ${mobileOpen ? 'mobile-open' : 'mobile-closed'}`}
        style={{ top: 'var(--topnav-height,64px)', zIndex: 49 }}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
      >
        <div className="max-w-5xl mx-auto px-4 py-4">
          <nav className="grid grid-cols-1 gap-2">
            {items.map(it => (
              <button
                key={it.id}
                onClick={() => handleNavClick(it.id)}
                className={`w-full text-left py-3 px-3 rounded-md text-base ${activeTab === it.id ? 'tab-color-contact cursor-pointer' : 'text-muted hover:text-slate-200 hover:bg-slate-800/50 cursor-pointer'}`}
              >
                {it.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
