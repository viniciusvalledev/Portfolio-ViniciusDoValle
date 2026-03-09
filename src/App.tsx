import { useState } from 'react';
import { Header } from './components/Layout/Header';
import { Navigation } from './components/Layout/Navigation';
import { Footer } from './components/Layout/Footer';
import { About } from './components/tabs/About';
import { Experience } from './components/tabs/Experience';
import { Projects } from './components/tabs/Projects';
import { Contact } from './components/tabs/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  const skills = [
    'Java', 'Spring Boot', 'Node.js', 'TypeScript', 
    'PostgreSQL', 'MySQL', 'Docker', 'Git'
  ];

  return (
    <div className="min-h-screen bg-[#060913] text-slate-400 font-sans p-4 md:p-6 selection:bg-blue-500/30">
      {/* max-w-5xl deixa o layout mais compacto como o do Caio */}
      <div className="max-w-5xl mx-auto space-y-6"> 
        
        <Header />

        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="min-h-[300px]">
          {activeTab === 'about' && <About skills={skills} />}
          {activeTab === 'experience' && <Experience />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'contact' && <Contact />}
        </main>

        <Footer />
      </div>
    </div>
  );
}