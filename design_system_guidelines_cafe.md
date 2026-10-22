# 🎨 Design System & Visual Guidelines

Dokumen ini berisi panduan desain visual untuk memastikan konsistensi antarmuka (UI) dan pengalaman pengguna (UX) pada website **Kopi Senja**.

---

## 1. Color Palette (Skema Warna)

Tema warna mengangkat nuansa **Espresso Warmth & Luxury Dark** yang menggambarkan suasana kopi hangat di waktu senja.

### Primary Colors (Amber & Coffee Tones)
* **Amber Accent (Highlight):**  
  * Light Accent: `#fcd34d` (`amber-300`)
  * Primary Accent: `#f59e0b` (`amber-500`)
  * Dark Accent: `#d97706` (`amber-600`)
* **Warm Dark Backgrounds (Stone & Espresso):**  
  * Deep Background: `#0c0a09` (`stone-950`)
  * Card Background: `#1c1917` (`stone-900`)
  * Border Tone: `#292524` (`stone-800`)
* **Light Neutral (Surface & Contrast):**  
  * Light Background (Section Light): `#f5f5f4` (`stone-100`)
  * Primary Text Dark: `#1c1917` (`stone-900`)
  * Secondary Text Dark: `#57534e` (`stone-600`)

---

## 2. Typography (Tipografi)

Gunakan kombinasi Google Fonts berikut pada proyek Next.js (`app/layout.tsx`):

* **Heading Font (Serif - Elegant & Classic):** `Playfair Display`
  * Digunakan untuk: Judul Seksi (H1, H2), Quote, dan Brand Name.
  * Weight: `Bold (700)`, `ExtraBold (800)`.
* **Body Font (Sans-Serif - Modern & Clean):** `Plus Jakarta Sans`
  * Digunakan untuk: Navigasi, Paragraf, Label Form, Deskripsi Menu, dan Tombol.
  * Weight: `Regular (400)`, `Medium (500)`, `SemiBold (600)`, `Bold (700)`.

---

## 3. UI Components & Layout Guidelines

### 3.1 Buttons (Tombol CTA)
* **Primary Button:**  
  * Style: `bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold rounded-full`
  * Effect: Shadow bersinar `shadow-lg shadow-amber-600/20` dan animasi skala halus saat hover (`hover:scale-105`).
* **Secondary Button:**  
  * Style: `border border-stone-700 bg-stone-900/60 hover:bg-stone-800 text-stone-200 font-semibold rounded-full backdrop-blur-md`

### 3.2 Cards (Katalog & Fasilitas)
* **Dark Card Style:** `bg-stone-900/80 rounded-2xl border border-stone-800 hover:border-amber-700/50 transition-all shadow-lg`
* **Glassmorphism Effect (Hero / Header):** `backdrop-blur-md bg-stone-950/80 border-b border-amber-900/40`

### 3.3 Form Inputs (Reservasi)
* Style: `px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-amber-600 focus:border-amber-600 text-sm outline-none transition-all`

---

## 4. Spacing & Grid System

* **Container Max Width:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
* **Section Padding:**  
  * Desktop: `py-24`
  * Mobile: `py-16`
* **Grid Spacing:**  
  * Menu Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`
  * Features Grid: `grid grid-cols-2 md:grid-cols-4 gap-6`

---

## 5. Next.js Project Structure Guidelines

Untuk menjaga konsistensi arsitektur Next.js (App Router):

```text
src/
├── app/
│   ├── layout.tsx         # Root Layout (Font, Provider, Metadata)
│   ├── page.tsx           # Landing Page Main View
│   ├── globals.css        # Tailwind directives & Custom CSS
│   └── actions/
│       └── reservation.ts # Server Actions untuk simpan ke PostgreSQL
├── components/
│   ├── ui/                # Button, Input, Modal
│   ├── Header.tsx         # Navbar client component
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── MenuCatalog.tsx    # Interactive menu client component
│   ├── Facilities.tsx     # Ambience & facilities
│   ├── Reservation.tsx    # Reservation form section
│   └── Footer.tsx         # Footer
├── lib/
│   ├── db.ts              # PostgreSQL / Prisma client instance
│   └── validations.ts     # Zod schema validation
```