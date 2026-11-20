import { PROFILE } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#EEF0F5]/[0.08] bg-[#0B0D14] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 font-mono text-xs text-[#7A8296] sm:flex-row">
        <div className="tabular-nums">
          © {year} {PROFILE.brand.name}
        </div>
        <div>
          {t({
            vi: 'DEV · COM · MKT · LOG — Hà Nội',
            en: 'DEV · COM · MKT · LOG — Hanoi',
          })}
        </div>
      </div>
    </footer>
  );
}
