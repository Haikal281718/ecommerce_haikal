document.addEventListener("DOMContentLoaded", function () {
  var galeri = document.getElementById("haikal_galeri_tentang");
  if (galeri) {
    galeri.innerHTML = HAIKAL_PRODUK.slice(0, 6)
      .map(function (p, i) {
        return '<img src="' + haikalGambar(p, i % 3) + '" alt="' + p.nama + '" loading="lazy">';
      })
      .join("");
  }

  var visual = document.querySelectorAll(".haikal_tentang_visual img");
  var pilihan = [HAIKAL_PRODUK[3], HAIKAL_PRODUK[8]];
  visual.forEach(function (img, i) {
    if (pilihan[i]) {
      img.src = haikalGambar(pilihan[i]);
      img.alt = pilihan[i].nama;
    }
  });

  var tombolVideo = document.querySelector(".haikal_video_tombol");
  if (tombolVideo) {
    tombolVideo.addEventListener("click", function () {
      haikalToast("Video profil Haikal Threads segera hadir", "sukses");
    });
  }
});
