# Panduan Integrasi Supernova.io

Panduan ini menjelaskan cara menghubungkan Komerce Design System dengan Supernova.io untuk unified design system documentation.

## 1. Membuat Akun & Workspace Supernova

1. Kunjungi [supernova.io](https://supernova.io) dan daftar akun
2. Buat workspace baru: **Komerce Design System**
3. Buat design system baru di dalam workspace

## 2. Menghubungkan Figma

1. Di Supernova dashboard, buka **Data Sources** → **Connect Figma**
2. Authorize akses Figma
3. Pilih file: **Design System Komerce - v1.0 (2026-09)**
4. Supernova akan otomatis import semua Figma Variables sebagai design tokens

## 3. Menghubungkan Storybook

### Opsi A: Via URL (Storybook yang sudah di-deploy)

1. Deploy Storybook ke hosting (Chromatic, Vercel, Netlify):
   ```bash
   npm run build-storybook
   # Deploy folder storybook-static/ ke hosting pilihan
   ```

2. Di Supernova, buka **Data Sources** → **Connect Storybook**
3. Masukkan URL Storybook yang sudah di-deploy
4. Pastikan CORS dikonfigurasi untuk mengizinkan `https://app.supernova.io`

### Opsi B: Via Supernova CLI (Private/Enterprise)

1. Install Supernova CLI:
   ```bash
   npm install -g @supernovaio/cli
   ```

2. Login:
   ```bash
   supernova login
   ```

3. Build Storybook:
   ```bash
   npm run build-storybook
   ```

4. Upload ke Supernova:
   ```bash
   supernova storybook-import --from ./storybook-static
   ```

## 4. Konfigurasi Token Sync

Supernova dapat meng-export design tokens ke kode secara otomatis:

1. Buka **Token Manager** di Supernova
2. Verifikasi bahwa semua token dari Figma sudah ter-import:
   - Colors (Primary, Neutral, Warning, Error, Success, Info)
   - Typography (Plus Jakarta Sans)
   - Shadows, Radius, Spacing
3. Setup **Exporter Pipeline**:
   - Format: CSS Custom Properties
   - Output: `src/styles/tokens.css`
   - Trigger: On token change

## 5. Embedding Komponen di Supernova Docs

Setelah Storybook terhubung:

1. Buka page editor di Supernova Documentation
2. Ketik `/storybook` untuk insert Storybook block
3. Pilih komponen dan story (misalnya `Atoms/Button/Default`)
4. Aktifkan opsi:
   - ✅ **Interactive Playground** — visitor bisa tweak props
   - ✅ **Code Preview** — tampilkan snippet JSX
   - ✅ **Canvas View** — tampilkan preview visual

## 6. CI/CD Automation

File `.github/workflows/storybook-deploy.yml` sudah disiapkan.

### Setup:

1. Buka repository settings → Secrets → Actions
2. Tambahkan secret: `SUPERNOVA_TOKEN`
   - Dapatkan dari Supernova dashboard → Settings → API Tokens
3. Setiap push ke `main` akan otomatis:
   - Build Storybook
   - Upload ke Supernova

## 7. Workflow Lengkap

```
┌─────────────────────┐
│   Figma Variables    │
│   (Design Tokens)    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Supernova Hub     │
│   (Token Manager)    │
└──────┬──────┬───────┘
       │      │
       ▼      ▼
┌──────────┐  ┌──────────────────────┐
│ Exporter │  │ Documentation Site    │
│ Pipeline │  │ (Live Storybook       │
│          │  │  Component Embeds)    │
└────┬─────┘  └──────────▲───────────┘
     │                    │
     ▼                    │
┌─────────────────────────────────────┐
│   React Component Library           │
│   (Storybook 8 + CSS Modules)       │
│   npm run build-storybook           │
└─────────────────────────────────────┘
```

## Referensi

- [Supernova Documentation](https://learn.supernova.io)
- [Supernova CLI Reference](https://learn.supernova.io/developer-platform/cli)
- [Storybook Integration Guide](https://learn.supernova.io/documentation/storybook)
