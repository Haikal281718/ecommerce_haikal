document.addEventListener("DOMContentLoaded", function () {
  var grid = document.getElementById("haikal_unggulan");
  if (grid) {
    var unggulan = HAIKAL_PRODUK.filter(function (p) {
      return p.unggulan;
    }).slice(0, 4);
    grid.innerHTML = unggulan.map(haikalKartu).join("");
  }

  var gambarHero = document.querySelectorAll(".haikal_hero_kartu img");
  var pilihanHero = [HAIKAL_PRODUK[0], HAIKAL_PRODUK[8], HAIKAL_PRODUK[13]];
  gambarHero.forEach(function (img, i) {
    if (pilihanHero[i]) {
      img.src = haikalGambar(pilihanHero[i]);
      img.alt = pilihanHero[i].nama;
    }
  });
});
