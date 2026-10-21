const namaProgrammer = "Nauval Al Ghafur";
const tahunMulai = 2025;
const tahunSekarang = new Date().getFullYear();

const hitungPengalaman = (mulai, sekarang) => sekarang - mulai;
const masaKerja = hitungPengalaman(tahunMulai, tahunSekarang);

const statusSenioritas =
  masaKerja >= 2 ? "Mid-Level Developer" : "Junior Developer";

console.log("===INFORMASI PENGERMBANG===");
console.log("Nama Programmer :", namaProgrammer);
console.log("Pengalaman Kerja :", masaKerja, "tahun");
console.log("Kategori :", statusSenioritas);

console.log("\n===UJI PERBANDINGAN TIPE DATA===");
console.log("10 == '10' : ", 10 == "10");
console.log("10 === '10' :", 10 === "10");
console.log("Tipe 10 :", typeof 10);
console.log("Tipe '10' :", typeof "10");


