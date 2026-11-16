document.addEventListener("DOMContentLoaded", function () {
  var isi = document.getElementById("haikal_keranjang_isi");
  var daftar = document.getElementById("haikal_daftar_keranjang");
  if (!isi || !daftar) return;

  var kosong = document.getElementById("haikal_keranjang_kosong");
  var sukses = document.getElementById("haikal_checkout_sukses");
  var form = document.getElementById("haikal_form_checkout");

  function render() {
    var data = haikalAmbilKeranjang();
    var items = [];
    data.forEach(function (item, index) {
      var produk = haikalCariProduk(item.id);
      if (produk) items.push({ item: item, index: index, produk: produk });
    });

    if (items.length === 0) {
      isi.hidden = true;
      kosong.hidden = false;
      return;
    }

    isi.hidden = false;
    kosong.hidden = true;

    daftar.innerHTML = items
      .map(function (x) {
        return (
          '<div class="haikal_item_keranjang">' +
          '<div class="haikal_item_gambar"><img src="' + haikalGambar(x.produk) + '" alt="' + x.produk.nama + '"></div>' +
          '<div class="haikal_item_info">' +
          "<h3>" + x.produk.nama + "</h3>" +
          '<p class="haikal_item_varian">Ukuran ' + x.item.ukuran + " &middot; Warna " + x.item.warna + "</p>" +
          '<p class="haikal_item_harga">' + haikalRupiah(haikalHargaAkhir(x.produk)) + "</p>" +
          '<div class="haikal_qty">' +
          '<button type="button" data-aksi="kurang" data-index="' + x.index + '" aria-label="Kurangi jumlah">&minus;</button>' +
          "<span>" + x.item.qty + "</span>" +
          '<button type="button" data-aksi="tambah" data-index="' + x.index + '" aria-label="Tambah jumlah">+</button>' +
          "</div>" +
          "</div>" +
          '<div class="haikal_item_kanan">' +
          '<span class="haikal_item_subtotal">' + haikalRupiah(haikalHargaAkhir(x.produk) * x.item.qty) + "</span>" +
          '<button type="button" class="haikal_hapus" data-aksi="hapus" data-index="' + x.index + '">Hapus</button>' +
          "</div>" +
          "</div>"
        );
      })
      .join("");

    var subtotal = items.reduce(function (total, x) {
      return total + haikalHargaAkhir(x.produk) * x.item.qty;
    }, 0);
    var jumlah = items.reduce(function (total, x) {
      return total + x.item.qty;
    }, 0);
    var ongkir = subtotal >= HAIKAL_GRATIS_ONGKIR_MIN ? 0 : HAIKAL_ONGKIR;

    document.getElementById("haikal_jumlah_item").textContent = jumlah;
    document.getElementById("haikal_subtotal").textContent = haikalRupiah(subtotal);
    document.getElementById("haikal_ongkir").textContent = ongkir === 0 ? "Gratis" : haikalRupiah(ongkir);
    document.getElementById("haikal_total").textContent = haikalRupiah(subtotal + ongkir);
  }

  daftar.addEventListener("click", function (e) {
    var tombol = e.target.closest("[data-aksi]");
    if (!tombol) return;
    var aksi = tombol.getAttribute("data-aksi");
    var index = Number(tombol.getAttribute("data-index"));
    var data = haikalAmbilKeranjang();
    if (!data[index]) return;

    if (aksi === "kurang") {
      if (data[index].qty > 1) data[index].qty -= 1;
    } else if (aksi === "tambah") {
      if (data[index].qty < 20) data[index].qty += 1;
    } else if (aksi === "hapus") {
      data.splice(index, 1);
    }

    haikalSimpanKeranjang(data);
    render();
  });

  function setStatus(id, kondisi, pesan) {
    var input = document.getElementById(id);
    if (!input) return kondisi;
    var field = input.closest(".haikal_field");
    var error = field ? field.querySelector(".haikal_error") : null;
    if (!kondisi) {
      if (field) field.classList.add("galat");
      if (error) {
        error.textContent = pesan;
        error.classList.add("tampil");
      }
      return false;
    }
    if (field) field.classList.remove("galat");
    if (error) error.classList.remove("tampil");
    return true;
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      var nama = document.getElementById("haikal_nama").value.trim();
      valid = setStatus("haikal_nama", nama.length >= 3, "Nama minimal 3 karakter.") && valid;

      var email = document.getElementById("haikal_email").value.trim();
      valid = setStatus("haikal_email", haikalValidasiEmail(email), "Masukkan email yang valid.") && valid;

      var telp = document.getElementById("haikal_telp").value.trim();
      valid = setStatus("haikal_telp", /^[0-9+\s-]{9,16}$/.test(telp), "Nomor telepon minimal 9 digit.") && valid;

      var alamat = document.getElementById("haikal_alamat").value.trim();
      valid = setStatus("haikal_alamat", alamat.length >= 10, "Alamat minimal 10 karakter.") && valid;

      var kota = document.getElementById("haikal_kota").value.trim();
      valid = setStatus("haikal_kota", kota.length >= 3, "Kota wajib diisi.") && valid;

      var kodepos = document.getElementById("haikal_kodepos").value.trim();
      valid = setStatus("haikal_kodepos", /^\d{5}$/.test(kodepos), "Kode pos harus 5 digit angka.") && valid;

      if (!valid) {
        haikalToast("Periksa kembali data pengiriman", "galat");
        return;
      }

      var total = document.getElementById("haikal_total").textContent;
      var nomor = "HT-" + Date.now().toString().slice(-8);

      haikalSimpanKeranjang([]);
      isi.hidden = true;
      kosong.hidden = true;
      if (sukses) {
        sukses.hidden = false;
        document.getElementById("haikal_nomor_pesanan").textContent = nomor;
        document.getElementById("haikal_sukses_total").textContent = total;
        sukses.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  }

  render();
});
