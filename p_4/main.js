const projects = [
  {
    id: 1,
    title: "UANG BENSIN",
    category: "POKOK",
    budget: 50000,
    completed: true
  },
  {
    id: 2,
    title: "UANG ROKOK",
    category: "POKOK",
    budget: 13000,
    completed: true
  },
  {
    id: 3,
    title: "UANG MAKAN",
    category: "OPSIONAL",
    budget: 13000,
    completed: false
  },
  {
    id: 4,
    title: "UANG KOUTA",
    category: "1 BULAN",
    budget: 40000,
    completed: false
  }
];

const formatRupiah = (angka) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(angka);
};

const updateStats = (dataList) => {
  const totalProjects = dataList.length;
  const totalBudget = dataList.reduce((acc, curr) => acc + curr.budget, 0);
  const completedCount = dataList.filter(item => item.completed).length;

  document.getElementById("stat-total-projects").textContent = totalProjects;
  document.getElementById("stat-total-budget").textContent = formatRupiah(totalBudget);
  document.getElementById("stat-completed-projects").textContent = completedCount;
};

const renderProjects = (filteredList) => {
  const container = document.getElementById("project-list");

  if (!container) return;

  if (filteredList.length === 0) {
    container.innerHTML = `
      <p style="text-align: center; color: #64748b; padding: 20px;">
        opsional.
      </p>
    `;
    return;
  }

  const htmlString = filteredList.map(proj => {
    const badgeClass = proj.completed ? "badge-success" : "badge-pending";
    const statusText = proj.completed ? "Selesai" : "Dalam Proses";

    return `
      <div class="project-card">
        <div class="project-info">
          <span class="project-category">${proj.category}</span>
          <h4>${proj.title}</h4>
          <p class="project-budget">${formatRupiah(proj.budget)}</p>
        </div>
        <div>
          <span class="badge ${badgeClass}">${statusText}</span>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = htmlString;
};

document.addEventListener("DOMContentLoaded", () => {
  renderProjects(projects);
  updateStats(projects);

  const filterButtons = document.querySelectorAll(".btn-filter");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterButtons.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");

      const selectedCategory = e.target.getAttribute("data-category");

      if (selectedCategory === "Semua") {
        renderProjects(projects);
      } else {
        const filtered = projects.filter(
          p => p.category === selectedCategory
        );

        renderProjects(filtered);
      }
    });
  });
});