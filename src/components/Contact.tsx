import { useState, type FormEvent } from 'react';
import { Check, Copy, Github, Mail, MessageCircle, Send, Share2 } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import type { DomainId } from '../types/portfolio';
import { DOMAIN_META } from './domainMeta';

export function Contact() {
  const { lang, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [topic, setTopic] = useState<DomainId>('programming');
  const [message, setMessage] = useState('');

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(PROFILE.social.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const buildDraftMessage = () => {
    const topicLabel = DOMAIN_META[topic].label[lang];
    const who = senderName.trim() || (lang === 'vi' ? 'Đối tác' : 'Partner');
    const body =
      message.trim() ||
      (lang === 'vi'
        ? 'Mình muốn trao đổi thêm về cơ hội hợp tác.'
        : 'I would like to discuss a potential collaboration.');

    return lang === 'vi'
      ? `Chào ${PROFILE.brand.name}, mình là ${who}.\nMảng quan tâm: ${topicLabel}\nNội dung: ${body}`
      : `Hi ${PROFILE.brand.name}, I'm ${who}.\nArea of interest: ${topicLabel}\nMessage: ${body}`;
  };

  const handleMailSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Portfolio] ${DOMAIN_META[topic].label[lang]} — ${senderName.trim() || PROFILE.brand.name}`,
    );
    const body = encodeURIComponent(buildDraftMessage());
    window.location.href = `mailto:${PROFILE.social.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyDraft = async () => {
    await navigator.clipboard.writeText(buildDraftMessage());
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2200);
  };

  return (
    <section id="contact" className="border-t border-[#EEF0F5]/[0.08] bg-[#07080D] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-[#7A8296]">
            {t({ vi: 'Kết nối & Hợp tác', en: 'Contact' })}
          </p>
          <h2 className="mt-2 text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-[#EEF0F5] sm:text-3xl">
            {t({
              vi: 'Bạn đang cần phối hợp ở mảng nào',
              en: 'Open to practical collaborations',
            })}
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#A3A9B8]">
            {t({
              vi: 'Chọn một hướng hợp tác bên dưới hoặc nhắn trực tiếp qua Zalo và Email.',
              en: 'Select a track below or reach out directly via Zalo or email.',
            })}
          </p>
        </div>

        {/* 4 Collaboration selectors */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROFILE.collaborations.map((col) => {
            const meta = DOMAIN_META[col.domain];
            const isSelected = topic === col.domain;

            return (
              <button
                key={col.domain}
                type="button"
                onClick={() => setTopic(col.domain)}
                className={`cursor-pointer rounded-xl border p-4 text-left transition-colors duration-150 ${
                  isSelected
                    ? 'border-[#EEF0F5]/[0.2] bg-[#1A1E28] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                    : 'border-[#EEF0F5]/[0.08] bg-[#11141C] hover:border-[#EEF0F5]/[0.14]'
                }`}
              >
                <div className="flex items-center gap-2 font-mono text-xs text-[#7A8296]">
                  <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                  <span>{meta.code}</span>
                </div>
                <div className="mt-2.5 text-sm font-medium text-[#EEF0F5]">{t(col.title)}</div>
                <p className="mt-1.5 text-xs leading-5 text-[#A3A9B8]">{t(col.description)}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {/* Direct channels */}
          <div className="rounded-2xl border border-[#EEF0F5]/[0.08] bg-[#11141C] p-6 lg:col-span-5">
            <h3 className="text-base font-medium text-[#EEF0F5]">
              {t({ vi: 'Kênh liên hệ trực tiếp', en: 'Direct channels' })}
            </h3>
            <p className="mt-1 text-xs text-[#7A8296]">
              {t({
                vi: 'Phản hồi nhanh nhất qua Zalo hoặc Email',
                en: 'Fastest reply via Zalo or email',
              })}
            </p>

            <div className="mt-5 divide-y divide-[#EEF0F5]/[0.06] overflow-hidden rounded-xl border border-[#EEF0F5]/[0.08] bg-[#0B0D14]">
              <div className="flex h-12 items-center justify-between gap-2 px-4">
                <div className="flex min-w-0 items-center gap-3">
                  <Mail size={16} strokeWidth={1.5} className="shrink-0 text-[#7A8296]" />
                  <span className="truncate font-mono text-xs text-[#EEF0F5]">
                    {PROFILE.social.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex h-7 shrink-0 cursor-pointer items-center gap-1.5 rounded-md border border-[#EEF0F5]/[0.08] bg-[#1A1E28] px-2.5 text-xs text-[#A3A9B8] transition-colors duration-150 hover:text-[#EEF0F5]"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} strokeWidth={1.5} className="text-[#4CC38A]" />
                      {t({ vi: 'Đã chép', en: 'Copied' })}
                    </>
                  ) : (
                    <>
                      <Copy size={14} strokeWidth={1.5} />
                      {t({ vi: 'Chép', en: 'Copy' })}
                    </>
                  )}
                </button>
              </div>

              <a
                href={PROFILE.social.zalo}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 items-center justify-between px-4 text-sm text-[#A3A9B8] transition-colors duration-150 hover:bg-[#1A1E28] hover:text-[#EEF0F5]"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle size={16} strokeWidth={1.5} className="text-[#7A8296]" />
                  <span>Zalo ({PROFILE.social.phone})</span>
                </span>
                <span className="font-mono text-xs text-[#7A8296]">↗</span>
              </a>

              <a
                href={PROFILE.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 items-center justify-between px-4 text-sm text-[#A3A9B8] transition-colors duration-150 hover:bg-[#1A1E28] hover:text-[#EEF0F5]"
              >
                <span className="flex items-center gap-3">
                  <Share2 size={16} strokeWidth={1.5} className="text-[#7A8296]" />
                  <span>Facebook</span>
                </span>
                <span className="font-mono text-xs text-[#7A8296]">↗</span>
              </a>

              <a
                href={PROFILE.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 items-center justify-between px-4 text-sm text-[#A3A9B8] transition-colors duration-150 hover:bg-[#1A1E28] hover:text-[#EEF0F5]"
              >
                <span className="flex items-center gap-3">
                  <Github size={16} strokeWidth={1.5} className="text-[#7A8296]" />
                  <span>GitHub</span>
                </span>
                <span className="font-mono text-xs text-[#7A8296]">↗</span>
              </a>
            </div>
          </div>

          {/* Quick message composer */}
          <form
            onSubmit={handleMailSubmit}
            className="rounded-2xl border border-[#EEF0F5]/[0.08] bg-[#11141C] p-6 lg:col-span-7"
          >
            <h3 className="text-base font-medium text-[#EEF0F5]">
              {t({ vi: 'Soạn nhanh lời nhắn', en: 'Quick message' })}
            </h3>
            <p className="mt-1 text-xs text-[#7A8296]">
              {t({
                vi: 'Mở thẳng ứng dụng Email hoặc sao chép một bấm để dán sang Zalo',
                en: 'Open in your email app or copy in one click to paste into Zalo',
              })}
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs text-[#A3A9B8]">
                  {t({ vi: 'Tên hoặc đơn vị', en: 'Name or organization' })}
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder={t({ vi: 'Nguyễn Văn A', en: 'Your name' })}
                  className="h-10 w-full rounded-lg border border-[#EEF0F5]/[0.08] bg-[#0B0D14] px-3 text-sm text-[#EEF0F5] placeholder:text-[#7A8296]/70 focus:border-[#EEF0F5]/[0.24]"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs text-[#A3A9B8]">
                  {t({ vi: 'Mảng quan tâm', en: 'Topic' })}
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value as DomainId)}
                  className="h-10 w-full rounded-lg border border-[#EEF0F5]/[0.08] bg-[#0B0D14] px-3 text-sm text-[#EEF0F5] focus:border-[#EEF0F5]/[0.24]"
                >
                  {(['programming', 'commerce', 'marketing', 'logistics'] as DomainId[]).map(
                    (d) => (
                      <option key={d} value={d}>
                        {DOMAIN_META[d].code} — {t(DOMAIN_META[d].label)}
                      </option>
                    ),
                  )}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-xs text-[#A3A9B8]">
                {t({ vi: 'Nội dung', en: 'Message' })}
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t({
                  vi: 'Nhu cầu hợp tác, sản phẩm hoặc lịch trao đổi',
                  en: 'Project scope, product details, or preferred schedule',
                })}
                className="w-full resize-none rounded-lg border border-[#EEF0F5]/[0.08] bg-[#0B0D14] p-3 text-sm leading-6 text-[#EEF0F5] placeholder:text-[#7A8296]/70 focus:border-[#EEF0F5]/[0.24]"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-lg bg-[#EEF0F5] px-4 text-sm font-medium text-[#0B0D14] transition-colors duration-150 hover:bg-white active:scale-[0.98]"
              >
                <Send size={16} strokeWidth={1.5} />
                {t({ vi: 'Gửi qua Email', en: 'Send via email' })}
              </button>

              <button
                type="button"
                onClick={handleCopyDraft}
                className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-lg border border-[#EEF0F5]/[0.1] bg-[#1A1E28] px-4 text-sm font-medium text-[#EEF0F5] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors duration-150 hover:border-[#EEF0F5]/[0.2] active:scale-[0.98]"
              >
                {copiedMsg ? (
                  <>
                    <Check size={16} strokeWidth={1.5} className="text-[#4CC38A]" />
                    {t({ vi: 'Đã chép để dán Zalo', en: 'Copied for Zalo' })}
                  </>
                ) : (
                  <>
                    <Copy size={16} strokeWidth={1.5} />
                    {t({ vi: 'Chép dán Zalo', en: 'Copy for Zalo' })}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
