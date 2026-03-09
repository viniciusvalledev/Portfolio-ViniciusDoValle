import React from 'react';
import { Building2 } from 'lucide-react';
import { Card } from '../UI/card';

interface ExperienceItem {
  company: string;
  companyColor: string;
  title: string;
  period: string;
  type: string;
  description: string;
  tags: string[];
  current?: boolean;
  borderColor: string; // Este campo será usado para o hexadecimal
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Prefeitura de Saquarema",
      companyColor: "text-teal-500",
      title: "FullStack Developer",
      period: "Fev 2025 — Atual",
      type: "Estágio",
      description: "Desenvolvimento de sistemas municipais e modelagem de dados para a gestão pública de Saquarema.",
      tags: ["TypeScript", "React", "Node", "MySQL"],
      current: true,
      borderColor: "#14b8a6" 
    },
  ];

  return (
    <div id="experience" className="py-4 animate-fade-in">
      <div className="flex items-center gap-4 mb-10">
        <Building2 className="text-primary w-5 h-5" strokeWidth={1.5} />
        <div>
          <p className="text-[10px] font-mono tracking-[0.3em] text-primary uppercase mb-1">Career</p>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            <span className="text-gray-600 font-mono font-normal">{"<"}</span>
            Experience
            <span className="text-gray-600 font-mono font-normal">{"/>"}</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((exp, i) => (
          <Card 
            key={i} 
            className="h-full flex flex-col justify-between" 
            borderColor={exp.borderColor} 
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className={`text-[9px] font-bold uppercase tracking-tight ${exp.companyColor}`}>
                  {exp.company}
                </span>
                {exp.current && (
                  <span className="flex items-center gap-1 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-mono text-[9px] text-green-500 uppercase">Atual</span>
                  </span>
                )}
              </div>
              
              <h3 className="text-sm font-bold text-white leading-tight mb-1">
                {exp.title}
              </h3>
              
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] text-slate-500">{exp.period}</span>
                <span className="font-mono text-[9px] px-1.5 py-0.5 border border-blue-500/10 text-slate-500 uppercase">
                  {exp.type}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 line-clamp-3 font-light leading-relaxed my-3">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#121929] border border-slate-800 text-slate-300 px-2 py-0.5 rounded text-[9px] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};