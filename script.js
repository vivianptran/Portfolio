// ---------- Content: edit these to make it yours ----------
const PROJECTS = [
  {
    title: "Bloom Journal",
    category: "app",
    blurb: "A cozy mood-tracking app that grows a little garden as you journal.",
    details: "A mobile-first journaling app where each entry plants a flower. Built with a focus on gentle micro-interactions and offline-first storage.",
    tags: ["React Native", "SQLite", "Figma"],
    link: "#",
    color: "var(--pink-100)",
    art: "flower",
  },
  {
    title: "Café Finder",
    category: "web",
    blurb: "Find quiet, laptop-friendly cafés nearby — with vibe ratings.",
    details: "A web app that maps study-friendly cafés, with community ratings for noise, outlets and pastries. Includes a map view and saved favorites.",
    tags: ["Next.js", "Mapbox", "Supabase"],
    link: "#",
    color: "var(--white)",
    art: "cup",
  },
  {
    title: "Paper UI Kit",
    category: "design",
    blurb: "A playful component library inspired by scrapbooks and stationery.",
    details: "A design system of torn-paper cards, tape, stickers and doodles — available as a Figma kit and a small CSS library.",
    tags: ["Figma", "CSS", "Design Systems"],
    link: "#",
    color: "var(--pink-200)",
    art: "palette",
  },
  {
    title: "Study Buddy",
    category: "web",
    blurb: "A pomodoro timer with a tiny pet that cheers you on.",
    details: "Focus timer with a virtual companion that reacts to your streaks. Includes task lists, break reminders and lo-fi sounds.",
    tags: ["TypeScript", "Vite", "Web Audio"],
    link: "#",
    color: "var(--pink-50)",
    art: "clock",
  },
  {
    title: "Little Letters",
    category: "app",
    blurb: "Send hand-drawn postcards to friends, delivered with a delay.",
    details: "A slow-mail app: doodle a postcard and it arrives a few days later, just like real mail. Built for long-distance friendships.",
    tags: ["Swift", "Firebase", "Canvas"],
    link: "#",
    color: "var(--white)",
    art: "letter",
  },
  {
    title: "Brand Refresh",
    category: "design",
    blurb: "Visual identity for a local bakery — logo, packaging and menu.",
    details: "A full brand refresh for a neighborhood bakery including logo, color palette, packaging stickers and printed menus.",
    tags: ["Illustrator", "Branding", "Print"],
    link: "#",
    color: "var(--pink-100)",
    art: "heart",
  },
];

const SKILLS = [
  "HTML & CSS", "JavaScript", "TypeScript", "React", "Next.js", "Figma",
  "UI Design", "Accessibility", "Node.js", "Git", "Illustration", "Python",
];

const BUDDY_LINES = [
  "hi hi! welcome ♡",
  "I'm made of paper!",
  "Vivian made me :)",
  "go check out the projects!",
  "boop!",
  "try dragging the stickers ↓",
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
};
const artSvg = (key) => `<svg class="project-art" viewBox="0 0 120 120" aria-hidden="true">${ART[key]}</svg>`;

// ---------- Projects grid ----------
const grid = document.getElementById("projectGrid");
grid.innerHTML = PROJECTS.map((p, i) => {
  const tilt = [-1.5, 1.2, -0.8, 1.6, -1.2, 0.9][i % 6];
  return `
    <button class="project paper reveal" data-category="${p.category}" data-index="${i}"
      style="--paper:${p.color}; --tilt:${tilt}deg">
      <span class="tape tape-top"></span>
      ${artSvg(p.art)}
      <span>
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
      card.classList.toggle("hide", f !== "all" && card.dataset.category !== f);
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
    <h3>${p.title}</h3>
    <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    <p>${p.details}</p>
    <div style="text-align:center"><a class="btn btn-dark" href="${p.link}">View project →</a></div>`;
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
  const W = board.clientWidth;
  const H = board.clientHeight;
  const cols = W < 500 ? 2 : W < 800 ? 3 : 4;
  const rows = Math.ceil(SKILLS.length / cols);
  [...board.children].forEach((s, i) => {
    const c = i % cols;
    const r = Math.floor(i / cols);
    const cellW = W / cols;
    const cellH = (H - 40) / rows;
    const x = c * cellW + (cellW - s.offsetWidth) / 2 + (Math.random() * 30 - 15);
    const y = 20 + r * cellH + (cellH - s.offsetHeight) / 2 + (Math.random() * 16 - 8);
    s.style.left = `${Math.max(6, Math.min(W - s.offsetWidth - 6, x))}px`;
    s.style.top = `${Math.max(6, Math.min(H - s.offsetHeight - 6, y))}px`;
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
