const projects = [
  {
    id: 1,
    title: "UANG BENSIN",
    category: "POKOK",
    budget: 50000,
    completed: true,
  },
  {
    id: 2,
    title: "UANG ROKOK",
    category: "POKOK",
    budget: 13000,
    completed: true,
  },
  {
    id: 3,
    title: "UANG MAKAN",
    category: "OPSIONAL",
    budget: 13000,
    completed: false,
  },
  {
    id: 4,
    title: "UANG KOUTA",
    category: "1 BULAN",
    budget: 40000,
    completed: false,
  },
];

const formatRupiah = (angka) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(angka);
};
console.log("=== 1. SEMUA DAFTAR KEBUTUHAN(forEach) ===");
projects.forEach((proj, idx) => {
  const status = proj.completed ? "[SELESAI]" : "[PROSES]";
  console.log(
    `${idx + 1}. ${status} ${proj.title} (${proj.category}) - ${formatRupiah(proj.budget)}`,
  );
});
console.log("\n=== 2. PROYEK KATEGORI WEB APP (filter) ===");
const webProjects = projects.filter((proj) => proj.category === "Web App");
console.log(webProjects);
console.log("\n=== 3. RINGKASAN NAMA & ANGGARAN (map) ===");
const ringkasanProyek = projects.map((proj) => ({
  nama: proj.title,
  status: proj.completed ? "Selesai" : "Proses",
  biaya: formatRupiah(proj.budget),
}));
console.table(ringkasanProyek);
console.log("\n=== 4. TOTAL ANGGARAN (reduce) ===");
const totalAnggaran = projects.reduce((total, proj) => total + proj.budget, 0);
console.log(
  `Total Estimasi Anggaran Portofolio: ${formatRupiah(totalAnggaran)}`,
);
const totalSelesai = projects
  .filter((proj) => proj.completed)
  .reduce((total, proj) => total + proj.budget, 0);
console.log(`Total Anggaran Proyek Selesai: ${formatRupiah(totalSelesai)}`);