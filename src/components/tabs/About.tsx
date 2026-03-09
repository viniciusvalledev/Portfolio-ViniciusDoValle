import React from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';
import { Card } from '../UI/card';

interface AboutProps {
  skills: string[];
}

export const About: React.FC<AboutProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in items-start">
      {/* Skills */}
      <Card title="Skills" className="md:col-span-2 h-full">
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <span key={skill} className="bg-[#121929] border border-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-[11px] font-mono hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </Card>

      {/* Social Networks (substitui o card de Certificações) */}
      <Card title="Social Networks" className="h-full">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4 mb-4">
            <a href="https://github.com/viniciusvalledev" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex items-center justify-center w-9 h-9 rounded-md bg-transparent border border-slate-800/40 text-slate-300 hover:border-blue-400/40 hover:text-blue-300 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/viniciusvalledev/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-9 h-9 rounded-md bg-transparent border border-slate-800/40 text-slate-300 hover:border-blue-400/40 hover:text-blue-300 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/vinxvp/" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex items-center justify-center w-9 h-9 rounded-md bg-transparent border border-slate-800/40 text-slate-300 hover:border-blue-400/40 hover:text-blue-300 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            {/* TikTok — SVG inline */}
            <a href="https://www.tiktok.com/@vinxvpdev?_r=1&_t=ZS-94XCFy6cs3I" target="_blank" rel="noreferrer" aria-label="TikTok" className="flex items-center justify-center w-9 h-9 rounded-md bg-transparent border border-slate-800/40 text-slate-300 hover:border-blue-400/40 hover:text-blue-300 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M200.4 72.6c-13.6-3.6-26.8-11.2-36.8-21.6v92.8c0 25.6-20.8 46.4-46.4 46.4-25.6 0-46.4-20.8-46.4-46.4s20.8-46.4 46.4-46.4c8.8 0 17 2.8 23.6 7.6V85.2c-8-5.6-17.6-8.8-27.6-8.8-30.4 0-55.2 24.8-55.2 55.2s24.8 55.2 55.2 55.2 55.2-24.8 55.2-55.2V56h28.8c0 0 .8 9.2 5.6 16.6z" />
              </svg>
            </a>
          </div>

          <div className="text-[12px] text-slate-400 font-mono">Siga-me: atualizações de projetos, fotos e novidades rápidas.</div>
        </div>
      </Card>

      {/* Formação */}
      <Card title="Formação" className="md:col-span-2 h-full">
        <div className="space-y-6">
          <div>
            <h4 className="text-slate-100 font-bold text-2xl mb-2">Bacharelado em Ciência da Computação</h4>
            <a href="#" className="text-gray-500 text-lg font-medium inline-block mb-3">UNESA - Universidade Estácio de Sá</a>

            <div className="mt-4 text-[12px] font-mono text-slate-500 flex items-center gap-3">
              <span>Jan 2023 — Nov 2026</span>
              <span className="inline-block w-1 h-px bg-slate-700/60 rounded" />
              <span>7°/8° Período</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Status */}
      <Card title="Status" className="h-full">
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
      </Card>
    </div>
  );
};