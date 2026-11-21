const GITHUB_USER = "deviamav";

const repo = (slug) => `https://github.com/${GITHUB_USER}/${slug}`;

const APPS = [
  {
    name: "DeployOps",
    slug: "deployops",
    stack: "Next.js · Prisma · PostgreSQL · SSH · RBAC",
    desc: "Multi-market static deploy console — encrypted SSH, audit trail, live job logs.",
    demo: { type: "local", label: "Run locally" },
  },
  {
    name: "InsightBoard",
    slug: "insightboard",
    stack: "Next.js · Prisma · PostgreSQL · Recharts",
    desc: "Synthetic analytics & funnel demo for product/ops — sample data only.",
    demo: { type: "local", label: "Run locally" },
  },
  {
    name: "RasterKit",
    slug: "rasterkit",
    stack: "Python · Flask · STAC · Leaflet",
    desc: "Universal geo/raster converter — indices, exports, map, offline demo mode.",
    demo: { type: "local", label: "Run locally" },
  },
  {
    name: "PulseBot",
    slug: "pulsebot",
    stack: "Python · aiogram · PostgreSQL · Redis",
    desc: "Anonymous Telegram task bridge with invite codes and rate limits.",
    demo: { type: "local", label: "Run locally" },
  },
  {
    name: "FlowBoard",
    slug: "flowboard",
    stack: "Next.js · Express · Socket.IO · MinIO",
    desc: "Kanban task manager with object storage and Telegram notifications.",
    demo: { type: "local", label: "Run locally" },
  },
];

const SITES = [
  {
    name: "Aurora Academy",
    slug: "aurora-academy",
    stack: "Next.js · Three.js · i18n",
    desc: "Private school landing with orbital WebGL hero.",
    demo: { type: "pages", href: `https://${GITHUB_USER}.github.io/aurora-academy/`, label: "Live demo" },
  },
  {
    name: "Lumen Atelier",
    slug: "lumen-atelier",
    stack: "Next.js · Three.js · i18n",
    desc: "Architecture studio — wireframe light, copper accents.",
    demo: { type: "pages", href: `https://${GITHUB_USER}.github.io/lumen-atelier/`, label: "Live demo" },
  },
  {
    name: "Northline Health",
    slug: "northline-health",
    stack: "Next.js · Three.js · i18n",
    desc: "Calm outpatient clinic with booking widget.",
    demo: { type: "pages", href: `https://${GITHUB_USER}.github.io/northline-health/`, label: "Live demo" },
  },
  {
    name: "Vertex Ledger",
    slug: "vertex-ledger",
    stack: "Next.js · Three.js · i18n",
    desc: "B2B fintech close automation — node graph hero.",
    demo: { type: "pages", href: `https://${GITHUB_USER}.github.io/vertex-ledger/`, label: "Live demo" },
  },
];

function renderRow(item) {
  const el = document.createElement("article");
  el.className = "row";
  el.setAttribute("role", "listitem");

  let demo;
  if (item.demo.type === "pages") {
    demo = `<a class="chip primary" href="${item.demo.href}" rel="noopener noreferrer">${item.demo.label}</a>`;
  } else if (item.demo.type === "path") {
    demo = `<a class="chip primary" href="${item.demo.href}">${item.demo.label}</a>`;
  } else {
    demo = `<span class="chip muted">${item.demo.label}</span>`;
  }

  el.innerHTML = `
    <div>
      <h3 class="row-title">${item.name}</h3>
      <p class="row-stack">${item.stack}</p>
    </div>
    <p class="row-desc">${item.desc}</p>
    <div class="row-actions">
      <a class="chip" href="${repo(item.slug)}" rel="noopener noreferrer">GitHub</a>
      ${demo}
      <a class="chip" href="${repo(item.slug)}#readme" rel="noopener noreferrer">README</a>
    </div>
  `;
  return el;
}

function mount() {
  const appsGrid = document.getElementById("apps-grid");
  const sitesGrid = document.getElementById("sites-grid");
  APPS.forEach((item) => appsGrid.appendChild(renderRow(item)));
  SITES.forEach((item) => sitesGrid.appendChild(renderRow(item)));
}

mount();
