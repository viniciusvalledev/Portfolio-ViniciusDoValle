import React from 'react';
import { Mail } from 'lucide-react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaDiscord } from 'react-icons/fa';
import { Card } from '../UI/card';

export const Contact: React.FC = () => {
  const links = [
    { label: 'Email', value: 'contatoviniciusvalledev@gmail.com', href: 'mailto:contatoviniciusvalledev@gmail.com', icon: <MdEmail className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />, borderColor: '#10B981' },
    { label: 'LinkedIn', value: 'in/viniciusvalledev', href: 'https://linkedin.com/in/viniciusvalledev', icon: <FaLinkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />, borderColor: '#0A66C2' },
    { label: 'Discord', value: 'viniciusvalledev', href: 'https://discord.com/users/viniciusvalledev', icon: <FaDiscord className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />, borderColor: '#5865F2' }
  ];

  // Não usamos quebras no e-mail — mantemos em uma linha e permitimos mais largura no card quando necessário.

  return (
    <div className="animate-fade-in space-y-6 py-4">
      <div className="flex items-center gap-4 mb-6">
        <Mail className="text-primary w-5 h-5" strokeWidth={1.5} />
        <div className="flex flex-col items-start">
          <p className="text-[10px] font-mono tracking-[0.3em] text-primary uppercase mb-1">Personal</p>
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>
            <span className="text-muted font-mono font-normal">{"<"}</span>
            Contact
            <span className="text-muted font-mono font-normal">{"/>"}</span>
          </h2>
        </div>
      </div>

      {/* Test layout: empilhar cards verticalmente para avaliar espaçamento e evitar aparência achatada */}
      <div className="grid grid-flow-row-dense auto-rows-fr grid-cols-1 gap-4">
        {links.map((link) => {
          const isEmail = link.label === 'Email';
          const cardExtra = isEmail ? 'md:min-w-[340px] lg:min-w-[420px]' : '';
          const valueClass = isEmail ? 'text-slate-300 text-sm font-mono whitespace-nowrap' : 'text-slate-300 text-sm font-mono break-words leading-relaxed';

          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="no-underline block"
              aria-label={`Open ${link.label}`}
            >
              {/* Aumentar altura mínima para dar mais 'respiração' e evitar aspecto achatado */}
              <Card className={`h-full flex flex-col justify-between min-h-[120px] ${cardExtra}`} borderColor={link.borderColor}>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center">{link.icon}</span>
                    <span className="text-xs font-bold tracking-tight uppercase font-mono text-slate-500">{link.label}</span>
                  </div>
                </div>

                <div>
                  <span className={valueClass}>{link.value}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-gray-400">Click to open</span>
                  <span className="text-[9px] font-mono text-gray-400">→</span>
                </div>
              </Card>
            </a>
          );
        })}
      </div>
    </div>
  );
};