import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import type { DomainId, ProjectItem } from '../types/portfolio';
import { DOMAIN_META } from './domainMeta';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  activeDomain: DomainId | 'all';
  onChangeDomain: (domain: DomainId | 'all') => void;
}

const FILTER_ORDER: Array<DomainId | 'all'> = [
  'all',
  'programming',
  'commerce',
  'marketing',
  'logistics',
];

export function Projects({ activeDomain, onChangeDomain }: ProjectsProps) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  const visibleProjects =
    activeDomain === 'all'
      ? PROFILE.projects
      : PROFILE.projects.filter((p) => p.domain === activeDomain);

  return (
    <section id="projects" className="border-y border-[#EEF0F5]/[0.08] bg-[#07080D] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-xs text-[#7A8296]">
              {t({ vi: 'Dự án & Dấu ấn', en: 'Selected work' })}
            </p>
            <h2 className="mt-2 text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-[#EEF0F5] sm:text-3xl">
              {t({
                vi: 'Những việc thực tế đã và đang triển khai',
                en: 'Concrete initiatives across all four tracks',
              })}
            </h2>
          </div>

          {/* Quiet segmented filter tabs */}
          <div className="flex flex-wrap gap-2">
            {FILTER_ORDER.map((item) => {
              const isActive = activeDomain === item;

              if (item === 'all') {
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => onChangeDomain('all')}
                    className={`h-9 cursor-pointer rounded-lg border px-3.5 text-xs font-medium transition-colors duration-150 ${
                      isActive
                        ? 'border-[#EEF0F5]/[0.18] bg-[#1A1E28] text-[#EEF0F5] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                        : 'border-[#EEF0F5]/[0.08] bg-[#11141C] text-[#A3A9B8] hover:border-[#EEF0F5]/[0.14] hover:text-[#EEF0F5]'
                    }`}
                  >
                    {t({ vi: 'Tất cả', en: 'All' })}{' '}
                    <span className="ml-1 font-mono tabular-nums text-[#7A8296]">
                      {PROFILE.projects.length}
                    </span>
                  </button>
                );
              }

              const meta = DOMAIN_META[item];
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => onChangeDomain(item)}
                  className={`inline-flex h-9 cursor-pointer items-center gap-2 rounded-lg border px-3.5 text-xs font-medium transition-colors duration-150 ${
                    isActive
                      ? 'border-[#EEF0F5]/[0.18] bg-[#1A1E28] text-[#EEF0F5] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                      : 'border-[#EEF0F5]/[0.08] bg-[#11141C] text-[#A3A9B8] hover:border-[#EEF0F5]/[0.14] hover:text-[#EEF0F5]'
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                  {t(meta.label)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project) => {
            const meta = DOMAIN_META[project.domain];

            return (
              <article
                key={project.id}
                onClick={() => setSelected(project)}
                className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-[#EEF0F5]/[0.08] bg-[#11141C] p-6 transition-colors duration-150 hover:border-[#EEF0F5]/[0.16] hover:bg-[#151924]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 font-mono text-xs text-[#7A8296]">
                    <span className="inline-flex items-center gap-2 text-[#A3A9B8]">
                      <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                      {meta.code}
                      <span className="text-[#7A8296]">·</span>
                      <span>{t(meta.label)}</span>
                    </span>
                    <span className="tabular-nums">{project.period}</span>
                  </div>

                  <h3 className="mt-4 text-lg font-medium leading-snug text-[#EEF0F5]">
                    {t(project.title)}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-[#A3A9B8]">{t(project.summary)}</p>

                  {/* Outcome line — quiet mono with single accent, no glowing pill */}
                  <div className="mt-5 border-l-2 border-[#2DD4BF]/70 pl-3 font-mono text-xs text-[#EEF0F5]">
                    {t(project.metric)}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#EEF0F5]/[0.08] pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#EEF0F5]/[0.08] bg-[#0B0D14] px-2 py-0.5 font-mono text-xs text-[#7A8296]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-[#A3A9B8] transition-colors duration-150 group-hover:text-[#EEF0F5]">
                    {t({ vi: 'Xem chi tiết', en: 'Details' })}
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
