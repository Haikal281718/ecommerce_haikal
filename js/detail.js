document.addEventListener("DOMContentLoaded", function () {
  var wadah = document.getElementById("haikal_detail_isi");
  if (!wadah) return;

  var id = new URLSearchParams(location.search).get("id");
  var produk = haikalCariProduk(id) || HAIKAL_PRODUK[0];
  var ukuran = produk.varian.ukuran[0];
  var warna = produk.varian.warna[0];
  var qty = 1;

  document.title = produk.nama + " - Haikal Threads";
  var breadcrumbNama = document.getElementById("haikal_breadcrumb_nama");
  if (breadcrumbNama) breadcrumbNama.textContent = produk.nama;

  var diskon = haikalDiskon(produk);
  var hargaCoret = produk.hargaPromo
    ? '<span class="haikal_harga_coret">' + haikalRupiah(produk.harga) + "</span>"
    : "";

  var galeri = "";
  for (var i = 0; i < 3; i++) {
    galeri +=
      '<button class="haikal_thumb' + (i === 0 ? " aktif" : "") + '" type="button" data-gambar="' + i + '">' +
      '<img src="' + haikalGambar(produk, i) + '" alt="' + produk.nama + " tampilan " + (i + 1) + '">' +
      "</button>";
  }

  var opsiUkuran = produk.varian.ukuran
    .map(function (u, i) {
      return '<button class="haikal_opsi' + (i === 0 ? " aktif" : "") + '" type="button" data-ukuran="' + u + '">' + u + "</button>";
    })
    .join("");

  var opsiWarna = produk.varian.warna
    .map(function (w, i) {
      return '<button class="haikal_opsi' + (i === 0 ? " aktif" : "") + '" type="button" data-warna="' + w + '">' + w + "</button>";
    })
    .join("");

  var spesifikasi = Object.keys(produk.spesifikasi)
    .map(function (k) {
      return "<tr><td>" + k.replace(/_/g, " ") + "</td><td>" + produk.spesifikasi[k] + "</td></tr>";
    })
    .join("");

  var ulasan = produk.ulasan
    .map(function (u) {
      var bintang = "";
      for (var s = 0; s < 5; s++) {
        bintang += s < u.rating ? "&#9733;" : "&#9734;";
      }
      return (
        '<div class="haikal_ulasan_item">' +
        '<div class="haikal_ulasan_kepala"><strong>' + u.nama + '</strong><span class="haikal_ulasan_bintang">' + bintang + "</span></div>" +
        "<p>" + u.teks + "</p><small>" + u.tanggal + "</small></div>"
      );
    })
    .join("");

  var terkait = HAIKAL_PRODUK.filter(function (p) {
    return p.kategori === produk.kategori && p.id !== produk.id;
  }).slice(0, 4);
  if (terkait.length < 4) {
    HAIKAL_PRODUK.forEach(function (p) {
      if (terkait.length < 4 && p.id !== produk.id && terkait.indexOf(p) === -1) {
        terkait.push(p);
      }
    });
  }

  var labelDiskon = diskon
    ? '<span class="haikal_diskon_inline">Hemat ' + diskon + "%</span>"
    : "";

  wadah.innerHTML =
    '<div class="haikal_detail_grid">' +
    '<div class="haikal_detail_galeri">' +
    '<div class="haikal_galeri_utama"><img id="haikal_gambar_utama" src="' + haikalGambar(produk, 0) + '" alt="' + produk.nama + '"></div>' +
    '<div class="haikal_galeri_thumb">' + galeri + "</div>" +
    "</div>" +
    '<div class="haikal_detail_info">' +
    '<span class="haikal_kartu_kategori">' + produk.kategori + "</span>" +
    '<h1 class="haikal_detail_nama">' + produk.nama + "</h1>" +
    '<div class="haikal_detail_meta"><span class="haikal_rating">&#9733; ' + produk.rating.toFixed(1) + "</span><span>" + produk.terjual.toLocaleString("id-ID") + " terjual</span></div>" +
    '<div class="haikal_kartu_harga haikal_detail_harga"><span class="haikal_harga">' + haikalRupiah(haikalHargaAkhir(produk)) + "</span>" + hargaCoret + labelDiskon + "</div>" +
    '<p class="haikal_detail_desk">' + produk.deskripsi + "</p>" +
    '<div class="haikal_varian">' +
    '<p class="haikal_varian_label">Pilih Ukuran</p>' +
    '<div class="haikal_varian_opsi" id="haikal_opsi_ukuran">' + opsiUkuran + "</div>" +
    '<p class="haikal_varian_label">Pilih Warna</p>' +
    '<div class="haikal_varian_opsi" id="haikal_opsi_warna">' + opsiWarna + "</div>" +
    "</div>" +
    '<div class="haikal_detail_beli">' +
    '<div class="haikal_qty"><button type="button" id="haikal_qty_min" aria-label="Kurangi jumlah">&minus;</button><span id="haikal_qty_val">1</span><button type="button" id="haikal_qty_plus" aria-label="Tambah jumlah">+</button></div>' +
    '<button type="button" class="haikal_tombol haikal_tombol_utama haikal_tombol_lebar" id="haikal_tambah_detail">Tambah ke Keranjang</button>' +
    "</div>" +
    '<ul class="haikal_detail_perks">' +
    "<li>Gratis ongkir untuk pembelian di atas Rp500.000</li>" +
    "<li>Retur gratis dalam 30 hari</li>" +
    "<li>Pembayaran aman dan terpercaya</li>" +
    "</ul>" +
    "</div>" +
    "</div>" +
    '<div class="haikal_detail_bawah">' +
    '<section class="haikal_panel"><h2>Deskripsi & Spesifikasi</h2><p class="haikal_detail_desk">' + produk.deskripsi + '</p><table class="haikal_spesifikasi">' + spesifikasi + "</table></section>" +
    '<section class="haikal_panel"><h2>Ulasan Pembeli</h2>' + ulasan + "</section>" +
    "</div>" +
    '<section class="haikal_terkait">' +
    '<div class="haikal_judul_baris"><div><p class="haikal_eyebrow">Lengkapi gayamu</p><h2>Produk Terkait</h2></div><a href="produk.html" class="haikal_tautan_panah">Lihat semua</a></div>' +
    '<div class="haikal_grid_produk">' + terkait.map(haikalKartu).join("") + "</div>" +
    "</section>";

  var gambarUtama = document.getElementById("haikal_gambar_utama");
  var thumbs = wadah.querySelectorAll(".haikal_thumb");
  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      var index = Number(thumb.getAttribute("data-gambar"));
      gambarUtama.src = haikalGambar(produk, index);
      thumbs.forEach(function (t) {
        t.classList.remove("aktif");
      });
      thumb.classList.add("aktif");
    });
  });

  var opsiUkuranEl = document.getElementById("haikal_opsi_ukuran");
  opsiUkuranEl.addEventListener("click", function (e) {
    var tombol = e.target.closest("[data-ukuran]");
    if (!tombol) return;
    ukuran = tombol.getAttribute("data-ukuran");
    opsiUkuranEl.querySelectorAll(".haikal_opsi").forEach(function (b) {
      b.classList.remove("aktif");
    });
    tombol.classList.add("aktif");
  });

  var opsiWarnaEl = document.getElementById("haikal_opsi_warna");
  opsiWarnaEl.addEventListener("click", function (e) {
    var tombol = e.target.closest("[data-warna]");
    if (!tombol) return;
    warna = tombol.getAttribute("data-warna");
    opsiWarnaEl.querySelectorAll(".haikal_opsi").forEach(function (b) {
      b.classList.remove("aktif");
    });
    tombol.classList.add("aktif");
  });

  var qtyVal = document.getElementById("haikal_qty_val");
  document.getElementById("haikal_qty_min").addEventListener("click", function () {
    if (qty > 1) {
      qty -= 1;
      qtyVal.textContent = qty;
    }
  });
  document.getElementById("haikal_qty_plus").addEventListener("click", function () {
    if (qty < 20) {
      qty += 1;
      qtyVal.textContent = qty;
    }
  });

  document.getElementById("haikal_tambah_detail").addEventListener("click", function () {
    haikalTambahKeKeranjang(produk.id, ukuran, warna, qty);
  });
});
