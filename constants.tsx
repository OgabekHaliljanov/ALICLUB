
import { Profile, Language } from './types';

export const PROFILES: Profile[] = [
  {
    id: '1',
    name: 'Хабиб Нурмагомедов',
    role: 'champion',
    specialty: {
      ru: 'Грэпплинг / ММА',
      uz: 'Greppling / MMA'
    },
    image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=1000&auto=format&fit=crop',
    description: {
      ru: 'Непобежденный чемпион мира UFC. Рекорд 29-0. Король партера.',
      uz: 'UFC jahon chempioni. Rekord 29-0. Parter qiroli.'
    },
    videos: [
      { id: 'v1', title: 'Khabib vs McGregor Highlights', thumbnail: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=400&auto=format&fit=crop', url: '#' },
      { id: 'v2', title: 'Top 10 Smesh Moments', thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop', url: '#' },
      { id: 'v3', title: 'The Eagle: Submission Mastery', thumbnail: 'https://images.unsplash.com/photo-1599058917233-37c1470729e8?q=80&w=400&auto=format&fit=crop', url: '#' },
    ]
  },
  {
    id: '2',
    name: 'Ислам Махачев',
    role: 'champion',
    specialty: {
      ru: 'Самбо / ММА',
      uz: 'Sambo / MMA'
    },
    image: 'https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?q=80&w=1000&auto=format&fit=crop',
    description: {
      ru: 'Действующий чемпион UFC. Наследник легендарного стиля школы Абдулманапа.',
      uz: 'UFC amaldagi chempioni. Abdulmanap maktabi merosxo\'ri.'
    },
    videos: [
      { id: 'v5', title: 'Islam vs Oliveira Full Highlights', thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop', url: '#' },
      { id: 'v6', title: 'Precision Striking & Wrestling', thumbnail: 'https://images.unsplash.com/photo-1574673139737-c40372093ce1?q=80&w=400&auto=format&fit=crop', url: '#' },
    ]
  },
  {
    id: '3',
    name: 'Махмуд Мурадов',
    role: 'champion',
    specialty: {
      ru: 'Ударная техника / UFC',
      uz: 'Zarba texnikasi / UFC'
    },
    image: 'https://images.unsplash.com/photo-1549476464-37392f717551?q=80&w=1000&auto=format&fit=crop',
    description: {
      ru: 'Первый узбекский боец в истории UFC. Техничный ударник и гордость страны.',
      uz: 'UFC tarixidagi birinchi o\'zbek jangchisi. Texnik zarba beruvchi va millat faxri.'
    },
    videos: [
      { id: 'v8', title: 'Muradov: Best Knockouts in UFC', thumbnail: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&auto=format&fit=crop', url: '#' },
      { id: 'v9', title: 'Training in Uzbekistan Highlights', thumbnail: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=400&auto=format&fit=crop', url: '#' },
    ]
  },
  {
    id: '4',
    name: 'Абдулманап Нурмагомедов',
    role: 'trainer',
    specialty: {
      ru: 'Мастер спорта СССР / Легенда',
      uz: 'SSSR sport ustasi / Afsona'
    },
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    description: {
      ru: 'Величайший тренер современности. Воспитал целое поколение чемпионов.',
      uz: 'Zamonaviy davrning eng buyuk murabbiyi. Butun boshli chempionlar avlodini tarbiyalagan.'
    },
    videos: [
      { id: 'v10', title: 'Training Philosophy & Drills', thumbnail: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=400&auto=format&fit=crop', url: '#' },
    ]
  }
];

export const UI_STRINGS: Record<Language, any> = {
  ru: {
    champions: 'Чемпионы',
    trainers: 'Тренеры',
    join: 'Вступить',
    getAccess: 'ПОЛУЧИТЬ ДОСТУП',
    heroBadge: 'Элитный Центр Единоборств',
    heroTitle: 'СТАНЬ <span class="text-gradient">ЛЕГЕНДОЙ</span>',
    startJourney: 'НАЧАТЬ ПУТЬ',
    viewChampions: 'СМОТРЕТЬ ЧЕМПИОНОВ',
    ourPride: 'Наша Гордость',
    masterCraft: 'Мастерство',
    eliteCoaches: 'ЭЛИТНЫЕ <span class="text-gradient">ТРЕНЕРЫ</span>',
    readyToBegin: 'ГОТОВ <br /> <span class="text-gradient">НАЧАТЬ?</span>',
    joinDescription: 'ALI-CLUB — это не просто спортзал. Это место для тех, кто готов выйти за пределы своих возможностей.',
    watchArchive: 'СМОТРЕТЬ ВИДЕО',
    formFullName: 'Полное Имя',
    formPhone: 'Номер Телефона',
    formDiscipline: 'Дисциплина',
    formLevel: 'Уровень Подготовки',
    formSubmit: 'ОТПРАВИТЬ ЗАЯВКУ В КЛУБ',
    statsChampions: 'Чемпионов',
    statsTrainers: 'Тренеров',
    statsMembers: 'Членов клуба',
    statsLocations: 'Локации',
    videoArchive: 'Видео Архив',
    videoArchiveDesc: 'Записи боев, тренировок и лучшие моменты.'
  },
  uz: {
    champions: 'Chempionlar',
    trainers: 'Murabbiylar',
    join: 'Qo\'shilish',
    getAccess: 'KIRISH',
    heroBadge: 'Elita Jang San\'ati Markazi',
    heroTitle: 'AFSONAGA <span class="text-gradient">AYLANING</span>',
    startJourney: 'YO\'LNI BOSHLASH',
    viewChampions: 'CHEMPIONLARNI KO\'RISH',
    ourPride: 'Bizning Faxrimiz',
    masterCraft: 'Mahorat',
    eliteCoaches: 'ELITA <span class="text-gradient">MURABBIYLARI</span>',
    readyToBegin: 'BOSHLASHGA <br /> <span class="text-gradient">TAYYORMISIZ?</span>',
    joinDescription: 'ALI-CLUB shunchaki sport zal emas. Bu o\'z imkoniyatlaridan oshib ketishga tayyor bo\'lganlar uchun makon.',
    watchArchive: 'VIDEONI KO\'RISH',
    formFullName: 'To\'liq Ism',
    formPhone: 'Telefon Raqami',
    formDiscipline: 'Yo\'nalish',
    formLevel: 'Tayyorgarlik Darajasi',
    formSubmit: 'KLUBGA ARIZA YUBORISH',
    statsChampions: 'Chempionlar',
    statsTrainers: 'Murabbiylar',
    statsMembers: 'A\'zolar',
    statsLocations: 'Lokatsiyalar',
    videoArchive: 'Video Arxiv',
    videoArchiveDesc: 'Janglar, mashg\'ulotlar va eng yaxshi lahzalar.'
  }
};
