
import React, { useState, useEffect } from 'react';
import { PROFILES, UI_STRINGS } from './constants';
import { Profile, Language } from './types';
import ProfileCard from './components/ProfileCard';
import VideoModal from './components/VideoModal';
import EnrollmentForm from './components/EnrollmentForm';
import { GoogleGenAI } from "@google/genai";
import { Dumbbell, Trophy, Users, Play, Shield, Navigation } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ru');
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [motto, setMotto] = useState('');

  const t = UI_STRINGS[lang];

  useEffect(() => {
    // Initial fallback
    setMotto(lang === 'ru' ? 'Куем легенд каждым ударом.' : 'Har bir zarba bilan afsonalarni yaratamiz.');

    const generateMotto = async () => {
      // Check if API key is present to avoid errors
      if (!process.env.API_KEY) return;

      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `Write a powerful, short, one-sentence motivational motto for a premium elite combat sports club called ALI-CLUB. 
          Return ONLY the motto string in ${lang === 'ru' ? 'Russian' : 'Uzbek'} language. Focus on heritage and power.`,
          config: { temperature: 0.9 }
        });
        if (response.text) {
          setMotto(response.text.trim());
        }
      } catch (e) {
        console.error("AI Motto generation failed:", e);
      }
    };
    generateMotto();
  }, [lang]);

  const champions = PROFILES.filter(p => p.role === 'champion');
  const trainers = PROFILES.filter(p => p.role === 'trainer');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-lg transform -skew-x-12">
              <Shield className="w-6 h-6 text-white transform skew-x-12" />
            </div>
            <span className="text-2xl font-oswald font-bold tracking-tighter">ALI-CLUB</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
            <a href="#champions" className="hover:text-red-500 transition-colors">{t.champions}</a>
            <a href="#trainers" className="hover:text-red-500 transition-colors">{t.trainers}</a>
            <a href="#join" className="hover:text-red-500 transition-colors">{t.join}</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
              <button 
                onClick={() => setLang('ru')}
                className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'ru' ? 'bg-red-600 text-white' : 'text-gray-500 hover:text-white'}`}
              >
                RU
              </button>
              <button 
                onClick={() => setLang('uz')}
                className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'uz' ? 'bg-red-600 text-white' : 'text-gray-500 hover:text-white'}`}
              >
                UZ
              </button>
            </div>
            <a 
              href="#join"
              className="hidden sm:block px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-red-500 hover:text-white transition-all"
            >
              {t.getAccess}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#0a0a0a] z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-600/30 text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <Trophy className="w-4 h-4" /> {t.heroBadge}
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-oswald font-bold uppercase leading-none tracking-tighter mb-6"
              dangerouslySetInnerHTML={{ __html: t.heroTitle }}>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-2xl mx-auto min-h-[3rem]">
            {motto}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#join" className="px-10 py-5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-red-600/30">
              {t.startJourney} <Play className="w-4 h-4 fill-current" />
            </a>
            <a href="#champions" className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-2xl transition-all">
              {t.viewChampions}
            </a>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-12 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: t.statsChampions, value: '12+', icon: Trophy },
            { label: t.statsTrainers, value: '25+', icon: Users },
            { label: t.statsMembers, value: '800+', icon: Dumbbell },
            { label: t.statsLocations, value: '3', icon: Navigation },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-2">
              <stat.icon className="w-6 h-6 text-red-500 mb-1" />
              <span className="text-3xl font-oswald font-bold">{stat.value}</span>
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Champions Section */}
      <section id="champions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
            <div className="space-y-4">
              <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm">{t.ourPride}</span>
              <h2 className="text-5xl md:text-6xl font-oswald font-bold uppercase tracking-tight">
                {t.champions}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {champions.map(profile => (
              <ProfileCard 
                key={profile.id} 
                profile={profile} 
                lang={lang}
                onShowVideos={setSelectedProfile} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-24 px-6 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
            <div className="space-y-4">
              <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm">{t.masterCraft}</span>
              <h2 className="text-5xl md:text-6xl font-oswald font-bold uppercase tracking-tight"
                  dangerouslySetInnerHTML={{ __html: t.eliteCoaches }}>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {trainers.map(profile => (
              <ProfileCard 
                key={profile.id} 
                profile={profile} 
                lang={lang}
                onShowVideos={setSelectedProfile} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="join" className="py-24 px-6 bg-gradient-to-b from-transparent to-red-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-6xl md:text-8xl font-oswald font-bold uppercase leading-none tracking-tight"
                  dangerouslySetInnerHTML={{ __html: t.readyToBegin }}>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">{t.joinDescription}</p>
            </div>
            <div>
              <EnrollmentForm lang={lang} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-lg transform -skew-x-12">
              <Shield className="w-5 h-5 text-white transform skew-x-12" />
            </div>
            <span className="text-xl font-oswald font-bold tracking-tighter uppercase">ALI-CLUB</span>
          </div>
          <p className="text-gray-500 text-xs font-medium uppercase tracking-[0.3em]">
            © 2024 ALI-CLUB INTERNATIONAL.
          </p>
        </div>
      </footer>

      {/* Modals */}
      {selectedProfile && (
        <VideoModal 
          profile={selectedProfile} 
          lang={lang}
          onClose={() => setSelectedProfile(null)} 
        />
      )}
    </div>
  );
};

export default App;
