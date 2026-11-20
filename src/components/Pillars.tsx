import { ArrowRight } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import type { DomainId } from '../types/portfolio';
import { DOMAIN_META } from './domainMeta';

interface PillarsProps {
  onSelectDomain: (domain: DomainId) => void;
}

export function Pillars({ onSelectDomain }: PillarsProps) {
  const { t } = useLanguage();

  return (
    <section id="pillars" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl font-normal leading-[1.12] tracking-[-0.02em] text-[#EEF0F5] sm:text-4xl">
            {t({
              vi: 'Bốn mảng công việc bổ trợ trực tiếp cho nhau',
              en: 'Four disciplines that reinforce one another',
            })}
          </h2>
        </div>
        <p className="text-sm leading-6 text-[#9BA2B2] lg:col-span-5">
          {t({
            vi: 'Kỹ thuật phần mềm & AI giúp tự động hóa quy trình, kinh doanh & tiếp thị giúp hiểu người mua thực tế, còn hậu cần vật tư phẫu thuật tại Việt Đức rèn kỷ luật chuẩn xác.',
            en: 'Software & AI automate workflows, health commerce sharpens buyer empathy, and surgical supply logistics at Viet Duc Hospital enforces strict precision.',
          })}
        </p>
      </div>

      <div className="mt-12 divide-y divide-[#EEF0F5]/[0.08] border-y border-[#EEF0F5]/[0.08]">
        {PROFILE.pillars.map((pillar) => {
          const meta = DOMAIN_META[pillar.id];
          const Icon = meta.icon;

          return (
            <article
              key={pillar.id}
              className="group -mx-4 grid gap-6 rounded-xl px-4 py-8 transition-colors duration-150 hover:bg-[#10131B]/80 md:grid-cols-12 md:items-start md:gap-8"
            >
              <div className="md:col-span-4">
                <div className="flex items-center gap-2.5 font-mono text-xs text-[#7A8296]">
                  <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                  <span>{meta.code}</span>
                  <Icon size={16} strokeWidth={1.5} className="ml-1 text-[#7A8296]" />
                </div>
                <h3 className="mt-3 text-lg font-medium text-[#EEF0F5]">{t(pillar.title)}</h3>
                <p className="mt-1.5 text-sm leading-6 text-[#7A8296]">{t(pillar.subtitle)}</p>
              </div>

              <div className="md:col-span-5">
                <p className="text-sm leading-6 text-[#9BA2B2]">{t(pillar.description)}</p>
                <ul className="mt-4 space-y-2">
                  {pillar.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-6 text-[#D5DAE5]"
                    >
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#7A8296]" />
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between gap-5 md:col-span-3 md:items-end">
                <div className="flex flex-wrap gap-1.5 md:justify-end">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#EEF0F5]/[0.08] bg-[#10131B] px-2 py-0.5 font-mono text-xs text-[#9BA2B2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectDomain(pillar.id)}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-[#2DD4BF] transition-colors duration-150 hover:text-[#5EEAD4]"
                >
                  {t({ vi: 'Xem dự án mảng này', en: 'See related work' })}
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
