import React from 'react';
import { Award } from 'lucide-react'; 
import { Card } from '../UI/card';

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
      title: "Java - OOP",
      period: "Feb 2026",
      type: "Course",
      description: "Comprehensive course on Object-Oriented Programming in Java, covering fundamental concepts and advanced practices for building robust software.",
      tags: ["TypeScript", "React", "Node"],
      current: false,
      cardClass: "border-[#085AB6]/40 hover:border-[#085AB6]/80",
      url: 'https://cursos.alura.com.br/formalCertificate/e94b5dd6-8f74-4c26-9c18-5d7b25e8125c'
    },
    {
      issuer: "Alura",
      issuerColor: "#085AB6",
      title: "Git & GitHub — Version Control and Collaboration",
      period: "Oct 2025",
      type: "Course",
      description: "Comprehensive course on version control with Git and GitHub, covering basic concepts to advanced collaboration workflows in software projects.",
      tags: ["Git", "GitHub", "Versioning"],
      current: false,
      cardClass: "border-[#085AB6]/40 hover:border-[#085AB6]/80",
      url: 'https://cursos.alura.com.br/formalCertificate/01cb0146-5280-4e3a-8b00-aff49197ded2'
    },
    {
      issuer: "Alura",
      issuerColor: "#085AB6",
      title: "MySQL",
      period: "Aug 2025",
      type: "Course",
      description: "Comprehensive MySQL course covering basics to advanced practices in database modeling and query optimization.",
      tags: ["MySQL", "Databases", "SQL"],
      current: false,
      cardClass: "border-[#085AB6]/40 hover:border-[#085AB6]/80",
      url: 'https://cursos.alura.com.br/formalCertificate/7c31e5d7-c9e8-42ad-a09d-ff222280602e'
    },
  ];

  return (
    <div id="certification" className="py-4 animate-fade-in">
      <div>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <Award className="text-primary w-5 h-5" strokeWidth={1.5} />
          <div className="flex flex-col items-start">
            <p className="text-[10px] font-mono tracking-[0.3em] text-primary uppercase mb-1">Certificates</p>
            <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>
              <span className="text-muted font-mono font-normal">{"<"}</span>
              Certifications
              <span className="text-muted font-mono font-normal">{"/>"}</span>
            </h2>
          </div>
        </div>

        {/* Grid de Cards Estilo Bento */}
        <div className="grid grid-flow-row-dense auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            cert.url ? (
              <a key={i} href={cert.url} target="_blank" rel="noreferrer" aria-label={`Open certificate ${cert.title}`} className="no-underline block">
                <Card className={`h-full flex flex-col justify-between p-5 transition-all duration-300 group hover:-translate-y-1 ${cert.cardClass ?? ''}`} borderColor={cert.issuerColor}>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-xs font-bold tracking-tight uppercase`}>
                        {cert.issuer}
                      </span>
                      {cert.current && (
                        <span className="flex items-center gap-1 flex-shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          <span className="font-mono text-[9px] text-green-500 uppercase">Current</span>
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

                  <p className="text-[11px] text-gray-400 line-clamp-3 font-light leading-relaxed my-2">
                    {cert.description}
                  </p>

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
                </Card>
              </a>
            ) : (
             <div
               key={i}
              className={`no-underline block`}
             >
               <Card className={`h-full flex flex-col justify-between p-5 transition-all duration-300 group hover:-translate-y-1 ${cert.cardClass ?? ''}`} borderColor={cert.issuerColor}>
                 {/* Topo do Card */}
                 <div>
                   <div className="flex items-center justify-between gap-2 mb-2">
                     <span className={`text-xs font-bold tracking-tight uppercase`}>
                       {cert.issuer}
                     </span>
                     {cert.current && (
                       <span className="flex items-center gap-1 flex-shrink-0">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                         <span className="font-mono text-[9px] text-green-500 uppercase">Current</span>
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

                 <p className="text-[11px] text-gray-400 line-clamp-3 font-light leading-relaxed my-2">
                   {cert.description}
                 </p>

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
               </Card>
             </div>
            )
           ))}
         </div>
       </div>
     </div>
   );
 };
