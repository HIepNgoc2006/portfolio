# Portfolio Cá Nhân Đa Ngành (VI / EN)

Trang portfolio thương hiệu cá nhân theo phong cách **Dark Mode hiện đại**, giới thiệu 4 trụ cột:
1. **Lập trình & Công nghệ**
2. **Buôn bán & Kinh doanh**
3. **Quảng cáo Sản phẩm & Tiếp thị viên**
4. **Logistics Y tế — Bệnh viện Hữu nghị Việt Đức**

## 1. Cách chỉnh sửa nội dung của bạn
Toàn bộ nội dung song ngữ **Việt / Anh** nằm tập trung trong đúng 1 file:
- `src/data/profile.ts`

Mở file này để thay:
- Tên hiển thị (`brand.name`), chữ viết tắt (`brand.monogram`), ảnh chân dung (`brand.avatarUrl`)
- Các dự án & dấu ấn (`projects`)
- Kinh nghiệm (`experiences`)
- Email, số điện thoại, link Zalo, Facebook, GitHub (`social`)

## 2. Chạy thử trên máy (Local)
```bash
npm install
npm run dev
```
Sau đó mở địa chỉ hiển thị trên terminal (mặc định `http://localhost:5173`).

## 3. Đưa trang web lên mạng (Deploy miễn phí)

### Cách 1: Vercel (Khuyến nghị)
1. Đẩy thư mục dự án lên GitHub.
2. Vào [vercel.com](https://vercel.com) → Đăng nhập bằng GitHub → **Add New Project** → chọn repo → bấm **Deploy**.
3. Mọi lần sửa file và `git push` sau này sẽ tự động cập nhật lên web.

### Cách 2: Netlify Drop (Không cần Git)
1. Chạy `npm run build` để tạo thư mục `dist/`.
2. Vào [app.netlify.com/drop](https://app.netlify.com/drop) và kéo thả thư mục `dist/` vào trình duyệt.
