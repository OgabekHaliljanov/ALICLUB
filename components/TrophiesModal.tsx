import React from 'react';
import { Profile } from '../types';
import { X } from 'lucide-react';

interface TrophiesModalProps {
  profile: Profile;
  onClose: () => void;
}

const TrophiesModal: React.FC<TrophiesModalProps> = ({ profile, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative bg-[#0a0a0a] rounded-2xl max-w-5xl w-full overflow-hidden">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white z-50"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Заголовок */}
        <h2 className="text-3xl font-bold text-white text-center py-6">{profile.name} — Достижения</h2>

        {/* Сетка трофеев */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
          {profile.trophies?.map(trophy => (
            <div 
              key={trophy.id} 
              className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl cursor-pointer transform hover:scale-105 transition-all"
            >
              {/* Изображение */}
              <img 
                src={trophy.image} 
                alt={trophy.title} 
                className="w-full h-full object-cover"
              />
              
              {/* Текст поверх картинки */}
              <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-4">
                <span className="text-white text-center font-bold text-sm drop-shadow-lg">
                  {trophy.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrophiesModal;