import { PROFILE } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import { DOMAIN_META } from './domainMeta';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="font-mono text-xs text-[#7A8296]">
          {t({ vi: 'Hành trình & Kinh nghiệm', en: 'Experience' })}
        </p>
        <h2 className="mt-2 text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-[#EEF0F5] sm:text-3xl">
          {t({
            vi: 'Song hành giữa vận hành y tế và kinh doanh số',
            en: 'Healthcare operations alongside digital commerce',
          })}
        </h2>
      </div>

      <div className="mt-12 divide-y divide-[#EEF0F5]/[0.08] border-y border-[#EEF0F5]/[0.08]">
        {PROFILE.experiences.map((exp) => {
          const meta = DOMAIN_META[exp.domain];

          return (
            <div key={exp.id} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <div className="font-mono text-xs tabular-nums text-[#7A8296]">
                  {t(exp.period)}
                </div>
                <div className="mt-2 inline-flex items-center gap-2 font-mono text-xs text-[#A3A9B8]">
                  <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                  {meta.code}
                </div>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-lg font-medium text-[#EEF0F5]">{t(exp.role)}</h3>
                <p className="mt-0.5 text-sm text-[#A3A9B8]">{t(exp.organization)}</p>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#A3A9B8]">
                  {t(exp.description)}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-6 text-[#EEF0F5]"
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
