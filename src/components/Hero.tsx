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

  return (
    <section id="top" className="border-b border-[#EEF0F5]/[0.08]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-28 lg:grid-cols-12 lg:items-center">
        {/* Left: Calm editorial hierarchy */}
        <div className="lg:col-span-7">
          <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#A3A9B8]">
            <span className="inline-flex items-center gap-2 text-[#EEF0F5]">
              <span className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
              {t(PROFILE.brand.availability)}
            </span>
            <span className="text-[#7A8296]">·</span>
            <span>{t(PROFILE.brand.location)}</span>
          </div>

          <h1 className="max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-[#EEF0F5] sm:text-5xl lg:text-[52px]">
            {t(PROFILE.hero.headline)}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#A3A9B8] sm:text-[17px]">
            {t(PROFILE.hero.subheadline)}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#pillars"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#EEF0F5] px-5 text-sm font-medium text-[#0B0D14] transition-colors duration-150 hover:bg-white active:scale-[0.98]"
            >
              {t(PROFILE.hero.primaryCta)}
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#EEF0F5]/[0.1] bg-[#1A1E28] px-5 text-sm font-medium text-[#EEF0F5] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors duration-150 hover:border-[#EEF0F5]/[0.2] hover:bg-[#222736] active:scale-[0.98]"
            >
              {t(PROFILE.hero.secondaryCta)}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#EEF0F5]/[0.08] pt-8">
            {PROFILE.hero.stats.map((stat) => (
              <div key={stat.value}>
                <div className="font-mono text-xl font-medium tabular-nums text-[#EEF0F5] sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs leading-5 text-[#7A8296]">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Operator Index — structured discipline ledger */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-[#EEF0F5]/[0.08] bg-[#11141C] p-4">
            {/* Ledger header */}
            <div className="flex items-center justify-between px-2 pb-3 pt-1">
              <div className="flex items-center gap-3">
                {PROFILE.brand.avatarUrl ? (
                  <img
                    src={PROFILE.brand.avatarUrl}
                    alt={PROFILE.brand.name}
                    className="h-9 w-9 rounded-lg border border-[#EEF0F5]/[0.08] object-cover"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#EEF0F5]/[0.1] bg-[#1A1E28] font-mono text-xs font-medium text-[#EEF0F5]">
                    {PROFILE.brand.monogram}
                  </div>
                )}
                <div>
                  <div className="text-sm font-medium text-[#EEF0F5]">{PROFILE.brand.name}</div>
                  <div className="text-xs text-[#7A8296]">
                    {t({ vi: '4 mảng đang trực tiếp làm', en: '4 active operational tracks' })}
                  </div>
                </div>
              </div>
              <span className="font-mono text-xs tabular-nums text-[#7A8296]">2026</span>
            </div>

            {/* Discipline rows */}
            <div className="mt-1 divide-y divide-[#EEF0F5]/[0.06] overflow-hidden rounded-xl border border-[#EEF0F5]/[0.08] bg-[#0B0D14]">
              {PROFILE.pillars.map((pillar) => {
                const meta = DOMAIN_META[pillar.id];
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => onSelectDomain(pillar.id)}
                    className="group flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-3.5 text-left transition-colors duration-150 hover:bg-[#1A1E28]"
                  >
                    <div className="flex min-w-0 items-center gap-3.5">
                      <span className="flex w-11 shrink-0 items-center gap-2 font-mono text-xs text-[#7A8296]">
                        <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                        {meta.code}
                      </span>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium text-[#EEF0F5]">
                          {t(pillar.shortTitle)}
                        </div>
                        <div className="truncate text-xs text-[#7A8296]">
                          {t(pillar.subtitle)}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="shrink-0 text-[#7A8296] transition-colors duration-150 group-hover:text-[#EEF0F5]"
                    />
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between px-2 pt-3 text-xs text-[#7A8296]">
              <span>
                {t({ vi: 'Chọn một mảng để xem dự án', en: 'Select a track to filter work' })}
              </span>
              <span className="font-mono tabular-nums text-[#A3A9B8]">4/4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
