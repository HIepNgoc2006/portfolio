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

  const showFlagship = activeDomain === 'all' && visibleProjects.length > 2;
  const flagship = showFlagship ? visibleProjects[0] : null;
  const gridProjects = showFlagship ? visibleProjects.slice(1) : visibleProjects;

  return (
    <section id="projects" className="border-y border-[#EEF0F5]/[0.08] bg-[#06080D] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-normal leading-[1.12] tracking-[-0.02em] text-[#EEF0F5] sm:text-4xl">
              {t({
                vi: 'Dự án & dấu ấn thực tế',
                en: 'Selected work & field records',
              })}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#9BA2B2]">
              {t({
                vi: 'Bấm vào từng mục để xem chi tiết bối cảnh, cách triển khai và kết quả.',
                en: 'Select any item to inspect context, approach, and outcome.',
              })}
            </p>
          </div>

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
                        ? 'border-[#EEF0F5]/[0.2] bg-[#171B26] text-[#EEF0F5] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                        : 'border-[#EEF0F5]/[0.08] bg-[#10131B] text-[#9BA2B2] hover:border-[#EEF0F5]/[0.15] hover:text-[#EEF0F5]'
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
                      ? 'border-[#EEF0F5]/[0.2] bg-[#171B26] text-[#EEF0F5] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                      : 'border-[#EEF0F5]/[0.08] bg-[#10131B] text-[#9BA2B2] hover:border-[#EEF0F5]/[0.15] hover:text-[#EEF0F5]'
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                  {t(meta.label)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Flagship wide showcase card — breaks uniform 2x2 grid monotony */}
        {flagship && (
          <article
            onClick={() => setSelected(flagship)}
            className="surface-panel group mt-10 grid cursor-pointer gap-8 rounded-2xl p-6 transition-colors duration-150 hover:border-[#EEF0F5]/[0.18] hover:bg-[#141824] md:grid-cols-12 md:p-8"
          >
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 font-mono text-xs text-[#7A8296]">
                <span className="tabular-nums text-[#2DD4BF]">01</span>
                <span>·</span>
                <span className="inline-flex items-center gap-2 text-[#C7CCD8]">
                  <span className={`h-1.5 w-1.5 rounded-full ${DOMAIN_META[flagship.domain].dot}`} />
                  {DOMAIN_META[flagship.domain].code}
                </span>
                <span>·</span>
                <span className="tabular-nums">{flagship.period}</span>
              </div>

              <h3 className="font-display mt-4 text-2xl font-normal leading-snug tracking-[-0.015em] text-[#EEF0F5] sm:text-3xl">
                {t(flagship.title)}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#9BA2B2]">
                {t(flagship.summary)}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6 border-t border-[#EEF0F5]/[0.08] pt-6 md:col-span-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-[#7A8296]">
                    {t({ vi: 'Điểm nổi bật', en: 'Key outcome' })}
                  </div>
                  <div className="mt-1 font-mono text-sm text-[#EEF0F5]">{t(flagship.metric)}</div>
                </div>

                <div>
                  <div className="text-xs text-[#7A8296]">{t({ vi: 'Vai trò', en: 'Role' })}</div>
                  <div className="mt-1 text-sm text-[#C7CCD8]">{t(flagship.role)}</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {flagship.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#EEF0F5]/[0.08] bg-[#090B10] px-2 py-0.5 font-mono text-xs text-[#9BA2B2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#2DD4BF] transition-colors duration-150 group-hover:text-[#5EEAD4]">
                  {t({ vi: 'Chi tiết', en: 'Read case' })}
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </article>
        )}

        {/* Secondary editorial grid */}
        <div className={`${flagship ? 'mt-5' : 'mt-10'} grid gap-5 md:grid-cols-2`}>
          {gridProjects.map((project, idx) => {
            const meta = DOMAIN_META[project.domain];
            const indexNumber = String(flagship ? idx + 2 : idx + 1).padStart(2, '0');

            return (
              <article
                key={project.id}
                onClick={() => setSelected(project)}
                className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-[#EEF0F5]/[0.08] bg-[#10131B] p-6 transition-colors duration-150 hover:border-[#EEF0F5]/[0.18] hover:bg-[#141824]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 font-mono text-xs text-[#7A8296]">
                    <span className="inline-flex items-center gap-2 text-[#9BA2B2]">
                      <span className="tabular-nums text-[#5B6275]">{indexNumber}</span>
                      <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                      <span>{meta.code}</span>
                      <span className="text-[#5B6275]">·</span>
                      <span>{t(meta.label)}</span>
                    </span>
                    <span className="tabular-nums">{project.period}</span>
                  </div>

                  <h3 className="mt-4 text-lg font-medium leading-snug text-[#EEF0F5]">
                    {t(project.title)}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-[#9BA2B2]">{t(project.summary)}</p>

                  <div className="mt-4 font-mono text-xs text-[#2DD4BF]">{t(project.metric)}</div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#EEF0F5]/[0.08] pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#EEF0F5]/[0.08] bg-[#090B10] px-2 py-0.5 font-mono text-xs text-[#7A8296]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-[#9BA2B2] transition-colors duration-150 group-hover:text-[#EEF0F5]">
                    {t({ vi: 'Chi tiết', en: 'Details' })}
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
