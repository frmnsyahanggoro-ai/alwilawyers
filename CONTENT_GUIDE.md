# Panduan Pengelolaan Konten – Alwi Lawyers

Dokumen ini menjelaskan **di mana** konten utama website disimpan, **bagaimana cara mengubahnya dengan aman**, dan **bagaimana cara memulihkan (rollback)** jika terjadi kesalahan. Tujuannya adalah memastikan konten tidak mudah hilang dan selalu bisa dipulihkan.

---

## 1. Struktur Konten Utama

Struktur proyek:

```text
alwi-lawyers-rebuild/
  index.html
  tentang-kami.html
  tim-hukum.html
  layanan-hukum.html
  galeri.html
  hubungi-kami.html
  assets/
    styles.css
    app.js
  content/
    services.json
    team.json
    site-settings.json
  CONTENT_GUIDE.md
```

- **File HTML**  
  Menentukan struktur halaman dan teks yang tampil di website.

- **Folder `content/`**  
  Menyimpan data penting dalam format terstruktur sebagai:
  - backup konten, dan
  - sumber referensi yang rapi saat melakukan update.

Saat ini website **masih murni statis** (HTML + CSS + JS tanpa database). Artinya, perubahan konten tetap dilakukan pada file HTML, namun nilai yang sama juga dicatat di folder `content/` agar:
- bila layout HTML berubah di masa depan, konten tetap tersimpan dengan rapi,
- bila terjadi kesalahan edit HTML, konten dapat dikembalikan dengan menyalin dari file JSON ini.

---

## 2. Konten Layanan – `layanan-hukum.html` & `content/services.json`

- **Tampilan di website**:  
  Ada di `layanan-hukum.html` pada section daftar layanan / practice areas.

- **Data terstruktur**:  
  Ada di `content/services.json` dengan struktur:

```json
{
  "practiceAreas": [
    {
      "id": "general-representation",
      "title": "Pendampingan Hukum",
      "slug": "pendampingan-hukum",
      "description": "…",
      "highlights": ["…", "…"]
    }
  ]
}
```

### Cara mengubah atau menambah layanan

1. **Ubah teks di halaman**  
   - Buka `layanan-hukum.html`.  
   - Cari kartu layanan yang ingin diubah (judul, paragraf, bullet point).  
   - Edit teks sesuai kebutuhan.

2. **Update backup data**  
   - Buka `content/services.json`.  
   - Cari objek dengan `id`/`title` yang sesuai.  
   - Samakan `title`, `description`, dan `highlights` dengan versi terbaru di HTML.

3. **Jika menambah layanan baru**  
   - Tambahkan kartu baru di `layanan-hukum.html` dengan format yang sama seperti layanan lain.  
   - Tambahkan objek baru di array `practiceAreas` di `content/services.json`.

> **Catatan penting**:  
> Jangan menghapus `id` dan `slug` yang sudah ada. Jika perlu mengganti nama layanan, lebih aman hanya mengubah `title` dan teks, sementara `id` dapat dipertahankan sebagai penanda teknis.

---

## 3. Konten Tim – `tim-hukum.html` & `content/team.json`

- **Tampilan di website**:  
  Profil Founder dan (di masa depan) anggota tim lain ditampilkan di `tim-hukum.html`.

- **Data terstruktur**:  
  Tersimpan di `content/team.json`:

```json
{
  "founder": {
    "name": "Dwi Almon, S.H.",
    "title": "Founder & Managing Partner",
    "photo": "assets/founder-alwi.png",
    "summary": "…",
    "education": ["…"],
    "focusAreas": ["…"],
    "credentials": ["…"]
  },
  "coreValues": ["…"],
  "notes": "…"
}
```

### Cara memperbarui profil Founder

1. Buka `tim-hukum.html` dan ubah:
   - nama,
   - jabatan/titel,
   - ringkasan profil,
   - bullet point keahlian/kredensial (jika ada).

2. Buka `content/team.json` dan samakan:
   - `name`, `title`, `summary`,
   - isi array `education`, `focusAreas`, `credentials`.

### Menambah anggota tim di masa depan

Di fase berikutnya, struktur `team.json` dapat diperluas, misalnya:

```json
{
  "associates": [
    {
      "name": "Nama Lengkap",
      "title": "Associate",
      "focusAreas": ["…"]
    }
  ]
}
```

Untuk saat ini, file ini berfungsi sebagai:
- dokumentasi resmi profil,
- backup bila layout halaman dirombak.

---

## 4. Kontak & Informasi Kantor – Halaman & `content/site-settings.json`

- **Tampilan kontak** berada di beberapa halaman:
  - `index.html` (section kontak singkat & footer),
  - `hubungi-kami.html` (halaman utama kontak),
  - footer di halaman lain.

- **Data terstruktur**:  
  Tersimpan di `content/site-settings.json`:

```json
{
  "firmName": "Alwi Lawyers",
  "tagline": "Attorneys & Counsellors at Law",
  "contact": {
    "primaryWhatsapp": "+62 …",
    "secondaryWhatsapp": "+62 …",
    "phoneDisplay": "+62 …",
    "email": "…"
  },
  "office": {
    "label": "Kantor",
    "address": "…",
    "notes": "…"
  },
  "hours": {
    "label": "Jam Operasional",
    "description": "…"
  }
}
```

### Cara mengubah nomor WhatsApp, email, atau alamat

1. Cari dan ubah **semua kemunculan** nomor/email di:
   - `index.html`,
   - `hubungi-kami.html`,
   - bagian footer di halaman lain (jika ada).

2. Setelah itu, buka `content/site-settings.json` dan:
   - perbarui `primaryWhatsapp`, `secondaryWhatsapp`, dan `phoneDisplay` bila perlu,
   - perbarui `email`,
   - perbarui `office.address` dan `hours.description` jika jam/alamat berubah.

Dengan begitu:
- informasi di website selalu konsisten,
- bila suatu hari struktur HTML berubah, data kontak tetap terdokumentasi jelas.

---

## 5. Pola Kerja Aman & Backup

Website ini menggunakan **GitHub + GitHub Pages** sehingga:
- setiap perubahan tercatat sebagai *commit*,
- versi lama bisa dikembalikan kapan saja.

### Pola kerja yang disarankan

1. **Sebelum mengedit**  
   - Pastikan repository lokal sudah di-*pull* dari GitHub (jika menggunakan lebih dari satu komputer).

2. **Saat mengedit konten**  
   - Ubah teks di file HTML yang relevan.  
   - Segera perbarui file di folder `content/` agar data backup selalu mengikuti.

3. **Setelah selesai mengedit**  
   - Jalankan preview lokal (misalnya `python -m http.server 8000`), cek di browser.  
   - Jika sudah rapi, buat commit dengan pesan jelas, misalnya:  
     `update layanan keluarga dan kontak kantor`.  
   - Push ke GitHub agar ter-deploy ke GitHub Pages.

### Jika terjadi kesalahan atau konten hilang

1. Buka file `content/*.json` untuk melihat versi konten yang benar.  
2. Salin kembali teks yang benar ke file HTML terkait.  
3. Jika perlu, gunakan fitur *history* GitHub untuk mengembalikan file ke versi sebelumnya.

---

## 6. Pengembangan Berikutnya (Opsional)

Struktur `content/*.json` sudah disiapkan agar di masa depan website:
- dapat ditingkatkan menjadi semi-CMS sederhana (misalnya HTML digenerasikan otomatis dari JSON dengan script build), atau
- diintegrasikan ke sistem lain (WordPress/Headless CMS) dengan tetap memakai struktur data yang sama.

Untuk saat ini, fokus utamanya adalah:
- situs **stabil**, mudah dibackup,
- perubahan konten **aman** dan terdokumentasi,
- tidak ada ketergantungan pada database atau sistem yang sulit diakses.

