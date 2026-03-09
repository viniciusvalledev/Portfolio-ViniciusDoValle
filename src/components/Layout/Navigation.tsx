import React from 'react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'certification', label: 'Certification' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const getTabClass = (tabName: string, isContact = false) => {
    const base = "font-mono tracking-widest text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer";
    // mobile: botões em duas colunas, alvo de toque maior
    const mobile = isContact ? "w-3/4 text-center py-3 rounded-lg" : "w-full text-center py-3 rounded-lg";
    // desktop volta a ser inline e menor
    const desktop = "md:w-auto md:inline-flex md:py-2 md:px-1";

    if (activeTab === tabName) {
      return `${base} ${mobile} ${desktop} bg-gradient-to-r from-blue-900/25 to-transparent text-blue-300 border border-blue-600 shadow-inner font-semibold`;
    }

    return `${base} ${mobile} ${desktop} text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent`;
  };

  return (
    <div className="border-b border-slate-800/80">
      {/* Em mobile usamos grid 2 colunas para facilitar toques; em md volta para flex horizontal */}
      <nav className="grid grid-cols-2 gap-2 px-3 py-2 md:flex md:flex-wrap md:gap-6">
        {tabs.map(tab => {
          const isContact = tab.id === 'contact';
          // wrapper aplica col-span-2 para centralizar o contact em mobile
          const wrapperClass = isContact ? 'col-span-2 flex justify-center md:col-auto' : '';
          return (
            <div key={tab.id} className={wrapperClass}>
              <button
                type="button"
                aria-pressed={activeTab === tab.id}
                aria-label={tab.label}
                onClick={() => setActiveTab(tab.id)}
                className={getTabClass(tab.id, isContact)}
              >
                {`[${tab.label}]`}
              </button>
            </div>
          );
        })}
      </nav>
    </div>
  );
};