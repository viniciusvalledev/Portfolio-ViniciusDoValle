import React from 'react';
import { Building2 } from 'lucide-react'; // Certifique-se de ter o lucide-react instalado

interface ExperienceItem {
  company: string;
  companyColor: string;
  title: string;
  period: string;
  type: string;
  description: string;
  tags: string[];
  current?: boolean;
  cardClass?: string;
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
      cardClass: "border-teal-500/20 hover:border-teal-500/40"
    },
    // Adicione mais experiências aqui seguindo o mesmo padrão
  ];

  return (
    <div id="experience" className="py-4 animate-fade-in">
      <div>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <Building2 className="text-blue-500 w-5 h-5" strokeWidth={1.5} />
          <div>
            <p className="text-[10px] font-mono tracking-[0.3em] text-blue-500 uppercase mb-1">Career</p>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              <span className="text-gray-600 font-mono font-normal">{"<"}</span>
              Experience
              <span className="text-gray-600 font-mono font-normal">{"/>"}</span>
            </h2>
          </div>
        </div>

        {/* Grid de Cards Estilo Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:auto-rows-[220px]">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`bg-[#0b101e] border p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${exp.cardClass}`}
            >
              {/* Topo do Card */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-xs font-bold tracking-tight uppercase ${exp.companyColor}`}>
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
                  <span className="font-mono text-[9px] text-gray-400">{exp.period}</span>
                  <span className="font-mono text-[9px] px-1.5 py-0.5 border border-blue-500/10 text-gray-500 uppercase">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Descrição Central */}
              <p className="text-[11px] text-gray-400 line-clamp-3 font-light leading-relaxed my-2">
                {exp.description}
              </p>

              {/* Tags/Tecnologias no Rodapé */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] px-2 py-0.5 bg-[#121929] border border-white/5 text-gray-400 group-hover:border-blue-500/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};