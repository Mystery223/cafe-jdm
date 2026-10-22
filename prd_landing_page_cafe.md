# ☕ Product Requirement Document (PRD)

**Project Name:** Kopi Senja - Resto & Coffee House Landing Page  
**Tech Stack:** Next.js (App Router), React, Tailwind CSS, PostgreSQL, Prisma / Drizzle ORM  
**Target Environment:** Local / Vercel + Managed PostgreSQL (Supabase / Neon / Local Postgres)

---

## 1. Executive Summary & Goals

### 1.1 Objective
Membangun *landing page* modern, responsif, dan performa tinggi untuk **Kopi Senja** yang berfungsi sebagai:
* Etalase digital (*brand showcase*) untuk menarik pengunjung fisik.
* Katalog menu interaktif (kopi, non-kopi, makanan, pastry).
* Sistem reservasi meja online langsung tersimpan ke basis data PostgreSQL.

### 1.2 Target Audience
* **Remote Workers & Students:** Membutuhkan informasi kenyamanan workspace (Wi-Fi, colokan listrik, suasana).
* **Coffee Enthusiasts:** Mencari kopi *specialty* dan metode seduh otentik.
* **Groups & Event Organizers:** Ingin mereservasi tempat untuk rapat kecil, ulang tahun, atau kumpul komunitas.

---

## 2. Technical Stack Architecture

* **Frontend:** Next.js 14/15 (App Router, React Server Components & Client Components).
* **Styling:** Tailwind CSS + Lucide Icons / FontAwesome.
* **Database:** PostgreSQL (Relational DB).
* **ORM:** Prisma ORM atau Drizzle ORM.
* **State & Form Management:** React Hooks / Server Actions + Zod (Validation).

---

## 3. Core Features & Requirements

### 3.1 Header & Navigation (Client Component)
* Navigation bar melayang (*sticky header*) yang berubah latar belakang saat digulir (*scroll-responsive*).
* Indikator jam operasional dinamis (`Buka Sekarang` / `Tutup`).
* Menu tautan pintas (*Smooth Scroll*): *Tentang Kami, Menu, Fasilitas, Reservasi, Ulasan*.

### 3.2 Hero Section (Server / Hybrid)
* Headline persuasif dengan aksen gradasi teks (*gradient text*).
* Call to Action (CTA) ganda: `Lihat Menu` & `Pesan Meja`.
* Key Stats Grid (Kapasitas, Kecepatan Wi-Fi, Rating, Jenis Biji Kopi).

### 3.3 About Us Section
* Cerita singkat filosofi kopi dan hubungan dengan petani lokal.
* Highlight keunggulan (Direct Trade Beans, Remote Friendly).

### 3.4 Interactive Menu Catalog (Client Component)
* Filter kategori dinamis (`Semua`, `Kopi Espresso`, `Non-Kopi`, `Makanan`, `Pastry`).
* Badge status produk (`Best Seller`, `New`).
* Tombol CTA pada menu: `+ Pesan via Reservasi` (Otomatis mengisi form reservasi).

### 3.5 Facilities & Ambience Gallery
* Card fitur fasilitas (Wi-Fi 150Mbps, AC/Smoking area, Stopkontak, Musholla).
* Grid foto galeri interior dan eksterior café.

### 3.6 Online Reservation Form (Next.js Server Action)
* Input field: Nama Lengkap, No. WhatsApp, Tanggal, Jam, Jumlah Tamu, Catatan Pesanan.
* Validasi input di server menggunakan Zod.
* Penyimpanan otomatis ke tabel `reservations` PostgreSQL.
* UI Notifikasi Berhasil/Gagal (*Feedback Toast/Alert*).

### 3.7 Customer Testimonials & Footer
* Card ulasan bintang 5 dari pelanggan.
* Footer lengkap dengan peta lokasi (Google Maps link), jam buka, serta tautan sosial media.

---

## 4. PostgreSQL Database Schema

```sql
-- Database Schema for PostgreSQL

CREATE TYPE reservation_status AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED');

-- 1. Table: categories
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    slug VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Table: menu_items
CREATE TABLE menu_items (
    id SERIAL PRIMARY KEY,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(12, 2) NOT NULL,
    image_url TEXT,
    is_available BOOLEAN DEFAULT TRUE,
    is_bestseller BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Table: reservations
CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_time TIME NOT NULL,
    guest_count INT NOT NULL,
    status reservation_status DEFAULT 'PENDING',
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Table: testimonials
CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    rating SMALLINT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## 5. Development Roadmap & Milestones

1. **Phase 1: Environment Setup**
   * Inisialisasi Next.js (`npx create-next-app@latest`).
   * Setup PostgreSQL connection & Prisma Schema migration.
2. **Phase 2: Database Seeding**
   * Masukkan dummy data kategori, menu, dan ulasan.
3. **Phase 3: Component Slicing & UI Building**
   * Implementasi komponen UI sesuai `design.md`.
4. **Phase 4: Server Action & Form Handling**
   * Buat Server Action untuk submit reservasi ke PostgreSQL.
5. **Phase 5: Testing & Deployment**
   * Pengujian responsivitas dan pengujian integrasi database.