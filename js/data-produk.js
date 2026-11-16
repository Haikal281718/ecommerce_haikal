const HAIKAL_KATEGORI = ["Atasan", "Bawahan", "Sepatu", "Aksesoris"];

const HAIKAL_PRODUK = [
  {
    id: "kaos-senja",
    nama: "Kaos Oversize Senja",
    kategori: "Atasan",
    harga: 149000,
    hargaPromo: 119000,
    warnaGradien: ["#c46a4a", "#8c4630"],
    unggulan: true,
    rating: 4.8,
    terjual: 1240,
    varian: { ukuran: ["S", "M", "L", "XL"], warna: ["Terracotta", "Krem", "Hitam"] },
    deskripsi:
      "Kaos oversize dengan bahan katun combed 30s yang lembut dan adem. Potongan longgar memberi ruang gerak nyaman untuk aktivitas harian tanpa mengorbankan gaya.",
    spesifikasi: {
      Bahan: "Katun combed 30s",
      Berat: "220 gram",
      Fit: "Oversize",
      Perawatan: "Cuci mesin suhu dingin"
    },
    ulasan: [
      { nama: "Rizky A.", rating: 5, teks: "Bahannya adem dan jatuh di badan. Warnanya sesuai foto.", tanggal: "12 Okt 2026" },
      { nama: "Dinda P.", rating: 4, teks: "Ukuran sedikit lebih besar, tapi justru pas untuk gaya oversize.", tanggal: "05 Okt 2026" }
    ]
  },
  {
    id: "hoodie-kabut",
    nama: "Hoodie Kabut",
    kategori: "Atasan",
    harga: 289000,
    hargaPromo: null,
    warnaGradien: ["#6b7280", "#374151"],
    unggulan: true,
    rating: 4.7,
    terjual: 860,
    varian: { ukuran: ["S", "M", "L", "XL"], warna: ["Abu", "Hitam", "Krem"] },
    deskripsi:
      "Hoodie berbahan fleece tebal yang hangat dengan kantong kanguru dan tali serut. Cocok untuk cuaca dingin maupun gaya kasual sehari-hari.",
    spesifikasi: {
      Bahan: "Fleece cotton 320 gram",
      Fit: "Regular",
      Detail: "Kantong kanguru, tali serut",
      Perawatan: "Cuci mesin suhu dingin"
    },
    ulasan: [
      { nama: "Bagas S.", rating: 5, teks: "Tebal, hangat, dan jahitannya rapi. Sangat puas.", tanggal: "18 Okt 2026" },
      { nama: "Nadia R.", rating: 4, teks: "Warnanya kalem dan mudah dipadukan.", tanggal: "02 Okt 2026" }
    ]
  },
  {
    id: "kemeja-pesisir",
    nama: "Kemeja Linen Pesisir",
    kategori: "Atasan",
    harga: 259000,
    hargaPromo: null,
    warnaGradien: ["#a8b5a2", "#6e7f6a"],
    unggulan: false,
    rating: 4.6,
    terjual: 540,
    varian: { ukuran: ["S", "M", "L", "XL"], warna: ["Sage", "Krem", "Putih"] },
    deskripsi:
      "Kemeja linen dengan potongan santai dan tekstur alami. Ringan, breathable, dan cocok dipakai formal maupun kasual.",
    spesifikasi: {
      Bahan: "Linen blend",
      Fit: "Relaxed",
      Kerah: "Kerah kemeja klasik",
      Perawatan: "Cuci tangan atau mesin lembut"
    },
    ulasan: [
      { nama: "Fajar H.", rating: 5, teks: "Adem dipakai di cuaca panas, jatuhnya bagus.", tanggal: "10 Okt 2026" },
      { nama: "Sari W.", rating: 4, teks: "Bahan linennya terasa premium, sedikit kusut tapi wajar.", tanggal: "28 Sep 2026" }
    ]
  },
  {
    id: "jaket-karang",
    nama: "Jaket Denim Karang",
    kategori: "Atasan",
    harga: 399000,
    hargaPromo: 339000,
    warnaGradien: ["#4c6a92", "#2e4568"],
    unggulan: true,
    rating: 4.9,
    terjual: 730,
    varian: { ukuran: ["M", "L", "XL"], warna: ["Biru", "Hitam"] },
    deskripsi:
      "Jaket denim dengan cucian warna vintage dan kancing logam. Potongan boxy membuatnya mudah dipadukan dengan berbagai gaya.",
    spesifikasi: {
      Bahan: "Denim 12 oz",
      Fit: "Boxy",
      Detail: "Kancing logam, dua kantong dada",
      Perawatan: "Cuci terbalik, jangan pemutih"
    },
    ulasan: [
      { nama: "Yoga P.", rating: 5, teks: "Denim tebal dan warnanya keren. Worth it.", tanggal: "20 Okt 2026" },
      { nama: "Alya M.", rating: 5, teks: "Beli untuk hadiah, kualitasnya di luar ekspektasi.", tanggal: "14 Okt 2026" }
    ]
  },
  {
    id: "cargo-bukit",
    nama: "Celana Cargo Bukit",
    kategori: "Bawahan",
    harga: 279000,
    hargaPromo: null,
    warnaGradien: ["#8a7a5c", "#5c4f38"],
    unggulan: false,
    rating: 4.7,
    terjual: 610,
    varian: { ukuran: ["28", "30", "32", "34"], warna: ["Khaki", "Hitam", "Army"] },
    deskripsi:
      "Celana cargo dengan enam kantong fungsional dan bahan ripstop yang kuat. Nyaman untuk kegiatan outdoor maupun gaya streetwear.",
    spesifikasi: {
      Bahan: "Ripstop cotton",
      Fit: "Relaxed straight",
      Detail: "Enam kantong, tali pinggang",
      Perawatan: "Cuci mesin suhu dingin"
    },
    ulasan: [
      { nama: "Reza F.", rating: 5, teks: "Kantongnya banyak dan bahannya kuat. Suka sekali.", tanggal: "16 Okt 2026" },
      { nama: "Ilham N.", rating: 4, teks: "Ukuran sesuai tabel, jahitan rapi.", tanggal: "01 Okt 2026" }
    ]
  },
  {
    id: "jeans-biru-laut",
    nama: "Jeans Slim Biru Laut",
    kategori: "Bawahan",
    harga: 319000,
    hargaPromo: null,
    warnaGradien: ["#3e5c76", "#22384d"],
    unggulan: false,
    rating: 4.6,
    terjual: 980,
    varian: { ukuran: ["28", "30", "32", "34"], warna: ["Biru", "Hitam"] },
    deskripsi:
      "Jeans slim fit dengan bahan stretch yang nyaman mengikuti bentuk tubuh. Warna biru laut yang mudah dipadukan untuk berbagai kesempatan.",
    spesifikasi: {
      Bahan: "Cotton stretch",
      Fit: "Slim",
      Detail: "Lima kantong, ritsleting logam",
      Perawatan: "Cuci terbalik, suhu dingin"
    },
    ulasan: [
      { nama: "Taufik A.", rating: 5, teks: "Stretch dan nyaman, tidak kaku saat dipakai.", tanggal: "11 Okt 2026" },
      { nama: "Bella K.", rating: 4, teks: "Warnanya bagus dan tidak luntur setelah dicuci.", tanggal: "30 Sep 2026" }
    ]
  },
  {
    id: "pendek-tropis",
    nama: "Celana Pendek Tropis",
    kategori: "Bawahan",
    harga: 179000,
    hargaPromo: 149000,
    warnaGradien: ["#c9a66b", "#a17f45"],
    unggulan: false,
    rating: 4.5,
    terjual: 450,
    varian: { ukuran: ["S", "M", "L", "XL"], warna: ["Krem", "Hitam", "Olive"] },
    deskripsi:
      "Celana pendek berbahan ringan dengan pinggang elastis dan tali serut. Pilihan tepat untuk liburan dan aktivitas santai.",
    spesifikasi: {
      Bahan: "Cotton twill ringan",
      Fit: "Regular",
      Detail: "Pinggang elastis, tali serut",
      Perawatan: "Cuci mesin suhu dingin"
    },
    ulasan: [
      { nama: "Adit R.", rating: 5, teks: "Ringan dan cepat kering, cocok untuk pantai.", tanggal: "08 Okt 2026" },
      { nama: "Putri L.", rating: 4, teks: "Bahannya nyaman, warna kremnya cantik.", tanggal: "22 Sep 2026" }
    ]
  },
  {
    id: "kulot-angin",
    nama: "Kulot Angin",
    kategori: "Bawahan",
    harga: 229000,
    hargaPromo: null,
    warnaGradien: ["#b8a6a0", "#8a756e"],
    unggulan: false,
    rating: 4.4,
    terjual: 320,
    varian: { ukuran: ["S", "M", "L"], warna: ["Mocca", "Hitam", "Abu"] },
    deskripsi:
      "Kulot dengan potongan lebar dan bahan flowy yang jatuh sempurna. Nyaman dipakai sepanjang hari dengan tampilan elegan.",
    spesifikasi: {
      Bahan: "Crepe premium",
      Fit: "Wide leg",
      Detail: "Pinggang karet tersembunyi",
      Perawatan: "Cuci lembut, setrika suhu rendah"
    },
    ulasan: [
      { nama: "Maya S.", rating: 5, teks: "Jatuhnya bagus dan tidak menerawang. Suka!", tanggal: "13 Okt 2026" },
      { nama: "Citra D.", rating: 4, teks: "Nyaman untuk kerja, warna mocca elegan.", tanggal: "27 Sep 2026" }
    ]
  },
  {
    id: "sneakers-langkah",
    nama: "Sneakers Langkah",
    kategori: "Sepatu",
    harga: 459000,
    hargaPromo: 389000,
    warnaGradien: ["#d9d4cc", "#a9a199"],
    unggulan: true,
    rating: 4.8,
    terjual: 1520,
    varian: { ukuran: ["39", "40", "41", "42", "43"], warna: ["Putih", "Krem", "Hitam"] },
    deskripsi:
      "Sneakers minimalis dengan sol karet empuk dan upper kanvas tahan lama. Desain bersih yang cocok untuk gaya kasual maupun semi-formal.",
    spesifikasi: {
      Bahan: "Kanvas premium",
      Sol: "Rubber foam",
      Fit: "True to size",
      Perawatan: "Bersihkan dengan sikat lembut"
    },
    ulasan: [
      { nama: "Hendra W.", rating: 5, teks: "Empuk dipakai jalan jauh, ukuran pas.", tanggal: "19 Okt 2026" },
      { nama: "Vina A.", rating: 5, teks: "Putihnya bersih dan mudah dipadukan. Recommended.", tanggal: "09 Okt 2026" }
    ]
  },
  {
    id: "boots-gunung",
    nama: "Boots Gunung",
    kategori: "Sepatu",
    harga: 589000,
    hargaPromo: null,
    warnaGradien: ["#6b4f3a", "#3e2c20"],
    unggulan: false,
    rating: 4.7,
    terjual: 280,
    varian: { ukuran: ["39", "40", "41", "42", "43"], warna: ["Coklat", "Hitam"] },
    deskripsi:
      "Boots kulit sintetis dengan sol bergerigi dan lapisan tahan air. Didesain untuk medan berat sekaligus tampil gagah di kota.",
    spesifikasi: {
      Bahan: "Kulit sintetis",
      Sol: "Tracton antislip",
      Fit: "True to size",
      Perawatan: "Lap dengan kain lembap"
    },
    ulasan: [
      { nama: "Bram T.", rating: 5, teks: "Kuat dipakai hiking ringan, solnya cengkeram.", tanggal: "15 Okt 2026" },
      { nama: "Rudi K.", rating: 4, teks: "Agak berat tapi wajar untuk boots. Keren.", tanggal: "03 Okt 2026" }
    ]
  },
  {
    id: "slipon-pantai",
    nama: "Slip-On Pantai",
    kategori: "Sepatu",
    harga: 259000,
    hargaPromo: null,
    warnaGradien: ["#9fb8ad", "#6e8c80"],
    unggulan: false,
    rating: 4.5,
    terjual: 670,
    varian: { ukuran: ["39", "40", "41", "42", "43"], warna: ["Sage", "Krem", "Hitam"] },
    deskripsi:
      "Sepatu slip-on tanpa tali dengan bahan kanvas ringan. Praktis dipakai sehari-hari dan mudah dibersihkan.",
    spesifikasi: {
      Bahan: "Kanvas ringan",
      Sol: "Karet vulkanisir",
      Fit: "True to size",
      Perawatan: "Cuci dengan tangan"
    },
    ulasan: [
      { nama: "Dewi P.", rating: 5, teks: "Praktis dan ringan, cocok untuk jalan-jalan.", tanggal: "07 Okt 2026" },
      { nama: "Arif S.", rating: 4, teks: "Nyaman, tapi solnya agak tipis.", tanggal: "25 Sep 2026" }
    ]
  },
  {
    id: "running-lari",
    nama: "Running Lari",
    kategori: "Sepatu",
    harga: 499000,
    hargaPromo: null,
    warnaGradien: ["#c4553e", "#8c3324"],
    unggulan: false,
    rating: 4.6,
    terjual: 890,
    varian: { ukuran: ["39", "40", "41", "42", "43"], warna: ["Merah", "Hitam", "Putih"] },
    deskripsi:
      "Sepatu lari dengan bantalan responsif dan upper mesh breathable. Ringan di kaki untuk lari jarak pendek maupun panjang.",
    spesifikasi: {
      Bahan: "Mesh breathable",
      Sol: "EVA foam",
      Fit: "True to size",
      Perawatan: "Angin-anginkan setelah dipakai"
    },
    ulasan: [
      { nama: "Gilang R.", rating: 5, teks: "Ringan dan bantalan empuk, enak untuk lari 5K.", tanggal: "17 Okt 2026" },
      { nama: "Sinta M.", rating: 4, teks: "Warna merahnya cerah, ukuran sesuai.", tanggal: "06 Okt 2026" }
    ]
  },
  {
    id: "tote-kanvas",
    nama: "Tote Bag Kanvas",
    kategori: "Aksesoris",
    bentuk: "tas",
    harga: 159000,
    hargaPromo: null,
    warnaGradien: ["#b9a88f", "#8c7a5e"],
    unggulan: false,
    rating: 4.7,
    terjual: 540,
    varian: { ukuran: ["All Size"], warna: ["Natural", "Hitam"] },
    deskripsi:
      "Tote bag kanvas tebal dengan kantong dalam dan tali yang kuat. Muat laptop 14 inci, cocok untuk kuliah maupun kerja.",
    spesifikasi: {
      Bahan: "Kanvas 12 oz",
      Ukuran: "38 x 42 cm",
      Detail: "Kantong dalam, tali reinforced",
      Perawatan: "Cuci tangan, keringkan di tempat teduh"
    },
    ulasan: [
      { nama: "Laras W.", rating: 5, teks: "Kuat menahan laptop dan buku. Jahitannya rapi.", tanggal: "14 Okt 2026" },
      { nama: "Fikri A.", rating: 4, teks: "Bahan tebal, cocok untuk kerja.", tanggal: "29 Sep 2026" }
    ]
  },
  {
    id: "topi-matahari",
    nama: "Topi Matahari",
    kategori: "Aksesoris",
    bentuk: "topi",
    harga: 99000,
    hargaPromo: null,
    warnaGradien: ["#d8b25e", "#a9822f"],
    unggulan: false,
    rating: 4.5,
    terjual: 760,
    varian: { ukuran: ["All Size"], warna: ["Krem", "Hitam", "Navy"] },
    deskripsi:
      "Topi baseball dengan bahan katun dan bordir logo minimalis. Melindungi dari sinar matahari dengan gaya yang tetap rapi.",
    spesifikasi: {
      Bahan: "Katun twill",
      Ukuran: "Adjustable",
      Detail: "Strap belakang, bordir logo",
      Perawatan: "Cuci tangan, jangan diperas"
    },
    ulasan: [
      { nama: "Bayu P.", rating: 5, teks: "Ukuran bisa disesuaikan, nyaman dipakai.", tanggal: "12 Okt 2026" },
      { nama: "Intan R.", rating: 4, teks: "Bordirnya rapi, warna navy cocok untuk semua outfit.", tanggal: "02 Okt 2026" }
    ]
  },
  {
    id: "jam-waktu",
    nama: "Jam Waktu",
    kategori: "Aksesoris",
    bentuk: "jam",
    harga: 349000,
    hargaPromo: 299000,
    warnaGradien: ["#4a4a4a", "#262626"],
    unggulan: true,
    rating: 4.8,
    terjual: 410,
    varian: { ukuran: ["All Size"], warna: ["Hitam", "Silver", "Coklat"] },
    deskripsi:
      "Jam tangan analog dengan tali kulit sintetis dan mesin quartz presisi. Tampilan klasik yang cocok untuk acara formal maupun kerja.",
    spesifikasi: {
      Bahan: "Stainless steel & kulit sintetis",
      Tahan_air: "3 ATM",
      Detail: "Mesin quartz, dial minimalis",
      Perawatan: "Hindari kontak air panas"
    },
    ulasan: [
      { nama: "Doni S.", rating: 5, teks: "Elegan dan terlihat mahal. Puas sekali.", tanggal: "21 Okt 2026" },
      { nama: "Rina K.", rating: 5, teks: "Beli untuk kado, packingnya rapi.", tanggal: "10 Okt 2026" }
    ]
  },
  {
    id: "kacamata-cakrawala",
    nama: "Kacamata Cakrawala",
    kategori: "Aksesoris",
    bentuk: "kacamata",
    harga: 199000,
    hargaPromo: null,
    warnaGradien: ["#7c8b9a", "#4e5a66"],
    unggulan: false,
    rating: 4.4,
    terjual: 350,
    varian: { ukuran: ["All Size"], warna: ["Hitam", "Coklat", "Transparan"] },
    deskripsi:
      "Kacamata hitam dengan lensa UV400 dan frame ringan. Melindungi mata dari sinar UV dengan desain modern.",
    spesifikasi: {
      Bahan: "Frame TR90",
      Lensa: "UV400 polarized",
      Detail: "Boks dan kain pembersih",
      Perawatan: "Bersihkan dengan kain mikrofiber"
    },
    ulasan: [
      { nama: "Andra L.", rating: 5, teks: "Ringan dan lensanya nyaman, tidak silau.", tanggal: "09 Okt 2026" },
      { nama: "Sinta F.", rating: 4, teks: "Desainnya modern, cocok untuk liburan.", tanggal: "26 Sep 2026" }
    ]
  }
];
