# Favicon & Logo Guide

## Tempat Meletakkan Favicon

Letakkan semua file favicon di folder **`public/`** (root public directory):

```
picurhat/
└── public/
    ├── favicon.ico        ← Icon utama (16x16, 32x32, 48x48)
    ├── icon.png           ← 32x32px PNG
    ├── icon-192.png       ← 192x192px PNG (untuk PWA)
    └── apple-icon.png     ← 180x180px PNG (untuk iOS)
```

## Ukuran File yang Dibutuhkan

### 1. favicon.ico (Required)
- **Ukuran**: Multi-size ICO file (16x16, 32x32, 48x48)
- **Format**: .ico
- **Kegunaan**: Icon di browser tab (semua browser)
- **Tool**: Gunakan [favicon.io](https://favicon.io/) atau [realfavicongenerator.net](https://realfavicongenerator.net/)

### 2. icon.png (Optional)
- **Ukuran**: 32x32px
- **Format**: PNG dengan background transparan
- **Kegunaan**: Modern browsers

### 3. icon-192.png (Optional)
- **Ukuran**: 192x192px
- **Format**: PNG
- **Kegunaan**: PWA app icon, Android home screen

### 4. apple-icon.png (Optional)
- **Ukuran**: 180x180px
- **Format**: PNG
- **Kegunaan**: iOS Safari "Add to Home Screen"

## Cara Mudah Membuat Favicon

### Opsi 1: Dari Logo/Gambar
1. Buka [favicon.io](https://favicon.io/favicon-converter/)
2. Upload logo PI Curhat (PNG/JPG, minimal 260x260px)
3. Download hasil generate
4. Extract dan letakkan file di `public/`

### Opsi 2: Dari Text
1. Buka [favicon.io/favicon-generator](https://favicon.io/favicon-generator/)
2. Ketik "PI" atau "PC"
3. Pilih font dan warna brand (Teal: #2D7A7A, Coral: #E85D4D)
4. Download dan extract ke `public/`

### Opsi 3: Manual dengan Design Tool
1. Buat design di Figma/Canva/Photoshop
2. Export dalam ukuran:
   - 512x512px (master)
   - 180x180px (Apple)
   - 192x192px (PWA)
   - 32x32px (standard)
3. Konversi ke .ico dengan [icoconverter.com](https://icoconverter.com/)

## Rekomendasi Design untuk PI Curhat

**Elemen yang cocok:**
- ❤️ Heart icon (karena tema counseling & care)
- 💬 Chat bubble (karena "curhat")
- Inisial "PI" atau "PC" dengan font Geist Sans
- Warna: Teal (#2D7A7A) atau Coral (#E85D4D)

**Tips:**
- Gunakan background transparan untuk PNG
- Pastikan icon tetap jelas di ukuran kecil (16x16px)
- Hindari detail terlalu banyak
- Test di berbagai background (light/dark mode)

## Quick Start (Minimal Setup)

Jika cuma mau cepat, minimal butuh **`favicon.ico`** saja:

1. Generate favicon di [favicon.io](https://favicon.io/favicon-generator/)
2. Download `favicon.ico`
3. Taruh di `public/favicon.ico`
4. Done! ✅

Next.js akan otomatis mendeteksinya.

## Verifikasi

Setelah menambahkan favicon:

1. **Restart dev server**:
   ```bash
   npm run dev
   ```

2. **Buka browser** → http://localhost:3000

3. **Cek browser tab** - icon akan muncul di tab title

4. **Clear browser cache** jika icon tidak update:
   - Chrome: Ctrl + Shift + Delete
   - Atau hard refresh: Ctrl + Shift + R

## Metadata Sudah Dikonfigurasi

File [`app/layout.tsx`](../app/layout.tsx) sudah di-update dengan metadata icons:
- ✅ favicon.ico
- ✅ icon.png (32x32)
- ✅ icon-192.png (PWA)
- ✅ apple-icon.png (iOS)

Tinggal tambahkan file fisiknya di `public/`!
