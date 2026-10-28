// ---------- Content: edit these to make it yours ----------
// categories: any of "ai", "web", "data" (used by the filter chips)
// link: optional — add a URL (e.g. a GitHub repo) to show a "View project" button
const PROJECTS = [
  {
    title: "Muse for Study",
    date: "Jul 2026",
    categories: ["ai", "web"],
    blurb: "An AI study companion that builds music playlists for your assignment and session length.",
    points: [
      "Wrote a detailed product spec and directed the Lovable AI platform to build a full-stack study companion app end-to-end",
      "Specified an AI playlist generator that uses Google Gemini to curate music by assignment type and study session duration",
      "Set up a Supabase backend for user authentication and saved playlists",
      "Led AI-assisted debugging and prompt refinement to fix issues like a broken YouTube playback integration",
    ],
    tags: ["Lovable", "Google Gemini", "Supabase", "Prompt Engineering"],
    link: "",
    color: "var(--pink-100)",
    art: "music",
  },
  {
    title: "AI Study-Music Recommender",
    date: "Jun 2026",
    categories: ["ai", "data"],
    blurb: "Fine-tuned Llama 3.2 with QLoRA to recommend study music, then tested it against the base model.",
    points: [
      "Sourced three Kaggle datasets for a three-person team project",
      "Fine-tuned Llama 3.2 3B Instruct with QLoRA in Google Colab and exported the merged model to GGUF",
      "Deployed the model locally with Ollama and wrote 10 evaluation prompts to compare it with the base model",
      "Scored results for accuracy, relevance and consistency using a structured rubric",
    ],
    tags: ["QLoRA", "Llama 3.2", "Ollama", "Google Colab", "Kaggle"],
    link: "",
    color: "var(--white)",
    art: "sparkle",
  },
  {
    title: "University Management System",
    date: "Aug 2023",
    categories: ["data"],
    blurb: "An object-oriented Python app for managing departments, students, faculty and enrollment.",
    points: [
      "Designed an object-oriented Python application for managing university operations and assignments",
      "Modeled departments, students and faculty with distinct attributes and behaviors",
      "Implemented student enrollment, GPA calculation and qualification verification",
      "Applied OOP principles: inheritance, polymorphism, encapsulation and abstraction",
    ],
    tags: ["Python", "OOP"],
    link: "",
    color: "var(--pink-200)",
    art: "cap",
  },
  {
    title: "Flower Advertising Website",
    date: "May 2025",
    categories: ["web"],
    blurb: "A responsive, accessible flower shop website, deployed to a live server.",
    points: [
      "Built the site in Adobe Dreamweaver with HTML, CSS and JavaScript",
      "Deployed it to a live server with FileZilla FTP for public access",
      "Applied responsive design so it works across devices and screen sizes",
      "Added accessibility features such as skip links and alt text",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Dreamweaver"],
    link: "",
    color: "var(--pink-50)",
    art: "flower",
  },
  {
    title: "FCPD Crime Analysis",
    date: "Jan 2025",
    categories: ["data"],
    blurb: "A Python search tool and per-ZIP statistics for Fairfax County Police crime reports.",
    points: [
      "Used Python to process FCPD crime report CSV files",
      "Structured and organized the data into a readable format",
      "Built a search tool to filter crimes by keyword, ZIP code and location",
      "Calculated frequency and percentage statistics for each ZIP code for comparison",
    ],
    tags: ["Python", "CSV", "Data Analysis"],
    link: "",
    color: "var(--white)",
    art: "chart",
  },
  {
    title: "Elementary School Database",
    date: "Dec 2024",
    categories: ["data"],
    blurb: "A relational MySQL database for student information and performance.",
    points: [
      "Designed a relational database using DBMS design principles, with an emphasis on cardinality rules",
      "Created an Entity-Relationship diagram to structure the data",
      "Implemented the main entities and relationship tables in MySQL",
      "Inserted and queried data to analyze student information and performance",
    ],
    tags: ["MySQL", "ER Diagrams", "Database Design"],
    link: "",
    color: "var(--pink-100)",
    art: "database",
  },
];

const SKILLS = [
  "Agentic AI", "Claude Code", "Prompt Engineering", "QLoRA Fine-Tuning", "Google Gemini", "Ollama",
  "Python", "Java", "JavaScript", "HTML & CSS", "Node.js", "SQL (MySQL)",
  "Supabase", "Git & GitHub", "Lovable", "Tableau", "ArcGIS Pro", "Photoshop",
];

const BUDDY_LINES = [
  "thanks for stopping by ♡",
  "I'm Vivian's paper sidekick!",
  "ask her about agentic AI!",
  "the skills below are draggable ↓",
  "boop!",
  "have a lovely day ✿",
];

// ---------- Paper-cutout illustrations ----------
const ART = {
  flower: `<g filter="url(#torn)"><circle cx="60" cy="38" r="18" fill="#f4a6bb"/><circle cx="82" cy="56" r="18" fill="#ee8aa6"/><circle cx="74" cy="82" r="18" fill="#f4a6bb"/><circle cx="46" cy="82" r="18" fill="#ee8aa6"/><circle cx="38" cy="56" r="18" fill="#f4a6bb"/><circle cx="60" cy="62" r="13" fill="#fffaf9"/><rect x="56" y="96" width="8" height="22" fill="#9bb59a"/></g>`,
  cup: `<g filter="url(#torn)"><path d="M24 48h64l-8 56H32Z" fill="#fffaf9" stroke="#3a2a2f" stroke-width="3"/><path d="M86 58c18 0 18 26 0 26" fill="none" stroke="#3a2a2f" stroke-width="5"/><rect x="28" y="56" width="56" height="18" fill="#f4a6bb"/></g><path d="M44 20q6 10 0 20M60 16q6 10 0 20M76 20q6 10 0 20" stroke="#3a2a2f" stroke-width="3" fill="none" stroke-linecap="round"/>`,
  palette: `<g filter="url(#torn)"><path d="M60 14c30 0 50 20 50 44 0 18-16 18-26 16s-14 8-8 18c6 12-6 18-18 18-30 0-46-24-46-50S30 14 60 14Z" fill="#fbf3ef" stroke="#3a2a2f" stroke-width="3"/></g><circle cx="40" cy="44" r="8" fill="#e86f92"/><circle cx="62" cy="34" r="8" fill="#f4a6bb"/><circle cx="84" cy="46" r="8" fill="#3a2a2f"/><circle cx="36" cy="70" r="8" fill="#f9c9d6"/>`,
  clock: `<g filter="url(#torn)"><circle cx="60" cy="64" r="44" fill="#fffaf9" stroke="#3a2a2f" stroke-width="3"/><rect x="50" y="10" width="20" height="12" fill="#ee8aa6"/></g><path d="M60 64V38M60 64l18 10" stroke="#3a2a2f" stroke-width="5" stroke-linecap="round"/><circle cx="60" cy="64" r="5" fill="#e86f92"/>`,
  letter: `<g filter="url(#torn)"><rect x="14" y="30" width="92" height="64" rx="3" fill="#fffaf9" stroke="#3a2a2f" stroke-width="3"/><path d="M14 32l46 34 46-34" fill="#f9c9d6" stroke="#3a2a2f" stroke-width="3"/></g><path d="M60 74c-5-7-14-3-10 5l10 9 10-9c4-8-5-12-10-5Z" fill="#e86f92"/><path d="M96 14l6 10M108 22l-10 4M84 12l2 10" stroke="#3a2a2f" stroke-width="3" stroke-linecap="round"/>`,
  heart: `<g filter="url(#torn)"><path d="M60 104C20 78 10 56 18 38c8-18 32-22 42-2 10-20 34-16 42 2 8 18-2 40-42 66Z" fill="#ee8aa6"/><path d="M40 42c-8 2-12 10-10 18" stroke="#fffaf9" stroke-width="5" fill="none" stroke-linecap="round"/></g>`,
  music: `<g filter="url(#torn)"><circle cx="38" cy="90" r="16" fill="#e86f92"/><circle cx="88" cy="80" r="16" fill="#e86f92"/><path d="M50 90V30l50-12v62" fill="none" stroke="#3a2a2f" stroke-width="7" stroke-linejoin="round"/><path d="M50 30l50-12v14l-50 12Z" fill="#3a2a2f"/></g><path d="M14 30l6 6M20 20l-1 9M104 100l8 4" stroke="#3a2a2f" stroke-width="3" stroke-linecap="round"/>`,
  sparkle: `<g filter="url(#torn)"><rect x="22" y="26" width="76" height="70" rx="12" fill="#fffaf9" stroke="#3a2a2f" stroke-width="3"/><path d="M60 38c3 14 8 19 22 22-14 3-19 8-22 22-3-14-8-19-22-22 14-3 19-8 22-22Z" fill="#e86f92"/></g><path d="M34 18v8M60 14v12M86 18v8M34 96v8M60 96v12M86 96v8" stroke="#3a2a2f" stroke-width="4" stroke-linecap="round"/><path d="M92 30l5-5" stroke="#f4a6bb" stroke-width="4" stroke-linecap="round"/>`,
  cap: `<g filter="url(#torn)"><path d="M60 22 112 46 60 70 8 46Z" fill="#3a2a2f"/><path d="M30 58v24c0 10 60 10 60 0V58L60 72Z" fill="#ee8aa6"/></g><path d="M100 50v30" stroke="#e86f92" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="84" r="6" fill="#e86f92"/>`,
  chart: `<g filter="url(#torn)"><rect x="14" y="20" width="92" height="80" rx="4" fill="#fffaf9" stroke="#3a2a2f" stroke-width="3"/><rect x="28" y="62" width="14" height="28" fill="#f4a6bb"/><rect x="50" y="44" width="14" height="46" fill="#e86f92"/><rect x="72" y="54" width="14" height="36" fill="#f9c9d6"/></g><circle cx="84" cy="36" r="13" fill="none" stroke="#3a2a2f" stroke-width="4"/><path d="M94 46l12 12" stroke="#3a2a2f" stroke-width="6" stroke-linecap="round"/>`,
  database: `<g filter="url(#torn)"><path d="M24 30v60c0 10 72 10 72 0V30" fill="#f4a6bb" stroke="#3a2a2f" stroke-width="3"/><ellipse cx="60" cy="30" rx="36" ry="10" fill="#fffaf9" stroke="#3a2a2f" stroke-width="3"/></g><path d="M24 52c0 10 72 10 72 0M24 72c0 10 72 10 72 0" fill="none" stroke="#3a2a2f" stroke-width="3"/><circle cx="84" cy="64" r="3" fill="#3a2a2f"/><circle cx="84" cy="84" r="3" fill="#3a2a2f"/>`,
};
const artSvg = (key) => `<svg class="project-art" viewBox="0 0 120 120" aria-hidden="true">${ART[key]}</svg>`;

// ---------- Projects grid ----------
const grid = document.getElementById("projectGrid");
grid.innerHTML = PROJECTS.map((p, i) => {
  const tilt = [-1.5, 1.2, -0.8, 1.6, -1.2, 0.9][i % 6];
  return `
    <button class="project paper reveal" data-category="${p.categories.join(" ")}" data-index="${i}"
      style="--paper:${p.color}; --tilt:${tilt}deg">
      <span class="tape tape-top"></span>
      ${artSvg(p.art)}
      <span>
        <span class="p-date">${p.date}</span>
        <span class="p-title">${p.title}</span>
        <span class="p-desc">${p.blurb}</span>
        <span class="more">peek inside →</span>
      </span>
    </button>`;
}).join("");

// Filters
document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => {
      c.classList.toggle("active", c === chip);
      c.setAttribute("aria-selected", c === chip);
    });
    const f = chip.dataset.filter;
    grid.querySelectorAll(".project").forEach((card) => {
      card.classList.toggle("hide", f !== "all" && !card.dataset.category.split(" ").includes(f));
    });
  });
});

// Modal
const modal = document.getElementById("projectModal");
const modalBody = modal.querySelector(".modal-body");
grid.addEventListener("click", (e) => {
  const card = e.target.closest(".project");
  if (!card) return;
  const p = PROJECTS[card.dataset.index];
  modalBody.innerHTML = `
    ${artSvg(p.art)}
    <p class="modal-date">${p.date}</p>
    <h3>${p.title}</h3>
    <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    <ul class="points">${p.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
    ${p.link ? `<div style="text-align:center"><a class="btn btn-primary" href="${p.link}" target="_blank" rel="noopener">View project →</a></div>` : ""}`;
  modal.showModal();
});
modal.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

// ---------- Buddy: eyes follow cursor, click to chat ----------
const buddy = document.querySelector(".buddy");
const bubble = document.querySelector(".bubble");
const eyes = [...document.querySelectorAll("[data-eye]")];
let lineIdx = 0;

window.addEventListener("pointermove", (e) => {
  eyes.forEach((eye) => {
    const white = eye.querySelector(".eye-white");
    const pupil = eye.querySelector(".pupil");
    const r = white.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const angle = Math.atan2(dy, dx);
    const dist = Math.min(14, Math.hypot(dx, dy) / 20);
    pupil.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist - 5}px)`;
  });
});

function blink() {
  eyes.forEach((eye) => {
    eye.classList.remove("blink");
    void eye.getBBox();
    eye.classList.add("blink");
  });
}
(function blinkLoop() {
  setTimeout(() => { blink(); blinkLoop(); }, 2500 + Math.random() * 3000);
})();

buddy.addEventListener("click", (e) => {
  buddy.classList.remove("squish");
  void buddy.getBBox();
  buddy.classList.add("squish", "happy");
  blink();
  bubble.textContent = BUDDY_LINES[lineIdx++ % BUDDY_LINES.length];
  bubble.classList.remove("pop");
  void bubble.offsetWidth;
  bubble.classList.add("pop");
  heartBurst(e.clientX, e.clientY, 8);
  clearTimeout(buddy._t);
  buddy._t = setTimeout(() => buddy.classList.remove("happy"), 1200);
});

// ---------- Heart confetti ----------
function heartBurst(x, y, n = 10) {
  for (let i = 0; i < n; i++) {
    const h = document.createElement("span");
    h.className = "heart-bit";
    h.textContent = ["♡", "♥", "✿", "✦"][i % 4];
    const a = (Math.PI * 2 * i) / n + Math.random() * 0.5;
    const d = 50 + Math.random() * 60;
    h.style.left = `${x}px`;
    h.style.top = `${y}px`;
    h.style.setProperty("--dx", `${Math.cos(a) * d}px`);
    h.style.setProperty("--dy", `${Math.sin(a) * d - 30}px`);
    h.style.setProperty("--r", `${Math.random() * 120 - 60}deg`);
    document.body.appendChild(h);
    h.addEventListener("animationend", () => h.remove());
  }
}

// ---------- Draggable stickers ----------
const board = document.getElementById("stickerBoard");
const styles = ["", "s-pink", "s-rose", "s-blush"];
SKILLS.forEach((name, i) => {
  const s = document.createElement("div");
  s.className = `sticker ${styles[i % styles.length]}`;
  s.textContent = name;
  s.style.rotate = `${Math.random() * 16 - 8}deg`;
  board.appendChild(s);
});

function scatterStickers() {
  // Flow stickers into rows that fit the board, then spread each row out with a little jitter
  const W = board.clientWidth;
  const pad = 20, gapX = 18, rowH = 64;
  const rows = [[]];
  let x = pad;
  [...board.children].forEach((s) => {
    const w = s.offsetWidth;
    if (x + w > W - pad && rows.at(-1).length) { rows.push([]); x = pad; }
    rows.at(-1).push(s);
    x += w + gapX;
  });
  board.style.height = `${Math.max(380, rows.length * rowH + pad * 2)}px`;
  const top = (board.clientHeight - rows.length * rowH) / 2;
  rows.forEach((row, r) => {
    const used = row.reduce((t, s) => t + s.offsetWidth, 0);
    const space = (W - pad * 2 - used) / (row.length + 1);
    let cx = pad + space;
    row.forEach((s) => {
      const jx = Math.random() * Math.min(12, space / 2) - Math.min(6, space / 4);
      s.style.left = `${Math.max(4, Math.min(W - s.offsetWidth - 4, cx + jx))}px`;
      s.style.top = `${top + r * rowH + 10 + Math.random() * 12 - 6}px`;
      cx += s.offsetWidth + space;
    });
  });
}
document.fonts.ready.then(scatterStickers);
window.addEventListener("resize", scatterStickers);

let zTop = 1;
board.addEventListener("pointerdown", (e) => {
  const s = e.target.closest(".sticker");
  if (!s) return;
  e.preventDefault();
  s.setPointerCapture(e.pointerId);
  s.classList.add("dragging");
  s.style.zIndex = ++zTop;
  const startX = e.clientX - s.offsetLeft;
  const startY = e.clientY - s.offsetTop;
  const move = (ev) => {
    const x = Math.max(0, Math.min(board.clientWidth - s.offsetWidth, ev.clientX - startX));
    const y = Math.max(0, Math.min(board.clientHeight - s.offsetHeight, ev.clientY - startY));
    s.style.left = `${x}px`;
    s.style.top = `${y}px`;
  };
  const up = () => {
    s.classList.remove("dragging");
    s.style.rotate = `${Math.random() * 16 - 8}deg`;
    s.removeEventListener("pointermove", move);
    s.removeEventListener("pointerup", up);
  };
  s.addEventListener("pointermove", move);
  s.addEventListener("pointerup", up);
});

// ---------- Copy email ----------
const copyBtn = document.getElementById("copyEmail");
copyBtn.addEventListener("click", async (e) => {
  const label = copyBtn.querySelector(".btn-label");
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.email);
    label.textContent = "Copied! ♡";
  } catch {
    label.textContent = copyBtn.dataset.email;
  }
  heartBurst(e.clientX, e.clientY, 12);
  setTimeout(() => (label.textContent = "Copy my email"), 2200);
});

// ---------- Scroll reveal + active nav ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      en.target.classList.add("in");
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const navLinks = [...document.querySelectorAll(".nav-links a")];
const navIO = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("section[id]").forEach((s) => navIO.observe(s));

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
