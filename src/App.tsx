import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

const [currentPage, setCurrentPage] = useState(1);
const projectsPerPage = 4;

  const skills = [
    'Java', 'Spring Boot', 'Node.js', 'TypeScript', 
    'PostgreSQL', 'MySQL', 'Docker', 'Git'
  ];

  const getTabClass = (tabName: string) => {
    const baseClass = "pb-4 font-mono tracking-widest text-sm transition-all cursor-pointer ";
    if (activeTab === tabName) {
      return baseClass + "text-blue-400 border-b-2 border-blue-500 font-semibold";
    }
    return baseClass + "text-slate-500 border-b-2 border-transparent hover:text-slate-300";
  };

  // ================= CONTEÚDO DAS ABAS =================

  const renderAbout = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in items-start">
      {/* Skills */}
      <div 
        className="md:col-span-2 bg-[#0b101e] card-border-custom p-6 md:p-8"
        style={{ '--border-color': '#334155' } as React.CSSProperties}
      >
        <h3 className="text-xs text-slate-500 font-mono tracking-widest mb-6 uppercase">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <span key={skill} className="bg-[#121929] border border-slate-800 text-slate-300 px-4 py-2 rounded-md text-xs font-mono hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Certificações */}
      <div 
        className="bg-[#0b101e] card-border-custom p-6 md:p-8"
        style={{ '--border-color': '#334155' } as React.CSSProperties}
      >
        <h3 className="text-xs text-slate-500 font-mono tracking-widest mb-6 uppercase">Certificações</h3>
        <div className="flex gap-4 items-center justify-center h-24">
          <a 
            href="https://cursos.alura.com.br/formalCertificate/e94b5dd6-8f74-4c26-9c18-5d7b25e8125c" 
            target="_blank" 
            rel="noreferrer"
            className="w-20 h-20 rounded border border-slate-700 bg-[#121929] flex flex-col items-center justify-center opacity-70 hover:opacity-100 hover:border-blue-500/50 transition-all cursor-pointer text-center p-2 group"
          >
            <div className="w-8 h-8 mb-1 flex items-center justify-center">
               <svg className="w-full h-full text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <span className="text-[8px] font-bold text-slate-300 group-hover:text-blue-400 transition-colors leading-tight">Java - POO</span>
            <span className="text-[7px] text-slate-500 uppercase tracking-tighter">Alura</span>
          </a>

          <a 
            href="https://www.culturainglesa.com.br/" 
            target="_blank" 
            rel="noreferrer"
            className="w-20 h-20 rounded border border-slate-700 bg-[#121929] flex flex-col items-center justify-center opacity-70 hover:opacity-100 hover:border-blue-500/50 transition-all cursor-pointer text-center p-2 group"
          >
            <div className="w-8 h-8 mb-1 flex items-center justify-center">
               <svg className="w-full h-full text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.583a.962.962 0 01-1.293.049l-3.344-3c-.387-.348-.387-.92 0-1.268l3.344-3a.962.962 0 011.293.049c.35.316.35.82 0 1.136L7.474 9.5l2.574 2.311c.35.316.35.82 0 1.136z"></path></svg>
            </div>
            <span className="text-[8px] font-bold text-slate-300 group-hover:text-blue-400 transition-colors leading-tight">English Master</span>
            <span className="text-[7px] text-slate-500 uppercase tracking-tighter">Cultura</span>
          </a>
        </div>
      </div>

      {/* Formação */}
      <div 
        className="md:col-span-2 bg-[#0b101e] card-border-custom p-6 md:p-8"
        style={{ '--border-color': '#334155' } as React.CSSProperties}
      >
        <h3 className="text-xs text-slate-500 font-mono tracking-widest mb-6 uppercase">Formação</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-slate-100 font-bold text-lg mb-1">Java POO</h4>
            <div className="text-blue-500 text-sm font-medium mb-2">Alura</div>
            <div className="text-xs text-slate-500 font-mono">Concluído • Foco em programação orientada a objetos</div>
          </div>
          <div className="h-px bg-slate-800/80 w-full"></div>
          <div>
            <h4 className="text-slate-100 font-bold text-lg mb-1">Inglês Avançado</h4>
            <div className="text-blue-500 text-sm font-medium mb-2">Cultura Inglesa</div>
            <div className="text-xs text-slate-500 font-mono italic">Nível Master 1 (C1/C2)</div>
          </div>
        </div>
      </div>

      {/* Status */}
      <div 
        className="bg-[#0b101e] card-border-custom p-6 md:p-8 h-fit"
        style={{ '--border-color': '#334155' } as React.CSSProperties}
      >
        <h3 className="text-xs text-slate-500 font-mono tracking-widest mb-6 uppercase">Status</h3>
        <ul className="space-y-4 text-sm font-mono text-slate-400">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
            <span>Disponível para oportunidades e freelancer</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 shrink-0 rounded-full bg-blue-500"></span>
            <span>Saquarema, RJ</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 shrink-0 rounded-full bg-orange-500"></span>
            <span>FullStack Dev</span>
          </li>
        </ul>
      </div>
    </div>
  );

 const renderExperience = () => (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        <h2 className="text-3xl font-bold text-slate-100 tracking-tight flex items-center gap-1">
          <span className="text-slate-600 font-mono font-normal">&lt;</span>Experience<span className="text-slate-600 font-mono font-normal">/&gt;</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div 
          className="bg-[#0b101e] card-border-custom p-8 rounded-2xl relative"
          style={{ 
            '--border-color': '#00827B', // Mude aqui a cor da borda
            '--title-color': '#00827B'   // Mude aqui a cor do título (ex: azul, laranja)
          } as React.CSSProperties}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              {/* Agora este título aceita a cor que você definir no style acima */}
              <div 
                className="font-bold text-sm mb-1 transition-colors"
                style={{ color: 'var(--title-color)' }}
              >
                Prefeitura de Saquarema
              </div>
              <h3 className="text-slate-100 font-bold text-xl">Estagiário FullStack</h3>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-green-500 uppercase bg-green-500/10 px-2 py-1 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Atual
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
            Desenvolvimento Full Stack de sistemas municipais, atuando desde a modelagem de dados até a entrega de interfaces completas para a gestão pública.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {['TypeScript', 'React', 'Node.js', 'MySQL'].map(t => (
              <span key={t} className="bg-[#121929] border border-slate-800 px-2 py-1 rounded text-slate-300">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

const renderProjects = () => {
    const allProjects = [
      {
        id: 1,
        name: 'Portal MEIs de Saqua BackEnd',
        date: 'Agosto 2025 - Atual',
        summary: 'Arquitetura de backend escalável para suporte aos Microempreendedores Individuais de Saquarema. Focado em alta disponibilidade e integridade de dados governamentais.',
        tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
        featured: true,
        link: 'MeiDeSaqua-Back',
        borderColor: '#3b82f6'
      },
      {
        id: 2,
        name: 'Cabofrio Outlet Back',
        date: 'Dezembro 2024 - Atual',
        summary: 'Sistema de backend para e-commerce de moda, implementando lógica complexa de inventário, processamento de pedidos e integração de banco de dados relacional.',
        tech: ['Java', 'Spring Boot', 'MySQL'],
        featured: false,
        link: 'caboFrioOutlet-Back',
        borderColor: '#334155'
      },
      {
        id: 3,
        name: 'E-commerce Drops',
        date: 'Novembro 2025',
        summary: 'Frontend moderno para lançamentos de vestuário com contador regressivo em tempo real e controle visual de estoque esgotado.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
        featured: false,
        link: '',
        borderColor: '#334155'
      },
      {
        id: 4,
        name: 'Painel Jogo ODS ONU',
        date: 'Setembro 2025',
        summary: 'Interface interativa desenvolvida para apresentar e educar sobre os 17 Objetivos de Desenvolvimento Sustentável da ONU.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        featured: false,
        link: 'Jogo-ODS-ONU',
        borderColor: '#334155'
      },
      {
        id: 5,
        name: 'MeiDeSaqua-Front',
        date: '2025',
        summary: 'Interface do usuário para o portal de Microempreendedores, focada em acessibilidade e facilidade de uso para os cidadãos.',
        tech: ['React', 'TypeScript', 'Tailwind'],
        featured: false,
        link: 'MeiDeSaqua-Front',
        borderColor: '#334155'
      }
    ];

    // Lógica para cortar a lista de projetos baseada na página atual
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(allProjects.length / projectsPerPage);

    return (
      <div className="animate-fade-in space-y-10">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2v10z" />
          </svg>
          <h2 className="text-3xl font-bold text-white tracking-tight">&lt;Projects/&gt;</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentProjects.map((p) => (
            <div
              key={p.id}
              className="bg-[#0b101e] card-border-custom p-8 md:p-12 rounded-2xl transition-all relative flex flex-col min-h-[450px]"
              style={{ '--border-color': p.borderColor } as React.CSSProperties}
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] text-zinc-500 font-mono tracking-[0.3em] uppercase">
                  {p.featured ? 'Featured Project' : 'Repository'}
                </span>
                {p.featured && (
                  <div className="bg-blue-500/10 text-blue-500 text-[9px] font-mono border border-blue-500/30 px-3 py-1 rounded uppercase tracking-widest font-bold">
                    Destaque
                  </div>
                )}
              </div>

              <div className="mb-8">
                <h3 className="text-white text-3xl font-bold tracking-tighter mb-3">
                  {p.name}
                </h3>
                <p className="text-zinc-500 font-mono text-[10px] tracking-wide uppercase">{p.date}</p>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-10 font-light">
                {p.summary}
              </p>

              <div className="mt-auto space-y-8">
                {/* Tags Técnicas em caixas individuais */}
                <div className="flex flex-wrap gap-2.5">
                  {p.tech.map((t) => (
                    <span key={t} className="bg-[#121929] border border-zinc-800 px-3 py-1 rounded text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Botão para o GitHub */}
                {p.link && (
                  <button
                    onClick={() => window.open(`https://github.com/viniciusvalledev/${p.link}`, '_blank')}
                    className="flex items-center gap-2 text-zinc-500 hover:text-blue-400 transition-colors text-[10px] font-mono tracking-widest uppercase group/btn border-t border-zinc-800/50 pt-6 w-full"
                  >
                    <span>View Repository</span>
                    <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Controles de Paginação */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-8 pt-12 border-t border-zinc-800/30">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="p-2 text-zinc-500 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            
            <span className="font-mono text-[10px] text-zinc-500 tracking-[0.3em] uppercase">
              {currentPage} / {totalPages}
            </span>

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="p-2 text-zinc-500 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        )}
      </div>
    );
  };
  const renderContact = () => (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path></svg>
        <h2 className="text-3xl font-bold text-slate-100 tracking-tight flex items-center gap-1">
          <span className="text-slate-600 font-mono font-normal">&lt;</span>Contact<span className="text-slate-600 font-mono font-normal">/&gt;</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a 
          href="mailto:contatoviniciusvalledev@gmail.com"
          className="bg-[#0b101e] card-border-custom p-6 flex flex-col justify-between h-48 hover:border-blue-500/50 transition-colors group cursor-pointer"
          style={{ '--border-color': '#334155' } as React.CSSProperties}
        >
          <div className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">Email</div>
          <div>
            <svg className="w-6 h-6 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <div className="text-slate-300 text-sm font-mono group-hover:text-blue-400 transition-colors">
              contatoviniciusvalledev@gmail.com
            </div>
          </div>
        </a>

        <a 
          href="https://discord.com/users/viniciusvalledev" 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#0b101e] card-border-custom p-6 flex flex-col justify-between h-48 hover:border-blue-500/50 transition-colors group cursor-pointer"
          style={{ '--border-color': '#334155' } as React.CSSProperties}
        >
          <div className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">Discord</div>
          <div>
            <svg className="w-6 h-6 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            <div className="text-slate-300 text-sm font-mono group-hover:text-blue-400 transition-colors leading-tight">viniciusvalledev</div>
          </div>
        </a>

        <a 
          href="https://linkedin.com/in/viniciusvalledev" 
          target="_blank" 
          rel="noreferrer"
          className="bg-[#0b101e] card-border-custom p-6 flex flex-col justify-between h-48 hover:border-blue-500/50 transition-colors group cursor-pointer"
          style={{ '--border-color': '#334155' } as React.CSSProperties}
        >
          <div className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">LinkedIn</div>
          <div>
            <svg className="w-6 h-6 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <div className="text-slate-300 text-sm font-mono group-hover:text-blue-400 transition-colors">in/viniciusvalledev</div>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#060913] text-slate-400 font-sans p-4 md:p-8 selection:bg-blue-500/30 selection:text-blue-200">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* ================= TOPO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#0b101e] border border-slate-800/80 rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative shrink-0">
              <div className="w-32 h-32 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-slate-700 text-xs font-mono">
                PHOTO.JPG
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#0b101e] px-2 py-0.5 rounded-full border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                <span className="text-[10px] font-bold tracking-widest text-green-500 uppercase">Online</span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="text-blue-500 font-mono text-xs font-bold tracking-widest mb-2">
                &lt;/&gt; SOFTWARE_ENGINEER
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight">
                <span className="text-slate-600 font-mono font-normal">&lt;</span>
                Vinicius Valle
                <span className="text-slate-600 font-mono font-normal">/&gt;</span>
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-md">
                Desenvolvedor FullStack focado em construir sistemas escaláveis, APIs robustas e arquitetura de banco de dados eficientes com Java e Node.js.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-slate-500 font-mono uppercase tracking-widest">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                Saquarema, RJ
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#0b101e] border border-slate-800/80 rounded-xl p-4 flex items-center justify-between group">
              <div>
                <div className="text-[10px] text-blue-500 font-mono font-bold tracking-widest mb-1 uppercase">Atuação Atual</div>
                <div className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">Prefeitura de Saquarema</div>
                <div className="text-xs text-slate-500">FullStack Dev (Intern)</div>
              </div>
            </div>
            <div className="bg-[#0b101e] border border-slate-800/80 rounded-xl p-4 flex items-center justify-between group">
              <div>
                <div className="text-[10px] text-blue-500 font-mono font-bold tracking-widest mb-1 uppercase">Projetos Ativos</div>
                <div className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">Portal MEIs & Outlet API</div>
                <div className="text-xs text-slate-500">Java / Node.js</div>
              </div>
            </div>
            <div className="bg-[#0b101e] border border-slate-800/80 rounded-xl p-4 flex items-center justify-between group">
              <div>
                <div className="text-[10px] text-blue-500 font-mono font-bold tracking-widest mb-1 uppercase">Idiomas</div>
                <div className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">Cultura Inglesa</div>
                <div className="text-xs text-slate-500">Master 1 (C1/C2)</div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= NAVEGAÇÃO ================= */}
        <div className="border-b border-slate-800/80">
          <nav className="flex gap-6 md:gap-8 px-2">
            {['about', 'experience', 'projects', 'contact'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={getTabClass(tab)}>
                [{tab}]
              </button>
            ))}
          </nav>
        </div>

        {/* ================= ÁREA DINÂMICA ================= */}
        <div className="min-h-[400px]">
          {activeTab === 'about' && renderAbout()}
          {activeTab === 'experience' && renderExperience()}
          {activeTab === 'projects' && renderProjects()}
          {activeTab === 'contact' && renderContact()}
        </div>

        {/* ================= FOOTER ================= */}
        <footer className="pt-8 pb-4 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-slate-600 uppercase tracking-widest">
          <p>© 2026 VINICIUS_VALLE // TODOS OS DIREITOS RESERVADOS</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://github.com/viniciusvalledev" className="hover:text-blue-400 transition-colors">github</a>
            <a href="https://linkedin.com/in/viniciusvalledev" className="hover:text-blue-400 transition-colors">linkedin</a>
          </div>
        </footer>
      </div>
    </div>
  );
}