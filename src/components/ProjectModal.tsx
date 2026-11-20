import { useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { ProjectItem } from '../types/portfolio';
import { DOMAIN_META } from './domainMeta';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const meta = DOMAIN_META[project.domain];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#07080D]/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#EEF0F5]/[0.12] bg-[#11141C] p-6 shadow-2xl shadow-black/60 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 font-mono text-xs text-[#A3A9B8]">
            <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
            <span>{meta.code}</span>
            <span className="text-[#7A8296]">·</span>
            <span>{t(meta.label)}</span>
            <span className="text-[#7A8296]">·</span>
            <span className="tabular-nums text-[#7A8296]">{project.period}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-[#EEF0F5]/[0.08] bg-[#1A1E28] text-[#A3A9B8] transition-colors duration-150 hover:text-[#EEF0F5]"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        <h3 className="mt-4 text-xl font-medium leading-snug text-[#EEF0F5] sm:text-2xl">
          {t(project.title)}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          <span className="font-mono text-[#2DD4BF]">{t(project.metric)}</span>
          <span className="text-[#7A8296]">
            {t({ vi: 'Vai trò:', en: 'Role:' })}{' '}
            <span className="text-[#EEF0F5]">{t(project.role)}</span>
          </span>
        </div>

        <div className="mt-6 divide-y divide-[#EEF0F5]/[0.08] overflow-hidden rounded-xl border border-[#EEF0F5]/[0.08] bg-[#0B0D14]">
          <div className="p-4">
            <div className="font-mono text-xs text-[#7A8296]">
              {t({ vi: 'Bối cảnh', en: 'Context' })}
            </div>
            <p className="mt-1.5 text-sm leading-6 text-[#A3A9B8]">{t(project.details.context)}</p>
          </div>

          <div className="p-4">
            <div className="font-mono text-xs text-[#7A8296]">
              {t({ vi: 'Cách triển khai', en: 'Approach' })}
            </div>
            <p className="mt-1.5 text-sm leading-6 text-[#A3A9B8]">
              {t(project.details.solution)}
            </p>
          </div>

          <div className="p-4">
            <div className="font-mono text-xs text-[#2DD4BF]">
              {t({ vi: 'Kết quả', en: 'Outcome' })}
            </div>
            <p className="mt-1.5 text-sm leading-6 text-[#EEF0F5]">{t(project.details.impact)}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#EEF0F5]/[0.08] pt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#EEF0F5]/[0.08] bg-[#0B0D14] px-2 py-0.5 font-mono text-xs text-[#7A8296]"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#EEF0F5] px-4 text-xs font-medium text-[#0B0D14] transition-colors duration-150 hover:bg-white"
            >
              {t({ vi: 'Mở liên kết', en: 'Open link' })}
              <ExternalLink size={14} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
