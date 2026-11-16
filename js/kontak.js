document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("haikal_form_kontak");
  if (!form) return;

  var sukses = document.getElementById("haikal_kontak_sukses");

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

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = true;

    var nama = document.getElementById("haikal_kontak_nama").value.trim();
    valid = setStatus("haikal_kontak_nama", nama.length >= 3, "Nama minimal 3 karakter.") && valid;

    var email = document.getElementById("haikal_kontak_email").value.trim();
    valid = setStatus("haikal_kontak_email", haikalValidasiEmail(email), "Masukkan email yang valid.") && valid;

    var subjek = document.getElementById("haikal_kontak_subjek").value.trim();
    valid = setStatus("haikal_kontak_subjek", subjek.length >= 3, "Subjek minimal 3 karakter.") && valid;

    var pesan = document.getElementById("haikal_kontak_pesan").value.trim();
    valid = setStatus("haikal_kontak_pesan", pesan.length >= 10, "Pesan minimal 10 karakter.") && valid;

    if (!valid) {
      haikalToast("Periksa kembali formulir Anda", "galat");
      return;
    }

    form.reset();
    if (sukses) {
      sukses.hidden = false;
      sukses.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    haikalToast("Pesan Anda berhasil dikirim", "sukses");
  });
});
