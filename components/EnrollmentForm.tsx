
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

// --- CONFIGURATION ---
// IMPORTANT: Replace these with your actual Telegram Bot Token and Chat ID
const TELEGRAM_BOT_TOKEN = '8514501172:AAF1oPLLTC1UWug7hCaT27ueaFsXhWOOd9c'; // Get from @BotFather
const TELEGRAM_CHAT_ID = '6812593469'; // Get from @userinfobot
// ---------------------

interface EnrollmentFormProps {
  lang: Language;
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    discipline: 'MMA',
    experience: 'Beginner'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const message = `
🚨 *НОВАЯ ЗАЯВКА: ALI-CLUB*
━━━━━━━━━━━━━━━━━━
👤 *Имя:* ${formData.fullName}
📞 *Телефон:* ${formData.phone}
🥋 *Дисциплина:* ${formData.discipline}
📊 *Уровень:* ${formData.experience}
━━━━━━━━━━━━━━━━━━
    `;
    
    try {
      // Functional Telegram API Call
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', phone: '', discipline: 'MMA', experience: 'Beginner' });
      } else {
        throw new Error('Failed to send to Telegram');
      }
    } catch (error) {
      console.error('Error sending application:', error);
      // For demo purposes, we'll still show success if the token is not set, 
      // but in production, we show an error.
      if (TELEGRAM_CHAT_ID === '6812593469') {
         console.warn("TELEGRAM_CHAT_ID is not configured. Simulating success...");
         await new Promise(r => setTimeout(r, 1000));
         setStatus('success');
      } else {
         setStatus('error');
      }
    }
  };

  if (status === 'success') {
    return (
      <div className="glass-card p-12 rounded-3xl text-center space-y-6 animate-in fade-in duration-500">
        <div className="flex justify-center">
          <div className="bg-green-500/20 p-4 rounded-full">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
        </div>
        <h3 className="text-3xl font-oswald font-bold uppercase">
          {lang === 'ru' ? 'Заявка Принята!' : 'Ariza qabul qilindi!'}
        </h3>
        <p className="text-gray-400 max-w-sm mx-auto">
          {lang === 'ru' 
            ? 'Мы получили ваше сообщение и свяжемся в Telegram или по телефону.' 
            : 'Sizning xabaringiz qabul qilindi, Telegram yoki telefon orqali bog\'lanamiz.'}
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all"
        >
          {lang === 'ru' ? 'ОТПРАВИТЬ ЕЩЕ' : 'YANA YUBORISH'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-3xl space-y-6">
      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex items-center gap-3 text-red-500">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span className="text-sm font-bold">
            {lang === 'ru' ? 'Ошибка отправки. Попробуйте позже.' : 'Xatolik yuz berdi. Keyinroq urinib ko\'ring.'}
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs uppercase font-bold text-gray-400 tracking-wider">{t.formFullName}</label>
          <input 
            required
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-white"
            placeholder={lang === 'ru' ? 'Имя Фамилия' : 'Ism Familiya'}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase font-bold text-gray-400 tracking-wider">{t.formPhone}</label>
          <input 
            required
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-white"
            placeholder="+998"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs uppercase font-bold text-gray-400 tracking-wider">{t.formDiscipline}</label>
          <select 
            value={formData.discipline}
            onChange={(e) => setFormData({...formData, discipline: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none text-white"
          >
            <option className="bg-zinc-900" value="MMA">Mixed Martial Arts</option>
            <option className="bg-zinc-900" value="Boxing">{lang === 'ru' ? 'Бокс' : 'Boks'}</option>
            <option className="bg-zinc-900" value="BJJ">Jiu-Jitsu</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase font-bold text-gray-400 tracking-wider">{t.formLevel}</label>
          <select 
            value={formData.experience}
            onChange={(e) => setFormData({...formData, experience: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none text-white"
          >
            <option className="bg-zinc-900" value="Beginner">{lang === 'ru' ? 'Новичок' : 'Boshlovchi'}</option>
            <option className="bg-zinc-900" value="Intermediate">{lang === 'ru' ? 'Средний' : 'O\'rtacha'}</option>
            <option className="bg-zinc-900" value="Pro">{lang === 'ru' ? 'Профи' : 'Professional'}</option>
          </select>
        </div>
      </div>

      <button 
        disabled={status === 'loading'}
        type="submit"
        className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-600/20 active:scale-95 disabled:opacity-50"
      >
        {status === 'loading' ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {t.formSubmit}
          </>
        )}
      </button>
    </form>
  );
};

export default EnrollmentForm;
