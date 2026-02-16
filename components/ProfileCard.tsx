
import React from 'react';
import { Profile, Language } from '../types';
import { UI_STRINGS } from '../constants';
import { PlayCircle, Award, User } from 'lucide-react';

interface ProfileCardProps {
  profile: Profile;
  lang: Language;
  onShowVideos: (profile: Profile) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, lang, onShowVideos }) => {
  const t = UI_STRINGS[lang];

  return (
    <div className="glass-card rounded-2xl overflow-hidden group hover:translate-y-[-8px] transition-all duration-300 shadow-xl">
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={profile.image} 
          alt={profile.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.3] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 mb-2">
            {profile.role === 'champion' ? (
              <span className="bg-red-600/90 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest flex items-center gap-1">
                <Award className="w-3 h-3" /> {profile.role === 'champion' ? (lang === 'ru' ? 'Чемпион' : 'Chempion') : ''}
              </span>
            ) : (
              <span className="bg-blue-600/90 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest flex items-center gap-1">
                <User className="w-3 h-3" /> {profile.role === 'trainer' ? (lang === 'ru' ? 'Тренер' : 'Murabbiy') : ''}
              </span>
            )}
            <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest">
              {profile.specialty[lang]}
            </span>
          </div>
          <h3 className="text-2xl font-oswald font-bold uppercase text-white mb-2 leading-tight">
            {profile.name}
          </h3>
          <p className="text-sm text-gray-300 line-clamp-2 mb-4 leading-relaxed">
            {profile.description[lang]}
          </p>
          
          <button 
            onClick={() => onShowVideos(profile)}
            className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-3 rounded-xl hover:bg-red-500 hover:text-white transition-all transform active:scale-95"
          >
            <PlayCircle className="w-5 h-5" />
            {t.watchArchive}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
