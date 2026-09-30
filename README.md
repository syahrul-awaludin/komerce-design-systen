# 🟠 Komerce Design System

[![npm version](https://badge.fury.io/js/komerce-design-system.svg)](https://badge.fury.io/js/komerce-design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Komerce Design System** adalah kumpulan komponen UI (React), *design tokens*, dan pedoman desain yang digunakan untuk membangun produk-produk Komerce secara cepat, konsisten, dan mudah diskalakan. Sistem ini dibangun dengan arsitektur **Atomic Design**.

## ✨ Fitur Utama

- **🎨 100% Tersinkronisasi dengan Figma:** Seluruh komponen menggunakan *Design Tokens* asli (Warna, Tipografi, Shadows) yang ditarik langsung dari desain resmi.
- **🧱 Berbasis Atomic Design:** Terdiri dari kumpulan Atoms, Molecules, dan Organisms yang saling melengkapi.
- **⚡ Ringan & Cepat:** Dibangun dengan Vite + CSS Modules (tanpa runtime overhead CSS-in-JS).
- **📘 Dukungan TypeScript:** Dilengkapi dengan *type definitions* bawaan untuk pengalaman *developer* yang maksimal.
- **♿ Aksesibilitas (a11y):** Dirancang dengan standar aksesibilitas web modern.

---

## 📦 Instalasi

Install paket melalui NPM atau Yarn:

```bash
# Menggunakan npm
npm install komerce-design-system

# Menggunakan yarn
yarn add komerce-design-system

# Menggunakan pnpm
pnpm add komerce-design-system
```

> **Perhatian:** Komerce Design System membutuhkan `react` dan `react-dom` versi `^18.0.0` atau `^19.0.0` sebagai *peer dependencies*.

---

## 🚀 Cara Penggunaan

Untuk mulai menggunakan komponen, Anda **wajib** mengimpor file CSS global satu kali di dalam *entry point* aplikasi Anda (misalnya di `src/main.tsx` atau `src/App.tsx`).

### 1. Import CSS Global

```tsx
// Di dalam file main.tsx atau App.tsx
import 'komerce-design-system/styles';
```

### 2. Gunakan Komponen

Impor komponen yang Anda butuhkan secara langsung.

```tsx
import { Button, Input, Card, Badge } from 'komerce-design-system';

function App() {
  return (
    <Card>
      <h2>Selamat Datang di Komerce</h2>
      <Badge variant="success">Online</Badge>
      
      <div style={{ marginTop: '16px' }}>
        <Input label="Email Anda" placeholder="nama@email.com" />
      </div>
      
      <div style={{ marginTop: '16px' }}>
        <Button variant="primary" size="regular" onClick={() => alert('Login ditekan!')}>
          Masuk Sekarang
        </Button>
      </div>
    </Card>
  );
}

export default App;
```

---

## 📚 Dokumentasi

Komerce Design System menggunakan **Supernova** dan **Storybook** sebagai pusat dokumentasi.

- **📖 Panduan Desain (Supernova):** [Link ke Supernova Workspace] - (Berisi aturan desain, panduan penggunaan *tokens*, dan pola UI)
- **⚙️ Katalog Komponen (Storybook):** [Link ke Storybook Deployment] - (Berisi katalog interaktif untuk mengetes *props* secara langsung)

---

## 🛠 Struktur Komponen (Atomic)

Sistem ini membagi komponen menjadi tiga tingkatan:

- **Atoms:** `Button`, `Input`, `Badge`, `Avatar`, `Checkbox`, `Radio`, `Switch`, `Spinner`, `Progress`, `Toggle`, `FAB`.
- **Molecules:** `Accordion`, `Breadcrumb`, `Card`, `Pagination`, `Select`, `Tabs`, `Toast`, `AlertDialog`.
- **Organisms:** `Table`, `DatePicker`, `Navigation`, `Tooltip`.

---

## 🧑‍💻 Untuk Kontributor (Development)

Jika Anda tergabung dalam tim *Core UI* dan ingin ikut mengembangkan komponen ini secara lokal:

1. Clone repositori ini.
2. Install dependencies: `npm install`
3. Jalankan server Storybook: `npm run storybook`
4. Untuk mem-build *library*: `npm run build:lib`

Sistem ini dipelihara oleh Tim DesignOps & Engineering Komerce.
