# Project Agent Rules — Portfolio Cá Nhân Đa Ngành

## Tổng quan Dự án
- **Mục tiêu**: Trang web portfolio cá nhân đa ngành (Lập trình · Buôn bán · Quảng cáo & Tiếp thị · Logistics Bệnh viện Việt Đức), song ngữ VI/EN, phong cách Dark Mode hiện đại.
- **Tech Stack**: Vite + React + TypeScript + Tailwind CSS v4 + Lucide React.
- **Runtime cục bộ**: Sử dụng Node.js (v24+) và dependencies cài cục bộ tại `node_modules/`.

## Quy ước Kiến trúc
- **Single Source of Truth**: Toàn bộ nội dung hiển thị song ngữ `{ vi, en }` phải được đặt tại `src/data/profile.ts`. Không hardcode nội dung cá nhân rải rác trong component.
- **KISS & YAGNI**: Giữ cấu trúc đơn giản, static SPA không cần backend. Không cài thêm thư viện ngoài nhu cầu thực tế.
- **Tổ chức thư mục**:
  - `src/data/` — dữ liệu cá nhân & dự án song ngữ
  - `src/types/` — kiểu dữ liệu TypeScript
  - `src/context/` — quản lý trạng thái ngôn ngữ VI/EN
  - `src/components/` — các section và UI component độc lập
  - `plans/` — theo dõi tiến độ theo Phase
  - `docs/` — tài liệu thiết kế (spec)
