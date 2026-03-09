import React, { useState } from 'react';
import { Folder } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  date: string;
  summary: string;
  tech: string[];
  featured: boolean;
  link?: string; // nome do repo ou caminho curto (opcional)
  publicLink?: string | null; // URL completa para repositório/demo público (opcional)
  borderColor: string;
}

export const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const allProjects: Project[] = [
    {
      id: 1,
      name: 'Mei De Saqua',
      date: '2026',
      summary: 'Portal completo para microempreendedores de Saquarema: frontend responsivo com painel de gerenciamento, páginas públicas de negócios, buscas e filtros, além de interfaces para cadastro e comunicação. O backend suporta integrações e dados em produção, porém é privado e não está publicado — entre em contato para demonstração ou acesso restrito.',
      tech: ['TypeScript', 'Node.js', 'Docker', 'React'],
      featured: true,
      publicLink: 'https://github.com/viniciusvalledev',
      borderColor: '#5b686d'
    },
    {
      id: 2,
      name: 'Aqui Tem ODS',
      date: '2026',
      summary: 'Plataforma educativa para divulgação dos Objetivos de Desenvolvimento Sustentável (ODS): frontend com navegação por metas, páginas de conteúdo, filtros, e recursos interativos voltados para acessibilidade e performance. O sistema de gestão de conteúdo e APIs estão em infraestrutura privada e não são publicados publicamente.',
      tech: ['TypeScript', 'Node.js', 'MySQL', 'React'],
      featured: true,
      publicLink: 'https://github.com/viniciusvalledev',
      borderColor: '#6699CC'
    },
    {
      id: 3,
      name: 'Explore Saqua',
      date: '2025',
      summary: 'Projeto end-to-end para exploração de pontos e eventos locais: frontend responsivo com mapas interativos, listagens e filtros, e backend completo para gerenciamento de dados, autenticação e APIs. Implementação entregue como solução ponta a ponta.',
      tech: ['TypeScript', 'Node.js', 'MySQL', 'React'],
      featured: false,
      publicLink: 'https://github.com/viniciusvalledev',
      borderColor: '#6699CC'
    },
    {
      id: 4,
      name: 'Apaixone-Se',
      date: '2025',
      summary: 'Projeto end-to-end que conecta usuários a experiências locais: inclui frontend para descoberta e curadoria e backend para gerenciamento de usuários, recomendações e integrações de terceiros. Solução entregue completa (front + back).',
      tech: ['TypeScript', 'Node.js', 'MySQL', 'React'],
      featured: false,
      publicLink: 'https://github.com/viniciusvalledev',
      borderColor: '#6699CC'
    },
    {
      id: 5,
      name: 'order-api',
      date: '2026',
      summary: 'API para gerenciamento de pedidos, rotas REST e validação de dados.',
      tech: ['Node.js', 'Express', 'JavaScript'],
      featured: false,
      link: 'order-api',
      borderColor: '#6699CC'
    },
    {
      id: 6,
      name: 'Cabo Frio Outlet',
      date: '2025',
      summary: 'Sistema backend para multimarcas com lógica de inventário e pedidos.',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      featured: false,
      link: 'caboFrioOutlet-Back',
      borderColor: '#6699CC'
    },
    {
      id: 7,
      name: 'Jogo-ODS-ONU',
      date: '2025',
      summary: 'Interface interativa para apresentar os 17 Objetivos de Desenvolvimento Sustentável.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      featured: false,
      link: 'Jogo-ODS-ONU',
      borderColor: '#6699CC'
    },
    {
      id: 8,
      name: 'Product-Control-Back',
      date: '2025',
      summary: 'API em Java para controle de produtos, inventário e operações CRUD.',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      featured: false,
      link: 'Product-Control-Back',
      borderColor: '#6699CC'
    },
    {
      id: 9,
      name: 'Product-Control-Front',
      date: '2025',
      summary: 'Frontend de gestão de produtos com filtros, tabelas e integração com o backend.',
      tech: ['React', 'TypeScript', 'Vite'],
      featured: false,
      link: 'Product-Control-Front',
      borderColor: '#6699CC'
    },
    {
      id: 10,
      name: 'avs-store',
      date: '2025',
      summary: 'Loja online de exemplo com catálogo e carrinho simples.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      featured: false,
      link: 'avs-store',
      borderColor: '#6699CC'
    },
    {
      id: 11,
      name: 'SaaS-controle-financeiro',
      date: '2025',
      summary: 'Plataforma SaaS para controle financeiro com dashboards e relatórios.',
      tech: ['JavaScript', 'Node.js', 'MongoDB'],
      featured: false,
      link: 'SaaS-controle-financeiro',
      borderColor: '#6699CC'
    },
    {
      id: 12,
      name: 'CRUD-simples-em-java',
      date: '2025',
      summary: 'Exemplo simples de CRUD em Java para demonstrar conceitos básicos.',
      tech: ['Java'],
      featured: false,
      link: 'CRUD-simples-em-java',
      borderColor: '#6699CC'
    }
  ];

  const tentativePerPage = 6;
  const idxLastWith6 = currentPage * tentativePerPage;
  const idxFirstWith6 = idxLastWith6 - tentativePerPage;
  const sliceWith6 = allProjects.slice(idxFirstWith6, idxLastWith6);
  const projectsPerPage = sliceWith6.some(p => p.featured) ? 5 : 6;

  const totalPages = Math.max(1, Math.ceil(allProjects.length / projectsPerPage));
  const effectivePage = Math.min(Math.max(1, currentPage), totalPages);

  const indexOfLastProject = effectivePage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <div className="animate-fade-in space-y-6 py-4">
      <div className="flex items-center gap-4 mb-10">
        <Folder className="text-blue-500 w-5 h-5" strokeWidth={1.5} />
        <div className="flex flex-col items-start">
          <p className="text-[10px] font-mono tracking-[0.3em] text-blue-500 uppercase mb-1">Professional</p>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            <span className="text-gray-500 font-mono font-normal">{"<"}</span>
            Projects
            <span className="text-gray-500 font-mono font-normal">{"/>"}</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-flow-row-dense auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Renderizar featured primeiro para prevenir quebra de layout quando featured estiver em posições arbitrárias */}
        {(() => {
          const featuredThisPage = currentProjects.filter(fp => fp.featured);
          const normalThisPage = currentProjects.filter(fp => !fp.featured);
          const renderOrder = [...featuredThisPage, ...normalThisPage];

          return renderOrder.map((p) => {
            const githubBase = 'https://github.com/viniciusvalledev';
            let repoUrl: string | null = null;
            if (p.publicLink) {
              repoUrl = p.publicLink;
            } else if (p.link && !/back$/i.test(p.link)) {
              repoUrl = `${githubBase}/${p.link}`;
            } else {
              repoUrl = null;
            }
            const featuredIndex = p.featured ? featuredThisPage.findIndex(fp => fp.id === p.id) : -1;
            
            if (p.featured) {
              // Primeiro featured da página: ocupa 2 colunas em lg
              if (featuredIndex === 0) {
                const content = (
                  <div
                    className="lg:col-span-2 lg:row-span-2 bg-[#0b101e] p-6 flex flex-col h-full relative transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.01] group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] featured-left"
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
                  <a key={p.id} href={repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} repository`} className="lg:col-span-2 lg:row-span-2 no-underline block group">
                    {content}
                  </a>
                ) : (
                  <div key={p.id} className="lg:col-span-2 lg:row-span-2">{content}</div>
                );
              }

              // Segundo featured da página: ocupa 1 coluna em lg, mas recebe maior altura para preencher visualmente
              if (featuredIndex === 1) {
                const content = (
                  <div
                    className="lg:row-span-2 bg-[#0b101e] p-6 flex flex-col h-full transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.01] group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] featured-left"
                  >
                   <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tight mb-2">Repository</span>
                   <h3 className="text-white text-xl font-bold leading-tight mb-2">{p.name}</h3>
                   <span className="font-mono text-[9px] text-gray-500 mb-4">{p.date}</span>

                   <p className="text-[12px] text-gray-400 leading-relaxed mb-6 font-light">{p.summary}</p>

                   <div className="mt-auto">
                     <div className="flex flex-wrap gap-1 mb-4">
                       {p.tech.map((tag) => (
                         <span key={tag} className="font-mono text-[9px] px-2 py-0.5 bg-[#121929] border border-white/5 text-gray-400 uppercase">
                           {tag}
                         </span>
                       ))}
                     </div>
                     <div className="text-zinc-500 text-[9px] font-mono uppercase tracking-widest border-t border-zinc-800/50 pt-3 w-full text-left transition-colors">
                       View Repository →
                     </div>
                   </div>
                 </div>
                );

                return repoUrl ? (
                  <a key={p.id} href={repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} repository`} className="no-underline block group lg:col-span-1 lg:row-span-2">
                    {content}
                  </a>
                ) : (
                  <div key={p.id} className="group lg:col-span-1 lg:row-span-2">{content}</div>
                );
              }

              // Outros featured (3º, 4º, ...) usam o estilo do primeiro por padrão
              const content = (
                <div
                  className="lg:col-span-2 bg-[#0b101e] p-6 flex flex-col h-full relative transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.01] group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] featured-left"
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
                className="bg-[#0b101e] border p-5 flex flex-col justify-between transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.01] group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] h-full"
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
          });
        })()}
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