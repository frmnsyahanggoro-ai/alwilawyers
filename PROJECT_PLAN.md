# Alwi Lawyers Rebuild Plan

## Tujuan

Membangun ulang website `Alwi Lawyers` dengan tampilan yang lebih modern, konten yang diperbarui, struktur yang lebih rapi, dan format yang mudah dipindahkan ke hosting baru tanpa bergantung pada akses cPanel lama.

## Daftar Halaman dan Konten

### 1. Beranda

Fungsi:
- memperkenalkan firma hukum secara cepat
- menampilkan positioning dan keunggulan utama
- mengarahkan pengunjung ke konsultasi

Konten utama:
- hero section dengan headline baru
- ringkasan profil kantor hukum
- keunggulan utama
- ringkasan layanan unggulan
- CTA konsultasi via WhatsApp dan email

### 2. Tentang Kami

Fungsi:
- menjelaskan identitas firma
- memperkuat kepercayaan calon klien

Konten utama:
- profil Alwi Lawyers
- visi dan misi
- nilai inti: integritas, respons cepat, komunikasi terbuka
- timeline singkat sejak 2019
- pendekatan kerja litigasi dan non-litigasi

### 3. Tim Hukum

Fungsi:
- menampilkan orang di balik firma
- membangun kredibilitas

Konten utama:
- profil founder
- area keahlian
- pendekatan pendampingan klien
- placeholder untuk penambahan anggota tim lain

### 4. Layanan Hukum

Fungsi:
- menjelaskan ruang lingkup layanan
- memudahkan calon klien mengenali kebutuhan hukumnya

Konten utama:
- legal representative
- konsultasi hukum
- penyusunan dan review kontrak
- hukum bisnis
- hukum keluarga dan perkawinan
- hukum pidana
- hukum perdata
- perlindungan anak
- ketenagakerjaan
- agraria dan pertanahan

### 5. Galeri

Fungsi:
- menunjukkan aktivitas firma
- memberi bukti sosial dan profesionalisme

Konten utama:
- dokumentasi rapat atau konsultasi
- kegiatan pendampingan
- seminar atau edukasi hukum
- kegiatan tim
- catatan bahwa foto final dapat diganti setelah klien mengirim aset asli

### 6. Hubungi Kami

Fungsi:
- menjadi halaman konversi
- memudahkan calon klien menghubungi firma

Konten utama:
- nomor telepon dan WhatsApp
- email
- alamat kantor
- jam operasional
- langkah singkat untuk memulai konsultasi

## Rekomendasi Stack Paling Cocok

### Rekomendasi untuk versi pertama

`HTML + CSS + JavaScript` statis.

Alasan:
- paling cepat dibangun ulang
- mudah diupload ke shared hosting biasa
- tidak bergantung pada database
- performa ringan
- mudah dipindah ke hosting baru walau cPanel lama tidak ada

### Rekomendasi untuk fase berikutnya

`WordPress` layak dipertimbangkan jika pemilik ingin:
- mengubah konten sendiri lewat dashboard
- menambah artikel hukum atau blog
- mengelola galeri dan halaman tanpa bantuan developer

## Draft Struktur Proyek

```text
alwi-lawyers-rebuild/
  index.html
  tentang-kami.html
  tim-hukum.html
  layanan-hukum.html
  galeri.html
  hubungi-kami.html
  PROJECT_PLAN.md
  README.md
  assets/
    styles.css
    app.js
```

## Estimasi Pekerjaan

Estimasi realistis untuk proyek company profile seperti ini:

1. Pengumpulan materi dan finalisasi konten: 0.5 - 1 hari
2. Desain dan slicing versi baru: 1 - 2 hari
3. Pembuatan halaman lengkap dan responsive: 1 - 2 hari
4. Revisi klien dan penyesuaian akhir: 0.5 - 1 hari
5. Upload ke hosting dan testing akhir: 0.5 hari

Total estimasi:

`3 - 6 hari kerja` tergantung kecepatan revisi dan kelengkapan aset dari klien.

## Data yang Sebaiknya Diminta ke Klien

- logo versi asli
- foto founder dan tim
- foto kegiatan untuk galeri
- alamat kantor terbaru
- email aktif dan nomor WhatsApp utama
- daftar layanan final
- profil firma yang sudah diperbarui
- bila ada, akses domain atau nameserver untuk pointing ke hosting baru

## Catatan Implementasi Saat Ini

Versi pertama yang dibuat di folder ini adalah prototype fungsional company profile dengan:
- desain modern dan responsive
- konten yang sudah diperbarui
- struktur halaman lengkap
- CTA konsultasi yang siap dipakai

Tahap berikutnya setelah prototype:
- ganti placeholder foto dengan aset asli
- finalisasi copywriting bersama klien
- deploy ke hosting/domain final
