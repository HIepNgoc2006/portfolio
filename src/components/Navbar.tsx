import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

const NAV_ITEMS = [
  { id: 'pillars', href: '#pillars', label: { vi: 'Lĩnh vực', en: 'Capabilities' } },
  { id: 'projects', href: '#projects', label: { vi: 'Dự án', en: 'Work' } },
  { id: 'experience', href: '#experience', label: { vi: 'Hành trình', en: 'Experience' } },
  { id: 'contact', href: '#contact', label: { vi: 'Liên hệ', en: 'Contact' } },
];

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);

      let current = '';
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 140) {
          current = item.id;
        }
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#EEF0F5]/[0.08] bg-[#090B10]/85 backdrop-blur-md">
      {/* 1px scroll reading progress hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-[#2DD4BF] transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-3 text-[#EEF0F5] transition-colors duration-150 hover:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[#EEF0F5]/[0.12] bg-[#10131B] font-mono text-xs font-medium text-[#EEF0F5]">
            {PROFILE.brand.monogram}
          </span>
          <span className="text-[15px] font-medium tracking-[-0.01em]">{PROFILE.brand.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3.5 py-2 text-sm transition-colors duration-150 ${
                  isActive
                    ? 'bg-[#171B26] text-[#EEF0F5]'
                    : 'text-[#9BA2B2] hover:text-[#EEF0F5]'
                }`}
              >
                {t(item.label)}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label="Language switcher"
            className="flex h-9 items-center rounded-lg border border-[#EEF0F5]/[0.08] bg-[#10131B] p-1 font-mono text-xs"
          >
            <button
              type="button"
              onClick={() => setLang('vi')}
              className={`h-7 cursor-pointer rounded-md px-2.5 transition-colors duration-150 ${
                lang === 'vi'
                  ? 'bg-[#1C212E] text-[#EEF0F5] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                  : 'text-[#7A8296] hover:text-[#A3A9B8]'
              }`}
            >
              VI
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`h-7 cursor-pointer rounded-md px-2.5 transition-colors duration-150 ${
                lang === 'en'
                  ? 'bg-[#1C212E] text-[#EEF0F5] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                  : 'text-[#7A8296] hover:text-[#A3A9B8]'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="hidden h-9 items-center rounded-lg bg-[#EEF0F5] px-4 text-xs font-medium text-[#090B10] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-colors duration-150 hover:bg-white sm:inline-flex"
          >
            {t({ vi: 'Kết nối', en: 'Contact' })}
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#EEF0F5]/[0.08] bg-[#10131B] text-[#9BA2B2] transition-colors duration-150 hover:text-[#EEF0F5] md:hidden"
          >
            {open ? <X size={16} strokeWidth={1.5} /> : <Menu size={16} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#EEF0F5]/[0.08] bg-[#090B10] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-10 items-center rounded-lg px-3 text-sm text-[#A3A9B8] transition-colors duration-150 hover:bg-[#10131B] hover:text-[#EEF0F5]"
              >
                {t(item.label)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
