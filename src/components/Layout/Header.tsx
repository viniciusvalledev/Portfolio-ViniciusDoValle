import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  const fullName = 'Vinicius Valle';
  const [typedName, setTypedName] = useState('');

  useEffect(() => {
    let mounted = true;
    let i = 0;
    const speed = 90;

    const tick = () => {
      if (!mounted) return;
      setTypedName(fullName.slice(0, i));
      i += 1;
      if (i <= fullName.length) {
        setTimeout(tick, speed);
      }
    };

    setTypedName('');
    tick();

    return () => { mounted = false; };
  }, [fullName]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-[#0b101e] border border-slate-800/80 rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="relative shrink-0">
          {/* Foto de perfil - altere o src para a imagem em public/ que desejar */}
          <img src="/foto-perfil.jpeg" alt="Vinicius Valle" className="w-32 h-32 rounded-full border border-slate-700 object-cover" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#0b101e] px-2 py-0.5 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            <span className="text-[10px] font-bold tracking-widest text-green-500 uppercase">Online</span>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="text-blue-500 font-mono text-xs font-bold tracking-widest mb-2">
            &lt;/&gt; SOFTWARE_DEVELOPER
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight">
            <span className="text-slate-600 font-mono font-normal">&lt;</span>
            <span className="inline-block">
              {typedName}
              <span className="type-cursor" aria-hidden="true" />
            </span>
            <span className="text-slate-600 font-mono font-normal">/&gt;</span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-md">
            Desenvolvedor de Software focado em Java, Node.js e Web development.
          </p>
          {/* Localização com ícone */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-slate-500 font-mono uppercase tracking-widest">
            <MapPin className="w-4 h-4 text-slate-500" strokeWidth={1.5} />
            Saquarema, RJ
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {[
          { label: 'Atuação Atual', title: 'Prefeitura de Saquarema', sub: 'FullStack Dev', image: '/pref-saqua.jpg' },
          { label: 'Projetos Ativos', title: 'Portal MEIs & Outlet API', sub: 'Java / Node.js' },
          { label: 'Idiomas', title: 'Cultura Inglesa', sub: 'Master 1 (C1/C2)' },
        ].map((item, idx) => (
          <div key={idx} className={`group ${item.image ? 'image-card' : 'bg-[#0b101e] card-border-custom'} rounded-xl overflow-hidden`}>
            {item.image ? (
              <div className="relative h-24 sm:h-20">
                <div className="card-image" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="card-overlay" />
                <div className="card-content">
                  <div>
                    <div className="card-label">{item.label}</div>
                    <div className="card-title">{item.title}</div>
                    <div className="card-sub">{item.sub}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#0b101e] card-border-custom rounded-xl p-4 flex items-center justify-between group">
                <div>
                  <div className="text-[10px] text-blue-500 font-mono font-bold tracking-widest mb-1 uppercase">{item.label}</div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">{item.title}</div>
                  <div className="text-xs text-slate-500">{item.sub}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};