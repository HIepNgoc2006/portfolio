import { PROFILE } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { DOMAIN_META } from './domainMeta';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-normal leading-[1.12] tracking-[-0.02em] text-[#EEF0F5] sm:text-4xl">
          {t({
            vi: 'Nơi từng làm việc & đóng góp thực tế',
            en: 'Work experience & environments',
          })}
        </h2>
      </div>

      <div className="mt-12 divide-y divide-[#EEF0F5]/[0.08] border-y border-[#EEF0F5]/[0.08]">
        {PROFILE.experiences.map((exp) => {
          const meta = DOMAIN_META[exp.domain];

          return (
            <div
              key={exp.id}
              className="grid gap-4 py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#9BA2B2]">
                  <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                  <span>{meta.code}</span>
                  <span className="text-[#5B6275]">·</span>
                  <span className="text-[#7A8296]">{t(exp.period)}</span>
                </div>
                <div className="mt-2.5 text-base font-medium text-[#EEF0F5]">
                  {t(exp.organization)}
                </div>
              </div>

              <div className="md:col-span-8">
                <h3 className="text-lg font-medium text-[#EEF0F5]">{t(exp.role)}</h3>

                <p className="mt-2.5 max-w-2xl text-sm leading-6 text-[#9BA2B2]">
                  {t(exp.description)}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-6 text-[#D5DAE5]"
                    >
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#2DD4BF]" />
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
