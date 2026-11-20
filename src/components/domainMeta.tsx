import { Code2, Megaphone, PackageCheck, Store, type LucideIcon } from 'lucide-react';
import type { DomainId, LocalizedText } from '../types/portfolio';

export interface DomainMeta {
  code: string;
  icon: LucideIcon;
  label: LocalizedText;
  dot: string;
}

/**
 * Signature detail: 3-letter operational code (DEV · COM · MKT · LOG)
 * paired with a subtle 6px indicator dot. Icons stay neutral (text role color).
 */
export const DOMAIN_META: Record<DomainId, DomainMeta> = {
  programming: {
    code: 'DEV',
    icon: Code2,
    label: { vi: 'Lập trình', en: 'Programming' },
    dot: 'bg-[#2DD4BF]',
  },
  commerce: {
    code: 'COM',
    icon: Store,
    label: { vi: 'Buôn bán', en: 'Commerce' },
    dot: 'bg-[#EAB308]',
  },
  marketing: {
    code: 'MKT',
    icon: Megaphone,
    label: { vi: 'Quảng cáo & Tiếp thị', en: 'Ads & Marketing' },
    dot: 'bg-[#FB7185]',
  },
  logistics: {
    code: 'LOG',
    icon: PackageCheck,
    label: { vi: 'Logistics Việt Đức', en: 'Viet Duc Logistics' },
    dot: 'bg-[#4CC38A]',
  },
};
