import React from 'react';

interface AboutProps {
  skills: string[];
}

export const About: React.FC<AboutProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in items-start">
      {/* Skills */}
      <div className="md:col-span-2 bg-[#0b101e]/60 backdrop-blur-sm card-border-custom p-4 md:p-6 border-slate-800/60 ring-1 ring-transparent hover:ring-blue-400/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-shadow">
        <h3 className="text-xs text-slate-500 font-mono tracking-widest mb-6 uppercase">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <span key={skill} className="bg-[#121929] border border-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-[11px] font-mono hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Certificações */}
      <div className="bg-[#0b101e]/60 backdrop-blur-sm card-border-custom p-4 md:p-6 border-slate-800/60 ring-1 ring-transparent hover:ring-blue-400/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-shadow">
        <h3 className="text-xs text-slate-500 font-mono tracking-widest mb-6 uppercase">Certificações</h3>
        <div className="flex gap-4 items-center justify-center h-20">
           {/* Seus links de certificados aqui */}
           <div className="text-[10px] text-slate-500 font-mono text-center">Java POO & English Master</div>
        </div>
      </div>

      {/* Formação */}
      <div className="md:col-span-2 bg-[#0b101e]/60 backdrop-blur-sm card-border-custom p-4 md:p-6 border-slate-800/60 ring-1 ring-transparent hover:ring-blue-400/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-shadow">
        <h3 className="text-xs text-slate-500 font-mono tracking-widest mb-6 uppercase">Formação</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-slate-100 font-bold text-2xl mb-2">Bacharelado em Ciência da Computação</h4>
            <a href="#" className="text-blue-500 text-lg font-medium inline-block mb-3">UNESA - Universidade Estácio de Sá</a>

            <div className="mt-4 text-[12px] font-mono text-slate-500 flex items-center gap-3">
              <span>Jan 2023 — Nov 2026</span>
              <span className="inline-block w-1 h-px bg-slate-700/60 rounded" />
              <span>7°/8° Período</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="bg-[#0b101e]/60 backdrop-blur-sm card-border-custom status-box border-slate-800/60 ring-1 ring-transparent hover:ring-blue-400/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-shadow">
        <h3 className="text-xs text-slate-500 font-mono tracking-widest mb-6 uppercase">Status</h3>
        <div className="status-list text-sm font-mono text-slate-300">
          <div className="status-item">
            <span className="status-dot bg-green-500 animate-pulse" />
            <span>Disponível para conversas</span>
          </div>
          <div className="status-item">
            <span className="status-dot bg-blue-500" />
            <span>Rio de Janeiro, RJ</span>
          </div>
          <div className="status-item">
            <span className="status-dot bg-orange-500" />
            <span className="font-bold">Software Developer Jr.</span>
          </div>
        </div>
      </div>
    </div>
  );
};