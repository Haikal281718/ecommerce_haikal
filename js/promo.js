document.addEventListener("DOMContentLoaded", function () {
  var target = new Date("2026-11-30T23:59:59+07:00").getTime();
  var elHari = document.getElementById("haikal_cd_hari");
  var elJam = document.getElementById("haikal_cd_jam");
  var elMenit = document.getElementById("haikal_cd_menit");
  var elDetik = document.getElementById("haikal_cd_detik");

  function dua(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function tick() {
    if (!elHari) return;
    var sisa = target - Date.now();
    if (sisa <= 0) {
      elHari.textContent = "00";
      elJam.textContent = "00";
      elMenit.textContent = "00";
      elDetik.textContent = "00";
      return;
    }
    var detik = Math.floor(sisa / 1000);
    var hari = Math.floor(detik / 86400);
    var jam = Math.floor((detik % 86400) / 3600);
    var menit = Math.floor((detik % 3600) / 60);
    var sisaDetik = detik % 60;
    elHari.textContent = dua(hari);
    elJam.textContent = dua(jam);
    elMenit.textContent = dua(menit);
    elDetik.textContent = dua(sisaDetik);
  }

  tick();
  setInterval(tick, 1000);

  var grid = document.getElementById("haikal_flash_grid");
  if (grid) {
    var promo = HAIKAL_PRODUK.filter(function (p) {
      return p.hargaPromo;
    });
    grid.innerHTML = promo.map(haikalKartu).join("");
  }

  document.querySelectorAll("[data-kode]").forEach(function (tombol) {
    tombol.addEventListener("click", function () {
      var kode = tombol.getAttribute("data-kode");
      function berhasil() {
        haikalToast("Kode " + kode + " berhasil disalin", "sukses");
      }
      function gagal() {
        haikalToast("Kode voucher: " + kode, "sukses");
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(kode).then(berhasil).catch(gagal);
      } else {
        gagal();
      }
    });
  });
});
