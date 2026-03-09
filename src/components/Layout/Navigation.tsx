import React from 'react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ['about', 'experience', 'certification', 'projects', 'contact'];

  const getTabClass = (tabName: string) => {
    const baseClass = "pb-2 font-mono tracking-widest text-xs transition-all cursor-pointer uppercase ";
    if (activeTab === tabName) {
      return baseClass + "text-blue-400 border-b-2 border-blue-500 font-semibold";
    }
    return baseClass + "text-slate-500 border-b-2 border-transparent hover:text-slate-300";
  };

  return (
    <div className="border-b border-slate-800/80">
      <nav className="flex gap-4 md:gap-6 px-1">
        {tabs.map(tab => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)} 
            className={getTabClass(tab)}
          >
            [{tab}]
          </button>
        ))}
      </nav>
    </div>
  );
};