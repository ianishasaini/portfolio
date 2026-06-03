const skillsData = {
  technical: [
    ["SQL", 85, "SQL"], ["Advanced Excel", 90, "XL"],  ["Power BI", 70, "BI"], ["Python", 40, "PY"],
    ["Statistics", 80, "ST"],
    ["Business Analytics", 86, "BA"]
  ],
  tools: [
    ["MySQL", 86, "MY"],
    ["Jupyter Notebook", 76, "JN"], ["GitHub", 70, "GH"], ["VS Code", 78, "VS"], ["Google Sheets", 84, "GS"]
  ],
  soft: [
    ["Analytical Thinking", 92, "AT"], ["Communication", 88, "CM"], ["Stakeholder Management", 82, "SM"],
    ["Team Leadership", 86, "TL"], ["Presentation Skills", 88, "PR"], ["Problem Solving", 90, "PS"]
  ]
};



const projects = [
  
  {
    id: 1,
    title: "Credit Card Fraud Risk Analysis",
    category: "sql",
    thumbnail: "Images/Fraud_pj1.png",
    description: "Analyzing fraudulent credit card transactions to develop an enterprise-level fraud intelligence and risk monitoring system using MySQL and Power BI.",
    tech: ["SQL", "MySQL", "PowerBI", "DAX", "Data Modelling"],
    insight: "Identified ₹35.4L+ fraud exposure across 286 fraudulent transactions. Card-Not-Present (CNP) fraud emerged as the highest-loss fraud category, contributing ~₹8.8L in fraud value. ICICI Bank recorded the highest fraud amount (~₹4.9L), while Andhra Bank reported the highest fraud frequency (41 cases). Zomato was the most fraud-exposed merchant with 37 fraud cases and ~₹4L in losses. Discovered that 42%+ of fraud losses originated from transactions classified as Low Risk, exposing weaknesses in traditional fraud scoring systems.",
    impact: "Helped convert transactional data into business-ready sales insights.",
    overview: "Developed a Credit Card Fraud Analytics Dashboard using SQL and Power BI to identify fraud patterns, quantify financial exposure, and support fraud monitoring decisions. Analyzed 1,000+ transactions across banks, merchants, card networks, and geographies.",
    problem: "Traditional fraud detection systems often miss sophisticated fraud activities. The objective was to identify high-risk fraud scenarios, evaluate risk classification effectiveness, and improve fraud prioritization using data analytics.",
    dataset: "1,000+ Credit Card Transactions | 286 Fraud Cases | Multiple Banks, Merchants & Card Networks",
    queries: "Fraud KPI Analysis • Trend Analysis • Merchant & Bank Risk Analysis • Geographic Analysis • Card Network Analysis • Fraud Severity Index (FSI) • Anomaly Detection • SQL Window Functions",
    findings: ["Identified ₹35.4L+ fraud exposure across 286 fraudulent transactions.", " Card-Not-Present (CNP) fraud emerged as the highest-loss fraud category, contributing ~₹8.8L in fraud value.", "ICICI Bank recorded the highest fraud amount (~₹4.9L), while Andhra Bank reported the highest fraud frequency (41 cases).", "Zomato was the most fraud-exposed merchant with 37 fraud cases and ~₹4L in losses.", "Discovered that 42%+ of fraud losses originated from transactions classified as Low Risk, exposing weaknesses in traditional fraud scoring systems."],
    learnings: ["Strengthened skills in SQL analytics, Power BI dashboard development, fraud risk assessment, KPI design, data modeling, and translating transaction-level data into actionable business insights."]
  },
  {
    id: 2,
    title: "Food Delivery Business Analysis ",
    category: "sql",
    thumbnail: "Images/Food_pj2.png",
    description: "This project focuses on analyzing food delivery platform data to uncover customer ordering patterns, restaurant performance, revenue drivers, and delivery efficiency.",
    tech: ["SQL", "MySQL", "Data Modeling", "Relational Database Design ", "Business Analytics"],
    insight: "Revealed underperforming regions and month-wise revenue trends.",
    impact: "Enabled faster management reporting and performance monitoring.",
    overview: "Analyzed customer orders, restaurant performance, and delivery operations using SQL. Built analytical queries to identify revenue drivers, customer behavior patterns, peak demand periods, and operational performance metrics, supporting data-driven business decision-making.",
    problem: "Food delivery companies generate thousands of transactions daily. Extracting insights from this data is essential for improving customer experience, restaurant partnerships, and operational efficiency.",
    dataset: "5 Relational Tables | Customers, Orders, Restaurants, Riders & Deliveries | Food Delivery Platform Data",
    queries: "Customer Analysis • Restaurant Performance Analysis • Revenue Analysis • Order Trend Analysis • Delivery Operations Analysis • Customer Segmentation • Ranking Analysis • Business KPI Reporting",
    findings: ["Identified the highest revenue-generating restaurants and their contribution to overall platform sales.","Analyzed customer spending and order frequency to uncover high-value and repeat customers.","Discovered peak ordering hours and demand patterns, helping optimize restaurant and delivery operations.","Evaluated city-wise revenue performance to identify high-performing markets and growth opportunities.","Assessed delivery efficiency and rider performance through delivery status and operational metrics."],
    learnings: ["Strengthened expertise in database design, SQL analytics, multi-table joins, CTEs, window functions, business KPI analysis, customer segmentation, and translating transactional data into business insights."]
  },
  {
    id: 3,
    title: "E-Commerce Sales Analysis",
    category: "sql",
    thumbnail: "Images/amazon_pj3.png",
    description: "Analysed over 20,000 e-commerce sales transactions to uncover customer purchasing behavior, product performance, seller contribution, payment efficiency, and operational trends.",
    tech: ["SQL", "MySQL", "Relational Database Design"],
    insight: "Identified departments with higher attrition and lower performance concentration.",
    impact: "Supported HR decision-making using visual reporting.",
    overview: "Analyzed 20,000+ e-commerce transactions across customers, products, sellers, and orders to uncover sales trends, customer behavior, product performance, and operational insights. Leveraged advanced SQL techniques including joins, CTEs, subqueries, and window functions to support data-driven business decisions.",
    problem: "E-commerce businesses generate massive amounts of transactional data daily. Without proper analysis, valuable opportunities and operational issues often remain hidden.",
    dataset: "20,000+ E-commerce Transactions | 9 Relational Tables | Customers, Orders, Products, Sellers, Payments & Inventory Data",
    queries: "Customer Analytics • Product Performance Analysis • Revenue Analysis • Monthly Sales Trend Analysis • Seller Performance Analysis • Inventory Monitoring • Shipping Analysis • Payment Analysis • Customer Segmentation",
    findings: ["Analyzed 20,000+ sales records to uncover customer purchasing behavior, product performance, and revenue trends." ,"Identified top-performing products, categories, and sellers contributing the highest revenue." ,"Performed Customer Lifetime Value (CLTV) and purchase frequency analysis to identify high-value customers." ,"Evaluated shipping performance, payment success rates, and inventory levels to uncover operational bottlenecks." ,"Generated actionable insights for revenue growth, customer retention, inventory planning, and seller performance optimization."],
    learnings: ["Strengthened expertise in database design, complex joins, subqueries, CTEs, window functions, customer analytics, revenue analysis, and translating business questions into SQL-driven insights."]
  },
  {
    id: 4,
    title: "Pizza Sales Performance Analysis",
    category: "sql",
    thumbnail: "Images/Pizza_pj4.png",
    description: "Analyzed 48,000+ pizza sales records to uncover revenue trends, customer ordering patterns, product performance, and demand seasonality.",
    tech: ["SQL", "MySQL", "Power BI", "DAX", "Data Modeling"],
    insight: "Segmented customers based on spending and frequency patterns.",
    impact: "Improved targeting logic for marketing campaigns.",
    overview: "Analyzed 48,000+ pizza sales transactions using SQL and Power BI to uncover revenue trends, customer purchasing patterns, and product performance. Built KPI-driven insights to support menu optimization and business decision-making.",
    problem: "Restaurant businesses generate large volumes of sales data but often lack visibility into key revenue drivers and customer preferences. This project aimed to identify top-performing products, sales trends, and operational opportunities to improve profitability and customer satisfaction.",
    dataset: "48,000+ Pizza Sales Records | 21,000+ Orders | 32 Pizza Varieties | 4 Categories & Multiple Sizes",
    queries: "Sales KPI Analysis • Revenue Analysis • Daily & Monthly Order Trends • Product Performance Analysis • Category Analysis • Pizza Size Analysis • Best & Worst Seller Analysis • Customer Traffic Analysis",
    findings: ["Analyzed 48K+ sales transactions generating over $800K in revenue.", "Identified peak demand periods, with weekends and evening hours driving the highest order volumes.", "Discovered the top-performing pizza categories, sizes, and products contributing the majority of sales revenue.", "Evaluated sales contribution by pizza size and category to support menu optimization and pricing decisions.", "Identified best-selling and underperforming pizzas to improve inventory planning and promotional strategies."],
    learnings: ["Strengthened expertise in SQL querying, aggregations, joins, CTEs, KPI reporting, trend analysis, customer behavior analysis, and converting transactional sales data into business insights."]
  }
];

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

window.addEventListener("load", () => {
  qs("#loader").classList.add("hidden");
  renderSkills("technical");
  renderProjects(projects);
  animateHeroChart();
  qs("#year").textContent = new Date().getFullYear();
});

qs("#menuToggle").addEventListener("click", () => {
  qs("#navLinks").classList.toggle("active");
});

qsa(".nav-links a").forEach(link => {
  link.addEventListener("click", () => qs("#navLinks").classList.remove("active"));
});



function renderSkills(type) {
  const container = qs("#skillsContainer");
  container.innerHTML = skillsData[type].map(([name, value, icon]) => `
    <article class="skill-card">
      <div class="skill-icon">${icon}</div>
      <h3>${name}</h3>
      <div class="progress-bar" aria-label="${name} proficiency">
        <div class="progress-fill" data-width="${value}%"></div>
      </div>
    </article>
  `).join("");

  setTimeout(() => {
    qsa(".progress-fill").forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }, 100);
}

qsa(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    qsa(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderSkills(btn.dataset.skillTab);
  });
});

function renderProjects(list) {
  const grid = qs("#projectGrid");
  grid.innerHTML = list.map(project => `
    <article class="project-card" tabindex="0" role="button" aria-label="Open ${project.title}" data-project-id="${project.id}">
      <div class="project-thumb">
    <img src="${project.thumbnail}" alt="${project.title}">
</div>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">${project.tech.map(t => `<span>${t}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");

  qsa(".project-card").forEach(card => {
    card.addEventListener("click", () => openProjectModal(Number(card.dataset.projectId)));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") openProjectModal(Number(card.dataset.projectId));
    });
  });
}

function filterProjects() {
  const activeFilter = qs(".filter-btn.active").dataset.filter;
  const search = qs("#projectSearch").value.toLowerCase();

  const filtered = projects.filter(project => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter;
    const matchesSearch = `${project.title} ${project.description} ${project.tech.join(" ")}`.toLowerCase().includes(search);
    return matchesFilter && matchesSearch;
  });

  renderProjects(filtered);
}

qsa(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    qsa(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filterProjects();
  });
});

qs("#projectSearch").addEventListener("input", filterProjects);

function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  const modalBody = qs("#modalBody");

  modalBody.innerHTML = `
    <h2 id="modalTitle">${project.title}</h2>
    <p>${project.description}</p>

    <div class="modal-section"><h4>Project Overview</h4><p>${project.overview}</p></div>
    <div class="modal-section"><h4>Problem Statement</h4><p>${project.problem}</p></div>
    <div class="modal-section"><h4>Dataset Information</h4><p>${project.dataset}</p></div>

    <div class="modal-section"><h4>SQL / Analysis Performed</h4><p>${project.queries}</p></div>
    <div class="modal-section"><h4>Key Findings</h4><ul>${project.findings.map(item => `<li>${item}</li>`).join("")}</ul></div>
    <div class="modal-section"><h4>Learnings</h4><ul>${project.learnings.map(item => `<li>${item}</li>`).join("")}</ul></div>
   

    <div class="modal-links">
      <a class="btn primary" href="https://github.com/anisha-projects?tab=repositories" target="_blank" rel="noopener">GitHub Repository</a>
    </div>
  `;

  qs("#projectModal").classList.add("active");
  qs("#projectModal").setAttribute("aria-hidden", "false");
}

qsa("[data-close-modal]").forEach(item => {
  item.addEventListener("click", closeModal);
});

function closeModal() {
  qs("#projectModal").classList.remove("active");
  qs("#projectModal").setAttribute("aria-hidden", "true");
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      if (entry.target.classList.contains("stats-grid")) animateCounters();
    }
  });
}, { threshold: 0.14 });

qsa(".reveal").forEach(el => observer.observe(el));

let countersAnimated = false;
function animateCounters() {
  if (countersAnimated) return;
  countersAnimated = true;

  qsa("[data-count]").forEach(counter => {
    const target = Number(counter.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target + "+";
        clearInterval(interval);
      } else {
        counter.textContent = current;
      }
    }, 35);
  });
}

function animateHeroChart() {
  const canvas = qs("#heroChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const points = [30, 58, 46, 72, 61, 86, 78, 98];
  const width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  const height = canvas.height = 120 * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

  ctx.clearRect(0, 0, width, height);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#E63946";
  ctx.beginPath();

  points.forEach((point, index) => {
    const x = (index / (points.length - 1)) * canvas.offsetWidth;
    const y = 105 - point;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  ctx.stroke();

  points.forEach((point, index) => {
    const x = (index / (points.length - 1)) * canvas.offsetWidth;
    const y = 105 - point;
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  });
}

window.addEventListener("resize", animateHeroChart);

qs("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = qs("#name");
  const email = qs("#email");
  const subject = qs("#subject");
  const message = qs("#message");
  const fields = [name, email, subject, message];

  let isValid = true;
  fields.forEach(field => {
    const error = field.parentElement.querySelector(".error");
    error.textContent = "";
    if (!field.value.trim()) {
      error.textContent = "This field is required.";
      isValid = false;
    }
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value && !emailRegex.test(email.value)) {
    email.parentElement.querySelector(".error").textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (!isValid) return;

  qs("#successMessage").classList.add("show");

  const mailto = `mailto:anishasaini.contact@gmail.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(
    `Name: ${name.value}\nEmail: ${email.value}\n\n${message.value}`
  )}`;

  setTimeout(() => {
    window.location.href = mailto;
    qs("#contactForm").reset();
  }, 600);
});
