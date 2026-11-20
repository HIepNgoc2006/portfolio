import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

const NAV_ITEMS = [
  { href: '#pillars', label: { vi: 'Lĩnh vực', en: 'Capabilities' } },
  { href: '#projects', label: { vi: 'Dự án', en: 'Work' } },
  { href: '#experience', label: { vi: 'Hành trình', en: 'Journey' } },
  { href: '#contact', label: { vi: 'Liên hệ', en: 'Contact' } },
];

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#EEF0F5]/[0.08] bg-[#0B0D14]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-3 text-[#EEF0F5] transition-colors duration-150 hover:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[#EEF0F5]/[0.12] bg-[#11141C] font-mono text-xs font-medium text-[#EEF0F5]">
            {PROFILE.brand.monogram}
          </span>
          <span className="text-[15px] font-medium tracking-[-0.01em]">{PROFILE.brand.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-normal text-[#A3A9B8] transition-colors duration-150 hover:text-[#EEF0F5]"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div
            role="group"
            aria-label="Language switcher"
            className="flex h-9 items-center rounded-lg border border-[#EEF0F5]/[0.08] bg-[#11141C] p-1 font-mono text-xs"
          >
            <button
              type="button"
              onClick={() => setLang('vi')}
              className={`h-7 cursor-pointer rounded-md px-2.5 transition-colors duration-150 ${
                lang === 'vi'
                  ? 'bg-[#1A1E28] text-[#EEF0F5] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
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
                  ? 'bg-[#1A1E28] text-[#EEF0F5] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                  : 'text-[#7A8296] hover:text-[#A3A9B8]'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="hidden h-9 items-center rounded-lg bg-[#EEF0F5] px-4 text-xs font-medium text-[#0B0D14] transition-colors duration-150 hover:bg-white sm:inline-flex"
          >
            {t({ vi: 'Kết nối', en: 'Contact' })}
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#EEF0F5]/[0.08] bg-[#11141C] text-[#A3A9B8] transition-colors duration-150 hover:text-[#EEF0F5] md:hidden"
          >
            {open ? <X size={16} strokeWidth={1.5} /> : <Menu size={16} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#EEF0F5]/[0.08] bg-[#0B0D14] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-10 items-center rounded-lg px-3 text-sm text-[#A3A9B8] transition-colors duration-150 hover:bg-[#11141C] hover:text-[#EEF0F5]"
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
