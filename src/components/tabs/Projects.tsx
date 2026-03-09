import React, { useState } from 'react';
import { Folder } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  date: string;
  summary: string;
  tech: string[];
  featured: boolean;
  link: string;
  borderColor: string;
}

export const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const allProjects: Project[] = [
    {
      id: 1,
      name: 'Portal MEIs de Saqua BackEnd',
      date: 'Agosto 2025 - Atual',
      summary: 'Arquitetura de backend escalável para suporte aos Microempreendedores de Saquarema. Focado em alta disponibilidade.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      featured: true,
      link: 'MeiDeSaqua-Back',
      borderColor: '#3b82f6'
    },
    {
      id: 2,
      name: 'Cabofrio Outlet Back',
      date: 'Dezembro 2024',
      summary: 'Sistema de backend para e-commerce de moda, com lógica de inventário e pedidos.',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      featured: false,
      link: 'caboFrioOutlet-Back',
      borderColor: '#334155'
    },
    {
      id: 3,
      name: 'E-commerce Drops',
      date: 'Novembro 2025',
      summary: 'Frontend moderno para lançamentos de vestuário com contador regressivo em tempo real.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      featured: false,
      link: '',
      borderColor: '#334155'
    },
    {
      id: 4,
      name: 'Painel Jogo ODS ONU',
      date: 'Setembro 2025',
      summary: 'Interface interativa desenvolvida para apresentar os 17 Objetivos de Desenvolvimento Sustentável.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      featured: false,
      link: 'Jogo-ODS-ONU',
      borderColor: '#334155'
    }
  ];

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  return (
    <div className="animate-fade-in space-y-6 py-4">
      <div className="flex items-center gap-4 mb-10">
        <Folder className="text-blue-500 w-5 h-5" strokeWidth={1.5} />
        <h2 className="text-2xl font-bold text-white tracking-tight">
          <span className="text-gray-500 font-mono font-normal">{"<"}</span>
          Projects
          <span className="text-gray-500 font-mono font-normal">{"/>"}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {currentProjects.map((p) => {
          const repoUrl = p.link ? `https://github.com/viniciusvalledev/${p.link}` : null;

          if (p.featured) {
            const content = (
              <div
                className="lg:col-span-2 bg-[#0b101e] border border-slate-800/50 p-6 flex flex-col min-h-[320px] relative transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.01] group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] featured-left"
              >
                <span className="text-[9px] text-zinc-500 font-mono tracking-[0.2em] uppercase mb-3">Featured Project</span>
                <h3 className="text-white text-xl font-bold tracking-tighter mb-1">{p.name}</h3>
                <p className="text-zinc-500 font-mono text-[9px] uppercase mb-4">{p.date}</p>
                <p className="text-[12px] text-zinc-400 leading-relaxed mb-6 font-light">{p.summary}</p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => (
                      <span key={t} className="bg-[#121929] border border-zinc-800 px-2 py-0.5 text-[9px] font-mono text-zinc-400 uppercase">{t}</span>
                    ))}
                  </div>
                  <div className="text-zinc-500 text-[9px] font-mono uppercase tracking-widest border-t border-zinc-800/50 pt-3 w-full text-left transition-colors">
                    View Repository →
                  </div>
                </div>
              </div>
            );

            return repoUrl ? (
              <a key={p.id} href={repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} repository`} className="lg:col-span-2 no-underline block group">
                {content}
              </a>
            ) : (
              <div key={p.id}>{content}</div>
            );
          }

          const card = (
            <div
              className="bg-[#0b101e] border p-5 flex flex-col justify-between transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.01] group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] min-h-[200px]"
              style={{ borderColor: p.borderColor, borderLeftWidth: '4px' }}
            >
              <div>
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tight">Repository</span>
                <h3 className="text-sm font-bold text-white leading-tight mt-1 mb-1">{p.name}</h3>
                <span className="font-mono text-[9px] text-gray-500">{p.date}</span>
              </div>
              
              <p className="text-[11px] text-gray-400 line-clamp-3 font-light leading-relaxed my-3">
                {p.summary}
              </p>

              <div className="flex flex-wrap gap-1">
                {p.tech.map((tag) => (
                  <span key={tag} className="font-mono text-[9px] px-2 py-0.5 bg-[#121929] border border-white/5 text-gray-400 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );

          return repoUrl ? (
            <a key={p.id} href={repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} repository`} className="no-underline block group" style={{ display: 'block' }}>
              {card}
            </a>
          ) : (
            <div key={p.id} className="group">{card}</div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-6 pt-8">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="text-[10px] text-gray-500 hover:text-white disabled:opacity-20 uppercase font-mono tracking-widest transition-colors">Prev</button>
          <span className="font-mono text-[10px] text-gray-600">{currentPage} / {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} className="text-[10px] text-gray-500 hover:text-white disabled:opacity-20 uppercase font-mono tracking-widest transition-colors">Next</button>
        </div>
      )}
    </div>
  );
};