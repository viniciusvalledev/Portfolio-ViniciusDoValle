import React from 'react';
import { Award } from 'lucide-react'; 

interface CertificationItem {
  issuer: string;
  issuerColor: string;
  title: string;
  period: string;
  type: string;
  description: string;
  tags: string[];
  current?: boolean;
  cardClass?: string;
  url?: string; // link opcional para o certificado
}

export const Certification: React.FC = () => {
  const certifications: CertificationItem[] = [
    {
      issuer: "Alura",
      issuerColor: "#085AB6",
      title: "Java - POO",
      period: "Fev 2026",
      type: "Curso",
      description: "Curso completo de Programação Orientada a Objetos em Java, abordando conceitos fundamentais e práticas avançadas para desenvolvimento de software robusto.",
      tags: ["TypeScript", "React", "Node"],
      current: false,
      cardClass: "border-[#085AB6]/40 hover:border-[#085AB6]/80",
      url: 'https://cursos.alura.com.br/formalCertificate/e94b5dd6-8f74-4c26-9c18-5d7b25e8125c'
    },
    {
      issuer: "Alura",
      issuerColor: "#085AB6",
      title: "Git e GitHub - Controle e compartilhe seu código",
      period: "Out 2025",
      type: "Curso",
      description: "Curso completo de Controle de Versão com Git e GitHub, abordando desde os conceitos básicos até as práticas avançadas de colaboração em projetos de software.",
      tags: ["Git", "GitHub", "Versionamento"],
      current: false,
      cardClass: "border-[#085AB6]/40 hover:border-[#085AB6]/80",
      url: 'https://cursos.alura.com.br/formalCertificate/01cb0146-5280-4e3a-8b00-aff49197ded2'
    },
    {
      issuer: "Alura",
      issuerColor: "#085AB6",
      title: "MySQL",
      period: "Ago 2025",
      type: "Curso",
      description: "Curso completo de MySQL, abordando desde os conceitos básicos até as práticas avançadas de modelagem e otimização de bancos de dados.",
      tags: ["MySQL", "Banco de Dados", "SQL"],
      current: false,
      cardClass: "border-[#085AB6]/40 hover:border-[#085AB6]/80",
      url: 'https://cursos.alura.com.br/formalCertificate/7c31e5d7-c9e8-42ad-a09d-ff222280602e'
    },
  ];

  return (
    <div id="certification" className="py-4 animate-fade-in">
      <div>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <Award className="text-blue-500 w-5 h-5" strokeWidth={1.5} />
          <div>
            <p className="text-[10px] font-mono tracking-[0.3em] text-blue-500 uppercase mb-1">Certificates</p>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              <span className="text-gray-600 font-mono font-normal">{"<"}</span>
              Certification
              <span className="text-gray-600 font-mono font-normal">{"/>"}</span>
            </h2>
          </div>
        </div>

        {/* Grid de Cards Estilo Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:auto-rows-[220px]">
          {certifications.map((cert, i) => (
            cert.url ? (
              <a key={i} href={cert.url} target="_blank" rel="noreferrer" aria-label={`Open certificate ${cert.title}`} className="no-underline">
                <div
                  className={`bg-[#0b101e] border p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${cert.cardClass}`}
                >
                  {/* Topo do Card */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-xs font-bold tracking-tight uppercase ${cert.issuerColor}`}>
                        {cert.issuer}
                      </span>
                      {cert.current && (
                        <span className="flex items-center gap-1 flex-shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          <span className="font-mono text-[9px] text-green-500 uppercase">Atual</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-white leading-tight mb-1">
                      {cert.title}
                    </h3>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-gray-400">{cert.period}</span>
                      <span className="font-mono text-[9px] px-1.5 py-0.5 border border-blue-500/10 text-gray-500 uppercase">
                        {cert.type}
                      </span>
                    </div>
                  </div>

                  {/* Descrição Central */}
                  <p className="text-[11px] text-gray-400 line-clamp-3 font-light leading-relaxed my-2">
                    {cert.description}
                  </p>

                  {/* Tags/Tecnologias no Rodapé */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] px-2 py-0.5 bg-[#121929] border border-white/5 text-gray-400 group-hover:border-blue-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ) : (
             <div
               key={i}
              className={`bg-[#0b101e] border p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${cert.cardClass}`}
             >
               {/* Topo do Card */}
               <div>
                 <div className="flex items-center justify-between gap-2 mb-2">
                   <span className={`text-xs font-bold tracking-tight uppercase ${cert.issuerColor}`}>
                     {cert.issuer}
                   </span>
                   {cert.current && (
                     <span className="flex items-center gap-1 flex-shrink-0">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                       <span className="font-mono text-[9px] text-green-500 uppercase">Atual</span>
                     </span>
                   )}
                 </div>

                 <h3 className="text-sm font-bold text-white leading-tight mb-1">
                   {cert.title}
                 </h3>

                 <div className="flex items-center gap-2">
                   <span className="font-mono text-[9px] text-gray-400">{cert.period}</span>
                   <span className="font-mono text-[9px] px-1.5 py-0.5 border border-blue-500/10 text-gray-500 uppercase">
                     {cert.type}
                   </span>
                 </div>
               </div>

               {/* Descrição Central */}
               <p className="text-[11px] text-gray-400 line-clamp-3 font-light leading-relaxed my-2">
                 {cert.description}
               </p>

               {/* Tags/Tecnologias no Rodapé */}
               <div className="flex flex-wrap gap-1.5">
                 {cert.tags.map((tag) => (
                   <span
                     key={tag}
                     className="font-mono text-[9px] px-2 py-0.5 bg-[#121929] border border-white/5 text-gray-400 group-hover:border-blue-500/20 transition-colors"
                   >
                     {tag}
                   </span>
                 ))}
               </div>
             </div>
            )
           ))}
         </div>
       </div>
     </div>
   );
 };
