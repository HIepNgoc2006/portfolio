# Portfolio Implementation Roadmap

## Phase 1: Khởi tạo Môi trường & Cấu trúc Dự án
- [x] Chốt thiết kế & tech stack (Vite + React + TypeScript + Tailwind CSS v4)
- [x] Khởi tạo `.env`, `.env.example`, `.agents/AGENTS.md`, `plans/ROADMAP.md`
- [x] Ghi tài liệu thiết kế tại `docs/superpowers/specs/2026-11-20-portfolio-design.md`
- [x] Khởi tạo `package.json`, cấu hình Vite/TypeScript/Tailwind và cài đặt dependencies cục bộ (`node_modules/`)
- [x] Chạy `codegraph init` kích hoạt đồ thị mã nguồn

## Phase 2: Xây dựng Kiến trúc Dữ liệu Song ngữ & Style Hệ thống
- [x] Định nghĩa types (`src/types/portfolio.ts`)
- [x] Xây dựng `src/data/profile.ts` (nội dung mẫu sát 4 mảng, song ngữ VI/EN, dễ chỉnh sửa)
- [x] Xây dựng `LanguageContext` lưu lựa chọn VI/EN vào `localStorage`
- [x] Thiết lập theme Dark Mode & typography (`src/index.css`, `index.html`)

## Phase 3: Xây dựng Giao diện các Section
- [x] `Navbar` (Sticky glass, menu responsive, chuyển ngôn ngữ VI/EN)
- [x] `Hero` (Định vị đa ngành + khối tóm tắt 4 trụ cột & chỉ số)
- [x] `Pillars` (4 trụ cột năng lực có tương tác lọc nhanh xuống dự án)
- [x] `Projects` + `ProjectModal` (Lọc 5 tab, thẻ metric, modal chi tiết Bối cảnh → Giải pháp → Kết quả)
- [x] `Experience` (Dòng thời gian hành trình đa ngành)
- [x] `Contact` + `Footer` (4 hướng hợp tác, copy nhanh Email, tạo tin nhắn nhanh cho Zalo/Email)

## Phase 4: Kiểm thử, Xác minh & Sẵn sàng Deploy
- [x] Chạy `npm run build` (`tsc -b && vite build`) kiểm tra 0 lỗi
- [/] Kiểm tra hiển thị thực tế trên trình duyệt (VI & EN, bộ lọc & modal)
- [x] Thêm `README.md` & `vercel.json` hướng dẫn sửa nội dung và deploy lên Vercel/Netlify
