import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import type { DomainId } from '../types/portfolio';
import { DOMAIN_META } from './domainMeta';

interface HeroProps {
  onSelectDomain: (domain: DomainId) => void;
}

export function Hero({ onSelectDomain }: HeroProps) {
  const { t } = useLanguage();
  const [previewDomain, setPreviewDomain] = useState<DomainId>('programming');

  const activePillar =
    PROFILE.pillars.find((p) => p.id === previewDomain) ?? PROFILE.pillars[0];
  const activeMeta = DOMAIN_META[activePillar.id];
  const ActiveIcon = activeMeta.icon;
  const domainProjectCount = PROFILE.projects.filter((p) => p.domain === activePillar.id).length;

  return (
    <section id="top" className="border-b border-[#EEF0F5]/[0.08]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-12 lg:items-center lg:gap-10">
        {/* Left: Editorial Display Typography */}
        <div className="animate-enter lg:col-span-7">
          <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#9BA2B2]">
            <span className="inline-flex items-center gap-2 text-[#EEF0F5]">
              <span className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
              {t(PROFILE.brand.availability)}
            </span>
            <span className="text-[#5B6275]">·</span>
            <span>{t(PROFILE.brand.location)}</span>
          </div>

          <h1 className="font-display max-w-2xl text-[40px] font-normal leading-[1.06] tracking-[-0.025em] text-[#EEF0F5] sm:text-[52px] lg:text-[58px]">
            {t(PROFILE.hero.headline)}
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#9BA2B2] sm:text-[17px]">
            {t(PROFILE.hero.subheadline)}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#EEF0F5] px-5 text-sm font-medium text-[#090B10] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-colors duration-150 hover:bg-white active:scale-[0.98]"
            >
              {t({ vi: 'Xem dự án thực tế', en: 'Explore selected work' })}
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#EEF0F5]/[0.1] bg-[#151923] px-5 text-sm font-medium text-[#EEF0F5] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors duration-150 hover:border-[#EEF0F5]/[0.2] hover:bg-[#1C212E] active:scale-[0.98]"
            >
              {t(PROFILE.hero.secondaryCta)}
            </a>
          </div>

          {/* Grounded institutional provenance — replaces generic stat template */}
          <div className="mt-10 border-t border-[#EEF0F5]/[0.08] pt-6">
            <div className="text-xs text-[#6F778B]">
              {t({ vi: 'Đơn vị & môi trường từng công tác', en: 'Organizations & environments' })}
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-[#C7CCD8]">
              <span>Bình Minh Group</span>
              <span className="text-[#4B5263]">/</span>
              <span>{t({ vi: 'Bệnh viện Hữu nghị Việt Đức', en: 'Viet Duc Hospital' })}</span>
              <span className="text-[#4B5263]">/</span>
              <span>V99 Group · Herbalife</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Multi-Track Dossier */}
        <div className="animate-enter-delay-1 lg:col-span-5">
          <div className="surface-panel rounded-2xl p-5">
            {/* Dossier header */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {PROFILE.brand.avatarUrl ? (
                  <img
                    src={PROFILE.brand.avatarUrl}
                    alt={PROFILE.brand.name}
                    className="h-9 w-9 rounded-lg border border-[#EEF0F5]/[0.1] object-cover"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#EEF0F5]/[0.1] bg-[#171B26] font-mono text-xs font-medium text-[#EEF0F5]">
                    {PROFILE.brand.monogram}
                  </div>
                )}
                <div>
                  <div className="text-sm font-medium text-[#EEF0F5]">{PROFILE.brand.name}</div>
                  <div className="font-mono text-xs text-[#7A8296]">
                    {t({ vi: 'Hồ sơ 4 trụ cột', en: '4-track operator dossier' })}
                  </div>
                </div>
              </div>
              <span className="font-mono text-xs tabular-nums text-[#7A8296]">2026</span>
            </div>

            {/* Interactive 4-track selector */}
            <div
              role="tablist"
              aria-label="Discipline preview"
              className="mt-5 grid grid-cols-4 gap-1.5 rounded-xl border border-[#EEF0F5]/[0.08] bg-[#090B10] p-1"
            >
              {PROFILE.pillars.map((pillar) => {
                const meta = DOMAIN_META[pillar.id];
                const isSelected = previewDomain === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setPreviewDomain(pillar.id)}
                    className={`flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-lg font-mono text-xs transition-colors duration-150 ${
                      isSelected
                        ? 'bg-[#171B26] text-[#EEF0F5] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                        : 'text-[#7A8296] hover:text-[#C7CCD8]'
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                    <span>{meta.code}</span>
                  </button>
                );
              })}
            </div>

            {/* Active track detail pane */}
            <div
              key={activePillar.id}
              className="mt-4 rounded-xl border border-[#EEF0F5]/[0.08] bg-[#0B0D14] p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs text-[#9BA2B2]">
                  <ActiveIcon size={16} strokeWidth={1.5} className="text-[#9BA2B2]" />
                  <span>{t(activePillar.shortTitle)}</span>
                </div>
                <span className="font-mono text-xs tabular-nums text-[#7A8296]">
                  {domainProjectCount}{' '}
                  {t({ vi: 'dấu ấn', en: domainProjectCount === 1 ? 'case' : 'cases' })}
                </span>
              </div>

              <h2 className="mt-3 text-base font-medium leading-snug text-[#EEF0F5]">
                {t(activePillar.title)}
              </h2>
              <p className="mt-2 text-xs leading-5 text-[#9BA2B2]">{t(activePillar.description)}</p>

              <ul className="mt-4 space-y-2 border-t border-[#EEF0F5]/[0.06] pt-3.5">
                {activePillar.highlights.slice(0, 2).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs leading-5 text-[#D5DAE5]">
                    <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${activeMeta.dot}`} />
                    <span>{t(item)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {activePillar.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[#EEF0F5]/[0.08] bg-[#10131B] px-2 py-0.5 font-mono text-[11px] text-[#9BA2B2]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct jump action */}
            <button
              type="button"
              onClick={() => onSelectDomain(activePillar.id)}
              className="mt-3 flex h-10 w-full cursor-pointer items-center justify-between rounded-xl border border-[#EEF0F5]/[0.08] bg-[#151923] px-4 text-xs font-medium text-[#EEF0F5] transition-colors duration-150 hover:border-[#EEF0F5]/[0.18] hover:bg-[#1B202D]"
            >
              <span>
                {t({
                  vi: `Lọc dự án mảng ${activePillar.shortTitle.vi}`,
                  en: `Filter ${activePillar.shortTitle.en} projects`,
                })}
              </span>
              <ArrowUpRight size={16} strokeWidth={1.5} className="text-[#2DD4BF]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
