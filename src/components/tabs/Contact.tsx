import React from 'react';
import { Mail } from 'lucide-react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaDiscord } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const links = [
    { label: 'Email', value: 'contatoviniciusvalledev@gmail.com', href: 'mailto:contatoviniciusvalledev@gmail.com', icon: <MdEmail className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" /> },
    { label: 'LinkedIn', value: 'in/viniciusvalledev', href: 'https://linkedin.com/in/viniciusvalledev', icon: <FaLinkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" /> },
    { label: 'Discord', value: 'viniciusvalledev', href: 'https://discord.com/users/viniciusvalledev', icon: <FaDiscord className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" /> }
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <div className="flex items-center gap-4 mb-10">
        <Mail className="text-blue-500 w-5 h-5" strokeWidth={1.5} />
        <div className="flex flex-col items-start">
          <p className="text-[10px] font-mono tracking-[0.3em] text-blue-500 uppercase mb-1">Personal</p>
          <h2 className="text-3xl font-bold text-slate-100 tracking-tight">
            <span className="text-gray-500 font-mono font-normal">{"<"}</span>
            Contact
            <span className="text-gray-500 font-mono font-normal">{"/>"}</span>
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="bg-[#0b101e]/60 backdrop-blur-sm border p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 min-h-[200px] border-slate-800/60 ring-1 ring-transparent hover:ring-blue-400/30 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(59,130,246,0.12)]"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center">{link.icon}</span>
                <span className="text-xs font-bold tracking-tight uppercase font-mono text-slate-500">{link.label}</span>
              </div>
            </div>

            <div>
              <span className="text-slate-300 text-sm font-mono group-hover:text-blue-400 transition-colors break-all">{link.value}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono text-gray-400">Clique para abrir</span>
              <span className="text-[9px] font-mono text-gray-400">→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};