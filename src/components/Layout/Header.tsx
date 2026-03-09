import React, { useEffect, useState } from 'react';

interface HeaderProps {
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ setActiveTab }) => {
  const fullName = 'Vinicius Valle';
  const [typedName, setTypedName] = useState('');

  useEffect(() => {
    let mounted = true;
    let i = 0;
    const speed = 70;

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
    <section className="hero grid grid-cols-1 md:grid-cols-8 gap-6 items-start">
      <div className="md:col-span-2 flex flex-col items-center md:items-start gap-4">
        <img src="/foto-perfil.jpeg" alt="Perfil" className="w-36 h-36 rounded-full border border-white/5 object-cover shadow-[0_8px_40px_rgba(0,229,255,0.06)]" />
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex gap-2">
            <a href="https://github.com/viniciusvalledev" target="_blank" rel="noreferrer" className="brand-link">GitHub</a>
            <a href="https://linkedin.com/in/viniciusvalledev" target="_blank" rel="noreferrer" className="brand-link">LinkedIn</a>
          </div>

          <div className="mt-1">
            <a href="https://instagram.com/vinxvp" target="_blank" rel="noreferrer" className="brand-link">Instagram</a>
          </div>
        </div>
      </div>

      <div className="md:col-span-4 text-center md:text-left">
        <div className="text-sm font-mono text-primary mb-2">&lt;/&gt; SOFTWARE_DEVELOPER</div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: 'var(--text)' }}>
          {typedName}
          <span className="type-cursor" aria-hidden="true" />
        </h1>
        <p className="text-muted leading-relaxed mb-4 max-w-xl">Desenvolvedor Fullstack com foco em aplicações web modernas, boas práticas e performance. Trabalho com Java, Node.js e front-end moderno.</p>

        <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
          <button onClick={() => setActiveTab('projects')} className="cta">Ver portfólio</button>
          <a href="mailto:contatoviniciusvalledev@gmail.com" className="brand-link ml-2">Entrar em contato</a>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {['Java','Node.js','TypeScript','React','Docker'].map(s => (
            <span key={s} className="brand-tag">{s}</span>
          ))}
        </div>
      </div>

      <aside className="md:col-span-2">
        <div className="brand-card p-4 mb-4">
          <div className="text-[10px] text-muted uppercase">Atuação Atual</div>
          <div className="text-white font-semibold">Prefeitura de Saquarema</div>
          <div className="text-muted text-sm">FullStack Dev</div>
        </div>

        <div className="brand-card p-4 mb-4">
          <div className="text-[10px] text-muted uppercase">Idiomas</div>
          <div className="text-white font-semibold">Cultura Inglesa</div>
          <div className="text-muted text-sm">Master 1 (C1/C2)</div>
        </div>

        <div className="brand-card p-4">
          <div className="text-[10px] text-muted uppercase">Status</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <div className="text-muted">Disponível para conversas</div>
          </div>
        </div>
      </aside>
    </section>
  );
};