# Product Requirements Document (PRD): Website E-Commerce

## 1. Informasi Umum Proyek
* **Nama Proyek:** Website E-Commerce (Contoh: *NamaToko Anda*)[cite: 1]
* **Jenis Proyek:** Tugas Ujian Tengah Semester (UTS) Ganjil 2026/2027 — Pemrograman Web / Internet[cite: 1]
* **Target Waktu Pengerjaan:** 1 Minggu[cite: 1]
* **Tech Stack:** HTML5, CSS3 (Vanilla/Custom), dan JavaScript (ES6+)[cite: 1]
* **Target Deployment:** Hosting Gratis (GitHub Pages, Netlify, atau Vercel) dengan format domain/subdomain kombinasi tema dan nama (contoh: `ecommerce-namaanda.netlify.app` atau `toko_namaanda`)[cite: 1].

---

## 2. Tujuan & Sasaran (Objectives)
1. Membangun aplikasi web e-commerce interaktif dari nol (*from scratch*) tanpa menggunakan template jadi dari internet[cite: 1].
2. Memenuhi seluruh kriteria teknis, struktur halaman, dan konvensi penamaan kode sesuai aturan proyek UTS[cite: 1].
3. Memberikan pengalaman pengguna (UX) yang responsif di perangkat desktop maupun mobile[cite: 1].

---

## 3. Aturan Teknis & Konvensi Kode (Wajib)
* **Anti-Template:** Seluruh struktur HTML, styling CSS, dan logika JavaScript harus ditulis sendiri[cite: 1].
* **Aset Konten:** Teks, gambar, dan video produk dapat menggunakan aset buatan sendiri atau diunduh secara bebas dari internet[cite: 1].
* **Konvensi Penamaan CSS (`CLASS` dan `ID`):** Seluruh selector `class` dan `id` wajib menggunakan awalan nama mahasiswa diikuti garis bawah (`_`)[cite: 1].
  * *Contoh ID:* `#nama_header`, `#nama_produk_unggulan`, `#nama_footer`[cite: 1]
  * *Contoh Class:* `.nama_menu`, `.nama_kartu_produk`, `.nama_tombol_beli`[cite: 1]
* **Navigasi:** Semua tautan antarhalaman harus berfungsi dengan baik tanpa *broken link*[cite: 1].

---

## 4. Arsitektur Halaman (Minimal 7 Halaman)
Website dirancang menggunakan pendekatan *multi-page* (minimal 7 file `.html` terpisah) atau *single-page* yang memuat 7 bagian berbeda[cite: 1]. Berikut spesifikasi 7 halaman utamanya:

| No | Nama Halaman | Nama File | Deskripsi & Fitur Utama |
| :--- | :--- | :--- | :--- |
| 1 | **Halaman Utama (Home)**[cite: 1] | `index.html`[cite: 1] | *Hero banner* promo, kategori populer, produk unggulan (*featured products*), dan navigasi utama ke seluruh halaman[cite: 1]. |
| 2 | **Katalog Produk (Shop)** | `produk.html` | Daftar lengkap produk dengan fitur filter kategori, pencarian (*search bar* via JS), dan tombol "Tambah ke Keranjang". |
| 3 | **Detail Produk** | `detail-produk.html` | Informasi mendalam satu produk (galeri gambar/video, deskripsi, spesifikasi, pilihan varian/ukuran, dan ulasan)[cite: 1]. |
| 4 | **Keranjang & Checkout** | `keranjang.html` | Daftar barang yang dipilih, kalkulasi total harga otomatis (JavaScript), dan form ringkasan pemesanan. |
| 5 | **Promo & Penawaran** | `promo.html` | Halaman khusus diskon musiman, *flash sale* dengan hitung mundur (*countdown timer* JS), dan kode voucher. |
| 6 | **Tentang Kami (About)** | `tentang.html` | Profil toko/brand, visi misi, keunggulan layanan, serta galeri atau video profil singkat[cite: 1]. |
| 7 | **Halaman Kontak (Contact)**[cite: 1] | `kontak.html` | Formulir input pesan kepada pemilik website (Nama, Email, Subjek, Pesan) dengan validasi JavaScript, serta informasi alamat dan peta lokasi[cite: 1]. |

---

## 5. Spesifikasi Fungsional (JavaScript Interactivity)
Untuk memaksimalkan poin **Kompleksitas Isian Konten (20 Poin)** dan interaktivitas[cite: 1]:
1. **Manajemen Keranjang Belanja (`localStorage`):** Menyimpan item yang ditambahkan pengguna agar tidak hilang saat berpindah halaman.
2. **Filter & Pencarian Produk Real-Time:** Menyaring tampilan kartu produk berdasarkan kategori atau kata kunci tanpa memuat ulang halaman.
3. **Validasi Form Kontak & Checkout:** Memastikan semua kolom wajib terisi dengan format yang benar sebelum menampilkan notifikasi pesan terkirim[cite: 1].
4. **Menu Navigasi Responsif (Hamburger Menu):** Toggle menu khusus untuk tampilan layar smartphone/tablet[cite: 1].

---

## 6. Desain, Layout, & Tipografi
Mengacu pada rubrik penilaian **Desain Tampilan Layout (20 Poin)** dan **Pewarnaan, Tipografi (20 Poin)**[cite: 1]:
* **Layout:** Menggunakan CSS Flexbox dan CSS Grid untuk tata letak yang rapi, proporsional, dan mendukung *responsive mobile* (*media queries*)[cite: 1].
* **Skema Warna:** Maksimal 3–4 warna utama yang harmonis (misalnya: warna primer untuk *brand/header*, warna sekunder untuk aksen tombol *Call-to-Action*, serta latar belakang netral agar produk menonjol).
* **Tipografi:** Menggunakan kombinasi font modern yang mudah dibaca (misalnya dari Google Fonts: *Poppins* untuk judul dan *Inter* atau *Roboto* untuk teks isi).

---

## 7. Kriteria Pengumpulan (Deliverables)
Sebelum dikumpulkan ke Google Classroom, pastikan seluruh berkas berikut siap[cite: 1]:
1. **Website Live:** Proyek telah diunggah ke hosting gratis dan link dapat diakses publik[cite: 1].
2. **File Source Code:** Seluruh file proyek (`index.html`, halaman pendukung, folder CSS, JS, dan aset gambar/video)[cite: 1].
3. **Laporan Manual Book (PDF):**[cite: 1]
   * Halaman Cover (Identitas mahasiswa, mata kuliah, dosen pengampu)[cite: 1].
   * Link website yang sudah di-hosting[cite: 1].
   * Penjelasan dan tangkapan layar (*screenshot*) setiap halaman[cite: 1].
   * Cuplikan kode (*sample script*) HTML, CSS (menunjukkan penggunaan class/id berbasis nama), dan JavaScript[cite: 1].
4. **Arsip Akhir:** Kompres folder *source code* dan file PDF laporan ke dalam satu file `.rar` atau `.zip` dengan format penamaan: `UTS NIM NAMA KELAS.rar`[cite: 1].