document.addEventListener("DOMContentLoaded", function () {
  var grid = document.getElementById("haikal_grid_produk");
  if (!grid) return;

  var cari = document.getElementById("haikal_cari");
  var urut = document.getElementById("haikal_urut");
  var info = document.getElementById("haikal_hasil_info");
  var kosong = document.getElementById("haikal_kosong");
  var chips = document.querySelectorAll("[data-kategori]");
  var kategoriAktif = "Semua";

  var params = new URLSearchParams(location.search);
  var dariUrl = params.get("kategori");
  if (dariUrl && HAIKAL_KATEGORI.indexOf(dariUrl) !== -1) {
    kategoriAktif = dariUrl;
  }

  function tandaiChip() {
    chips.forEach(function (chip) {
      chip.classList.toggle("aktif", chip.getAttribute("data-kategori") === kategoriAktif);
    });
  }

  function render() {
    var kata = (cari.value || "").toLowerCase().trim();
    var hasil = HAIKAL_PRODUK.filter(function (p) {
      var cocokKategori = kategoriAktif === "Semua" || p.kategori === kategoriAktif;
      var cocokKata =
        !kata ||
        p.nama.toLowerCase().indexOf(kata) !== -1 ||
        p.kategori.toLowerCase().indexOf(kata) !== -1;
      return cocokKategori && cocokKata;
    });

    if (urut.value === "murah") {
      hasil = hasil.slice().sort(function (a, b) {
        return haikalHargaAkhir(a) - haikalHargaAkhir(b);
      });
    } else if (urut.value === "mahal") {
      hasil = hasil.slice().sort(function (a, b) {
        return haikalHargaAkhir(b) - haikalHargaAkhir(a);
      });
    } else if (urut.value === "rating") {
      hasil = hasil.slice().sort(function (a, b) {
        return b.rating - a.rating;
      });
    }

    grid.innerHTML = hasil.map(haikalKartu).join("");
    info.textContent = "Menampilkan " + hasil.length + " produk";
    var adaHasil = hasil.length > 0;
    grid.hidden = !adaHasil;
    kosong.hidden = adaHasil;
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      kategoriAktif = chip.getAttribute("data-kategori");
      tandaiChip();
      render();
    });
  });

  cari.addEventListener("input", render);
  urut.addEventListener("change", render);

  tandaiChip();
  render();
});
