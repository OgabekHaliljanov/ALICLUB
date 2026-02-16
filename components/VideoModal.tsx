
import React from 'react';
import { Profile, Language } from '../types';
import { UI_STRINGS } from '../constants';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  profile: Profile;
  lang: Language;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ profile, lang, onClose }) => {
  const t = UI_STRINGS[lang];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-5xl glass-card rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-red-500 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-oswald font-bold uppercase tracking-tight text-white mb-2">
              {profile.name} - <span className="text-red-500">{t.videoArchive}</span>
            </h2>
            <p className="text-gray-400">{t.videoArchiveDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
            {profile.videos.map((video) => (
              <div 
                key={video.id} 
                className="group relative rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-red-500 transition-all"
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-all">
                  <div className="bg-red-500 p-3 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="fill-current w-6 h-6" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                  <span className="text-sm font-semibold">{video.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
