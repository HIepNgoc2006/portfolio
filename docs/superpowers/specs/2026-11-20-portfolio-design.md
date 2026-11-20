# Design Spec: Portfolio Cá Nhân Đa Ngành (Song ngữ VI/EN)

## 1. Mục tiêu
Xây dựng trang portfolio thương hiệu cá nhân đa ngành, giúp kết nối đối tác, khách hàng và cơ hội hợp tác ở 4 trụ cột:
1. **Lập trình** (Software / Web / Automation)
2. **Buôn bán & Kinh doanh** (Commerce / Sourcing / Sales)
3. **Quảng cáo & Tiếp thị** (Product Ads / Affiliate / Growth)
4. **Logistics Y tế — Bệnh viện Hữu nghị Việt Đức** (Healthcare Logistics & Operations)

## 2. Phong cách thị giác
- **Theme**: Dark Mode hiện đại, sắc nét (`#090B10` nền chính, `#11151F` bề mặt thẻ, `#1E2536` viền mảnh).
- **Accent**: Cyan (`#38BDF8`) làm màu nhấn chính; 4 màu phân loại mảng: Cyan (Lập trình), Amber (Buôn bán), Rose (Quảng cáo & Tiếp thị), Emerald (Logistics Y tế).
- **Font**: `Plus Jakarta Sans` (body & heading chuẩn dấu tiếng Việt) + `JetBrains Mono` (tags, số liệu, mốc thời gian).

## 3. Kiến trúc kỹ thuật
- **Stack**: Vite + React 19 + TypeScript + Tailwind CSS v4 + `lucide-react`.
- **Single Source of Truth**: Toàn bộ nội dung song ngữ `{ vi, en }` nằm tại `src/data/profile.ts` để chủ sở hữu dễ cập nhật không cần chạm vào UI code.
- **Trạng thái ngôn ngữ**: `LanguageContext` lưu vào `localStorage`, mặc định `vi`.
- **Deploy**: Static SPA sẵn sàng deploy trực tiếp lên Vercel, Netlify hoặc GitHub Pages.
