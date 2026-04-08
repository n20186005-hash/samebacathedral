'use client';
import { useTranslation } from 'react-i18next';

const sections = [
  {
    key: 'dressCode',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    key: 'gettingThere',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    key: 'tips',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    key: 'nearby',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Guide() {
  const { t } = useTranslation();

  return (
    <section id="guide" className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
            {t('guide.title')}
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            {t('guide.subtitle')}
          </p>
        </div>

        {/* Guide grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => {
            const items = t(`guide.${section.key}.items`, { returnObjects: true }) as string[];
            return (
              <div
                key={section.key}
                className="p-8 rounded-2xl bg-white dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-neutral-400 dark:text-neutral-500">
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {t(`guide.${section.key}.title`)}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {Array.isArray(items) && items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                      <span className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Trip.com Tours Links */}
        <div className="mt-16 p-8 rounded-2xl bg-white dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-neutral-400 dark:text-neutral-500">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              周边游览路线推荐 (Powered by Trip.com)
            </h3>
          </div>
          <ul className="space-y-4">
            <li>
              <a href="https://www.trip.com/t/pJoQPuLZDU2" target="_blank" className="text-accent hover:text-accent-dark transition-colors flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                <span>從第比利斯出發：姆茨赫塔、十字修道院、哥里及烏普利斯齊赫王朝一日遊</span>
              </a>
            </li>
            <li>
              <a href="https://www.trip.com/t/hIOsasWZDU2" target="_blank" className="text-accent hover:text-accent-dark transition-colors flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                <span>第比利斯：姆茨赫塔十字市集、喬治亞紀事紀念碑及葡萄酒之旅</span>
              </a>
            </li>
            <li>
              <a href="https://www.trip.com/t/ZQ0oOYYZDU2" target="_blank" className="text-accent hover:text-accent-dark transition-colors flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                <span>從第比利斯出發的魔法卡赫季之旅 – 西格納吉、博德貝與編年史之旅</span>
              </a>
            </li>
            <li>
              <a href="https://www.trip.com/t/4UzsRFbZDU2" target="_blank" className="text-accent hover:text-accent-dark transition-colors flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                <span>第比利斯：古多里及卡茲貝吉一日遊（含四驅車）</span>
              </a>
            </li>
            <li>
              <a href="https://www.trip.com/t/ssPwvDdZDU2" target="_blank" className="text-accent hover:text-accent-dark transition-colors flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                <span>第比利斯：卡赫季地區，西格納吉之旅連9次品酒體驗</span>
              </a>
            </li>
            <li>
              <a href="https://www.trip.com/t/7p32n1fZDU2" target="_blank" className="text-accent hover:text-accent-dark transition-colors flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                <span>西格納吉（愛之城）+女修道院+紅酒體驗+第比利斯海（包車）</span>
              </a>
            </li>
            <li>
              <a href="https://www.trip.com/t/8QotX3hZDU2" target="_blank" className="text-accent hover:text-accent-dark transition-colors flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                <span>慢遊第比利斯海：將日子浸在湖藍與晴空裡的一天【格魯吉亞】</span>
              </a>
            </li>
            <li>
              <a href="https://www.trip.com/t/sLLlgCjZDU2" target="_blank" className="text-accent hover:text-accent-dark transition-colors flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                <span>第比利斯高架電車道+格魯吉亞之母雕像+里克公園+第比利斯海</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
