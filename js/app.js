const HAIKAL_KUNCI_KERANJANG = "haikal_keranjang";
const HAIKAL_ONGKIR = 20000;
const HAIKAL_GRATIS_ONGKIR_MIN = 500000;

function haikalRupiah(angka) {
  return "Rp" + Math.round(angka).toLocaleString("id-ID");
}

function haikalHargaAkhir(produk) {
  return produk.hargaPromo ? produk.hargaPromo : produk.harga;
}

function haikalDiskon(produk) {
  if (!produk.hargaPromo) return 0;
  return Math.round((1 - produk.hargaPromo / produk.harga) * 100);
}

function haikalCariProduk(id) {
  return HAIKAL_PRODUK.find(function (p) {
    return p.id === id;
  });
}

function haikalBentuk(kategori, produk) {
  var jenis = produk && produk.bentuk ? produk.bentuk : kategori;
  if (jenis === "Atasan") {
    return '<path d="M-150 -140 L-70 -175 Q0 -145 70 -175 L150 -140 L205 -70 L135 -15 L105 -55 L105 175 Q0 200 -105 175 L-105 -55 L-135 -15 L-205 -70 Z"/>';
  }
  if (jenis === "Bawahan") {
    return '<path d="M-125 -180 L125 -180 L150 190 L45 190 L0 55 L-45 190 L-150 190 Z"/><path d="M0 -180 L0 55" fill="none" stroke="url(#g)" stroke-width="8"/><path d="M-125 -138 L125 -138" fill="none" stroke="url(#g)" stroke-width="8"/>';
  }
  if (jenis === "Sepatu") {
    return '<path d="M-230 60 Q-230 18 -190 12 L-60 -6 Q-18 -12 8 14 L36 46 L150 56 Q220 64 220 110 L220 136 L-230 136 Z"/><rect x="-230" y="136" width="450" height="26" rx="13"/><path d="M-140 22 L-112 54 M-92 14 L-64 46 M-44 10 L-16 42" fill="none" stroke="url(#g)" stroke-width="9" stroke-linecap="round"/>';
  }
  if (jenis === "topi") {
    return '<path d="M-160 30 Q-160 -85 0 -85 Q160 -85 160 30 L160 55 L-160 55 Z"/><path d="M150 35 Q260 35 265 70 Q265 82 250 82 L150 70 Z"/><circle cx="0" cy="-85" r="12"/>';
  }
  if (jenis === "jam") {
    return '<rect x="-70" y="-210" width="140" height="120" rx="28"/><rect x="-70" y="90" width="140" height="120" rx="28"/><circle cx="0" cy="0" r="135"/><circle cx="0" cy="0" r="108" fill="url(#g)"/><path d="M0 0 L0 -70 M0 0 L52 32" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round"/>';
  }
  if (jenis === "kacamata") {
    return '<rect x="-220" y="-55" width="180" height="110" rx="45"/><rect x="40" y="-55" width="180" height="110" rx="45"/><rect x="-205" y="-40" width="150" height="80" rx="32" fill="url(#g)"/><rect x="55" y="-40" width="150" height="80" rx="32" fill="url(#g)"/><path d="M-40 0 Q0 -25 40 0" fill="none" stroke="#ffffff" stroke-width="16" stroke-linecap="round"/><path d="M-220 -20 L-285 -45 M220 -20 L285 -45" fill="none" stroke="#ffffff" stroke-width="14" stroke-linecap="round"/>';
  }
  return '<path d="M-165 -50 L165 -50 L135 195 L-135 195 Z"/><path d="M-80 -50 Q0 -185 80 -50" fill="none" stroke="#ffffff" stroke-width="24" stroke-linecap="round"/>';
}

function haikalGambar(produk, variasi) {
  variasi = variasi || 0;
  var c1 = produk.warnaGradien[0];
  var c2 = produk.warnaGradien[1];
  var bentuk = haikalBentuk(produk.kategori, produk);
  var rotasi = variasi * 10;
  var svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/>' +
    "</linearGradient></defs>" +
    '<rect width="800" height="1000" fill="url(#g)"/>' +
    '<circle cx="650" cy="180" r="220" fill="#ffffff" opacity="0.10"/>' +
    '<circle cx="120" cy="850" r="260" fill="#000000" opacity="0.08"/>' +
    '<g transform="translate(400 460) rotate(' + rotasi + ')" fill="#ffffff" opacity="0.92">' + bentuk + "</g>" +
    '<text x="50" y="940" font-family="Poppins, Arial, sans-serif" font-size="30" font-weight="600" fill="#ffffff" opacity="0.95">' + produk.nama + "</text>" +
    "</svg>";
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function haikalKartu(produk) {
  var diskon = haikalDiskon(produk);
  var labelDiskon = diskon
    ? '<span class="haikal_label_diskon">-' + diskon + "%</span>"
    : "";
  var hargaCoret = produk.hargaPromo
    ? '<span class="haikal_harga_coret">' + haikalRupiah(produk.harga) + "</span>"
    : "";
  return (
    '<article class="haikal_kartu_produk">' +
    '<a class="haikal_kartu_gambar" href="detail-produk.html?id=' + produk.id + '">' +
    '<img src="' + haikalGambar(produk) + '" alt="' + produk.nama + '" loading="lazy">' +
    labelDiskon +
    "</a>" +
    '<div class="haikal_kartu_isi">' +
    '<span class="haikal_kartu_kategori">' + produk.kategori + "</span>" +
    '<h3 class="haikal_kartu_nama"><a href="detail-produk.html?id=' + produk.id + '">' + produk.nama + "</a></h3>" +
    '<div class="haikal_kartu_harga">' +
    '<span class="haikal_harga">' + haikalRupiah(haikalHargaAkhir(produk)) + "</span>" +
    hargaCoret +
    "</div>" +
    '<div class="haikal_kartu_bawah">' +
    '<span class="haikal_rating">&#9733; ' + produk.rating.toFixed(1) + "</span>" +
    '<button class="haikal_tombol_beli" type="button" data-tambah="' + produk.id + '">Tambah</button>' +
    "</div>" +
    "</div>" +
    "</article>"
  );
}

function haikalAmbilKeranjang() {
  try {
    var data = JSON.parse(localStorage.getItem(HAIKAL_KUNCI_KERANJANG));
    return Array.isArray(data) ? data : [];
  } catch (e) {
    return [];
  }
}

function haikalSimpanKeranjang(data) {
  try {
    localStorage.setItem(HAIKAL_KUNCI_KERANJANG, JSON.stringify(data));
  } catch (e) {}
  haikalPerbaruiBadge();
}

function haikalTotalQty() {
  return haikalAmbilKeranjang().reduce(function (total, item) {
    return total + item.qty;
  }, 0);
}

function haikalPerbaruiBadge() {
  var badge = document.getElementById("haikal_badge_keranjang");
  if (!badge) return;
  var jumlah = haikalTotalQty();
  badge.textContent = jumlah;
  badge.classList.toggle("tampil", jumlah > 0);
}

function haikalTambahKeKeranjang(id, ukuran, warna, qty) {
  var produk = haikalCariProduk(id);
  if (!produk) return;
  var data = haikalAmbilKeranjang();
  var ada = data.find(function (item) {
    return item.id === id && item.ukuran === ukuran && item.warna === warna;
  });
  if (ada) {
    ada.qty += qty;
  } else {
    data.push({ id: id, ukuran: ukuran, warna: warna, qty: qty });
  }
  haikalSimpanKeranjang(data);
  haikalToast(produk.nama + " ditambahkan ke keranjang", "sukses");
}

var haikalTimerToast;
function haikalToast(pesan, tipe) {
  var el = document.getElementById("haikal_toast");
  if (!el) return;
  el.textContent = pesan;
  el.className = "haikal_toast tampil " + (tipe || "");
  clearTimeout(haikalTimerToast);
  haikalTimerToast = setTimeout(function () {
    el.className = "haikal_toast";
  }, 2800);
}

document.addEventListener("click", function (e) {
  var tombol = e.target.closest("[data-tambah]");
  if (!tombol) return;
  var id = tombol.getAttribute("data-tambah");
  var produk = haikalCariProduk(id);
  if (!produk) return;
  haikalTambahKeKeranjang(id, produk.varian.ukuran[0], produk.varian.warna[0], 1);
});

function haikalPasangMenu() {
  var tombol = document.getElementById("haikal_tombol_menu");
  var nav = document.getElementById("haikal_nav");
  if (!tombol || !nav) return;
  tombol.addEventListener("click", function () {
    var buka = nav.classList.toggle("buka");
    tombol.classList.toggle("aktif", buka);
    tombol.setAttribute("aria-expanded", buka ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("buka");
      tombol.classList.remove("aktif");
      tombol.setAttribute("aria-expanded", "false");
    }
  });
}

function haikalTandaiMenu() {
  var halaman = location.pathname.split("/").pop() || "index.html";
  var semua = document.querySelectorAll(".haikal_menu_tautan");
  semua.forEach(function (tautan) {
    var href = tautan.getAttribute("href");
    if (href === halaman || (halaman === "detail-produk.html" && href === "produk.html")) {
      tautan.classList.add("aktif");
    }
  });
}

function haikalValidasiEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
  haikalPerbaruiBadge();
  haikalPasangMenu();
  haikalTandaiMenu();
});
