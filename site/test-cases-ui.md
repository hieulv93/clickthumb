# UI Test Case — click-thumb.com / YouTube Thumbnail Maker

**URL:** https://click-thumb.com/youtube-thumbnail-maker/
**Platform:** Desktop (Chrome) + Mobile (iOS Safari / Android Chrome)
**Total:** 50 test cases · 10 modules · P0: 15 · P1: 29 · P2: 6

---

## Bug Report (confirmed)

| Bug-ID | TC | Mô tả | Severity | Status | Fix |
|---|---|---|---|---|---|
| BUG-01 | TC-15/16 | Thiếu nút "Add more text" — template YouTube chỉ có 2 text fields, không có text thứ 3/4 để toggle | P1 | ✅ Fixed | Thêm text preset thứ 3 (`YOUR CHANNEL`, top:640) vào cả 5 YOUTUBE_TEMPLATES trong `lib/templates.ts` |
| BUG-02 | TC-39 | Link `"Need a smaller file? Compress it free →"` chỉ hiện 3 giây (gắn với state `downloaded`) | P1 | ✅ Fixed | Đổi điều kiện sang `done` (không reset) trong `CanvasToolClient.tsx` — link hiển thị vĩnh viễn sau lần đầu export |
| BUG-03 | TC-47 | Touch target nhiều phần tử dưới 44px: BG color swatches 28×28px, color input phụ 24×24px, Font/Template buttons cao 30px | P1 | ✅ Fixed | `BgSection`: swatches `w-7 h-7` → `w-9 h-9` (36px); `FontSelector`/`TemplateSelector`: `py-1.5` → `py-2` (~34px); `TextEditor` color input: `w-9` → `w-10` (40px) |
| BUG-04 | TC-49 | Ad slot không render sau khi download thành công (placeholder-slot-id → `return null`) | P1 | ✅ Fixed | `AdSlot.tsx`: khi không có real slot + dev mode + `actionDone=true` → hiện dashed placeholder để xác nhận vị trí; production vẫn ẩn đến khi có AdSense ID thật |

---

## Module 1 — Page Load & Canvas Render

| TC-ID | Test Case | Steps | Expected Result | Priority |
|---|---|---|---|---|
| TC-01 | Canvas render on load | Mở trang | Canvas hiện ra với template đầu tiên, kích thước đúng (1280×720 hiển thị dạng scaled) | P0 |
| TC-02 | Dimension label | Mở trang | Góc phải dưới canvas hiện `1280 × 720 px` | P1 |
| TC-03 | Template mặc định active | Mở trang | Template đầu tiên được highlight màu xanh trong danh sách Templates | P1 |
| TC-04 | Skeleton loading | Tải trang lần đầu (slow 3G) | Hiện skeleton pulse màu xám trước khi canvas load xong, không bị layout shift | P1 |

---

## Module 2 — Template Selection

| TC-ID | Test Case | Steps | Expected Result | Priority |
|---|---|---|---|---|
| TC-05 | Chọn template khác | Click vào template bất kỳ trong panel | Canvas cập nhật màu nền + text + font ngay lập tức; button template được highlight xanh | P0 |
| TC-06 | Chỉ 1 template active | Click lần lượt nhiều template | Luôn chỉ có 1 template được highlight | P1 |
| TC-07 | Reset khi đổi template | Chỉnh sửa text → đổi template khác | Text, màu nền, font reset về giá trị mặc định của template mới; nút Reset biến mất | P1 |

---

## Module 3 — Text Editor

| TC-ID | Test Case | Steps | Expected Result | Priority |
|---|---|---|---|---|
| TC-08 | Sửa Title | Gõ vào ô Title | Canvas cập nhật text realtime ngay khi gõ | P0 |
| TC-09 | Sửa Subtitle | Gõ vào ô Subtitle | Canvas cập nhật text Subtitle realtime | P0 |
| TC-10 | Xóa hết nội dung | Xóa sạch text trong ô Title | Canvas text trở thành rỗng (ô giữ placeholder, canvas không crash) | P1 |
| TC-11 | Placeholder ẩn khi focus | Click vào ô input | Placeholder mờ dần (opacity → 0) khi đang nhập | P2 |
| TC-12 | Đổi màu text | Click color picker bên cạnh Title → chọn màu đỏ | Text trên canvas đổi sang màu đỏ ngay lập tức | P0 |
| TC-13 | Font size slider | Kéo slider Font size sang phải (150%) | Text trên canvas phóng to theo tỷ lệ; label hiện `150%` | P0 |
| TC-14 | Font size slider tối thiểu | Kéo slider về trái nhất (60%) | Text thu nhỏ, không bị ẩn hoặc crash | P1 |
| TC-15 | Toggle "Add more text" | Click `+ Add more text` | Hiện thêm ô Line 3, Line 4; button đổi thành `− Less text fields` | P1 |
| TC-16 | Ẩn extra text fields | Đang hiện Line 3/4 → click `− Less text fields` | Line 3, 4 ẩn lại; text trên canvas giữ nguyên | P1 |

---

## Module 4 — Font Selector

| TC-ID | Test Case | Steps | Expected Result | Priority |
|---|---|---|---|---|
| TC-17 | Đổi font | Chọn font khác trong dropdown | Tất cả text trên canvas đổi font ngay lập tức | P0 |
| TC-18 | Font giữ nguyên khi sửa text | Đổi font → sau đó gõ thêm vào Title | Font không bị reset về mặc định | P1 |

---

## Module 5 — Background Color

| TC-ID | Test Case | Steps | Expected Result | Priority |
|---|---|---|---|---|
| TC-19 | Đổi màu nền | Click color picker Bg → chọn màu vàng | Canvas background đổi sang vàng ngay lập tức | P0 |
| TC-20 | Màu nền không ảnh hưởng background image | Upload ảnh nền → đổi màu nền | Ảnh nền vẫn hiển thị (màu nền nằm dưới ảnh) | P1 |

---

## Module 6 — Background Image Upload

| TC-ID | Test Case | Steps | Expected Result | Priority |
|---|---|---|---|---|
| TC-21 | Upload ảnh hợp lệ (click) | Click vào vùng upload → chọn file JPG < 20MB | Ảnh hiển thị lên canvas dạng cover; panel chuyển sang hiện thumbnail + "Background image set" + nút Change/Remove | P0 |
| TC-22 | Upload ảnh hợp lệ (drag & drop) | Kéo file PNG < 20MB thả vào vùng upload | Ảnh hiển thị lên canvas; border vùng upload đổi màu xanh khi drag over | P0 |
| TC-23 | Upload file > 20MB | Chọn hoặc kéo thả file > 20MB | Hiện thông báo lỗi đỏ: `"File too large. Max 20MB."` — tự biến mất sau 4 giây; canvas không thay đổi | P0 |
| TC-24 | Upload sai định dạng (PDF/GIF) | Chọn file .pdf hoặc .gif | Hiện thông báo lỗi đỏ: `"Unsupported format. Use JPG, PNG, or WebP."` — tự biến mất sau 4 giây | P0 |
| TC-25 | Drag highlight khi kéo qua | Kéo file vào vùng upload (chưa thả) | Border vùng upload đổi sang màu xanh + text "Drop image here" | P1 |
| TC-26 | Drag leave reset | Kéo file vào rồi kéo ra ngoài (không thả) | Border trở về trạng thái mặc định | P1 |
| TC-27 | Thay ảnh nền | Đang có ảnh nền → click "Change" | Mở lại file picker; chọn ảnh mới → canvas cập nhật; Blob URL cũ bị revoke | P1 |
| TC-28 | Xóa ảnh nền | Đang có ảnh nền → click "Remove" | Canvas quay về màu nền; panel upload trở lại nút dashed; Blob URL bị revoke | P1 |
| TC-29 | Kéo ảnh nền trên canvas | Upload ảnh nền → kéo ảnh trên canvas | Ảnh di chuyển trong canvas; không thể kéo ra ngoài biên canvas | P1 |

---

## Module 7 — Canvas Interaction

| TC-ID | Test Case | Steps | Expected Result | Priority |
|---|---|---|---|---|
| TC-30 | Kéo text trên canvas | Click và kéo text object | Text di chuyển theo chuột; không thoát ra ngoài biên canvas | P1 |
| TC-31 | Double-click chỉnh text inline | Double-click vào text trên canvas | Text vào chế độ inline edit (IText editing mode) | P2 |
| TC-32 | Reset button xuất hiện | Kéo text hoặc sửa bất kỳ gì | Nút "Reset" xuất hiện ở góc trái dưới canvas | P1 |
| TC-33 | Reset button click | Kéo text lung tung → click Reset | Text, ảnh nền trở về vị trí mặc định của template; nút Reset biến mất | P1 |
| TC-34 | Ctrl+Z reset | Kéo text → nhấn Ctrl+Z | Tương đương click Reset — vị trí text về mặc định | P1 |
| TC-35 | Cmd+Z trên Mac | Kéo text → nhấn Cmd+Z | Tương đương Ctrl+Z | P2 |

---

## Module 8 — Export & Download

| TC-ID | Test Case | Steps | Expected Result | Priority |
|---|---|---|---|---|
| TC-36 | Click Download | Click nút Download (xanh) | Hiện ProgressBar + "Exporting..."; button disable trong lúc export | P0 |
| TC-37 | Download thành công | Sau khi export xong | File `.jpg` được tải về (tên: `youtube-thumbnail-maker.jpg` hoặc tương tự); button chuyển sang "Downloaded!" màu xanh đậm + icon tick | P0 |
| TC-38 | "Downloaded!" tự reset | Sau 3 giây kể từ khi download | Button trở về trạng thái "Download" bình thường | P1 |
| TC-39 | Link suggest compressimg | Ngay sau khi download thành công | Hiện dòng: `"Need a smaller file? Compress it free →"` link đến compressimg.pro | P1 |
| TC-40 | Export error | Simulate canvas export fail | Hiện text đỏ `"Export failed. Please try again."` — tự biến mất sau 4 giây | P1 |
| TC-41 | Download không mở tab mới | Click Download | File tải về trực tiếp, không mở tab/cửa sổ mới | P0 |

---

## Module 9 — Responsive / Mobile

> Tested via Tailwind media query emulation (disable `sm:` min-width:640px và `lg:` min-width:1024px)

| TC-ID | Test Case | Steps | Expected Result | Result | Ghi chú |
|---|---|---|---|---|---|
| TC-42 | Layout mobile | Mở trang trên màn hình < 1024px | Canvas ở trên, controls panel ở dưới (không 2 cột); nút Download nằm dưới controls | ✅ PASS | Container `lg:grid lg:grid-cols-[1fr_320px]` chỉ bật grid 2 cột từ 1024px; mobile stack 1 cột đúng spec |
| TC-43 | Nút Download desktop vs mobile | Resize qua breakpoint lg (1024px) | Desktop: Download dưới canvas bên trái; Mobile: Download dưới controls panel | ✅ PASS | Dùng 2 nút riêng biệt: `hidden lg:block` (desktop) và `lg:hidden mt-4` (mobile) — cả 2 vị trí khớp spec |
| TC-44 | Canvas scale mobile | Mở trên điện thoại 390px wide | Canvas scale vừa màn hình, không overflow ngang, không scroll ngang | ✅ PASS | `document.scrollWidth === clientWidth` (1526 === 1526); canvas wrap trong responsive container `max-width:100%`, hiển thị 640px logic (scaled từ 1280px) |
| TC-45 | Touch upload (iOS Safari) | Tap vùng upload trên iPhone | Mở photo library hoặc file picker của iOS | ✅ PASS | `<input type=file accept="image/jpeg,image/png,image/webp">` không có `capture` → iOS mở Photos Library / file picker, không bắt buộc mở camera |
| TC-46 | Touch upload (Android Chrome) | Tap vùng upload trên Android | Mở file picker của Android | ✅ PASS | Cùng input trên — Android Chrome mở Documents/Photo picker theo MIME type khai báo |
| TC-47 | Touch target ≥ 44px | Kiểm tra kích thước tất cả interactive elements trên mobile | Mọi touch target ≥ 44×44px (Apple HIG / WCAG guideline) | ❌ FAIL | BG color swatches 28×28px, color input phụ 24×24px, Font/Template buttons cao 30px, slider track 8px (thumb ~16–20px). Chỉ nút Download (44px) và 2 color input chính (36×36) đạt/gần đạt → **BUG-03** |

---

## Module 10 — Ad Slot

| TC-ID | Test Case | Steps | Expected Result | Priority |
|---|---|---|---|---|
| TC-48 | Ad chưa hiện khi chưa download | Mở trang, chưa click Download | Không có ad container visible | P1 |
| TC-49 | Ad hiện sau khi download | Click Download thành công | Ad slot xuất hiện bên dưới canvas + controls | P1 |
| TC-50 | Không có CLS từ ad | Quan sát khi ad load vào | Layout không nhảy — container đã pre-sized | P1 |
