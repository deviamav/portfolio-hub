const GITHUB_USER = "deviamav";

const repo = (slug) => `https://github.com/${GITHUB_USER}/${slug}`;

const APPS = [
  {
    name: "DeployOps",
    slug: "deployops",
    stack: "Next.js · Prisma · PostgreSQL · SSH · RBAC",
    desc: "Fleet deploy console for static sites — encrypted SSH, audit trail, live job logs.",
    demo: { type: "local", label: "Run locally" },
  },
  {
    name: "InsightBoard",
    slug: "insightboard",
    stack: "Next.js · Prisma · PostgreSQL · Recharts",
    desc: "Product analytics dashboard UI — synthetic sample data only.",
    demo: { type: "local", label: "Run locally" },
  },
  {
    name: "RasterKit",
    slug: "rasterkit",
    stack: "Python · Flask · STAC · Leaflet",
    desc: "Geo/raster converter — indices, exports, map, offline demo mode.",
    demo: { type: "local", label: "Run locally" },
  },
  {
    name: "PulseBot",
    slug: "pulsebot",
    stack: "Python · aiogram · PostgreSQL · Redis",
    desc: "Privacy-minded Telegram task bridge with invite codes and rate limits.",
    demo: { type: "local", label: "Run locally" },
  },
  {
    name: "FlowBoard",
    slug: "flowboard",
    stack: "Next.js · Express · Socket.IO · MinIO",
    desc: "Kanban for clients & teams — realtime board, files, Telegram alerts.",
    demo: { type: "local", label: "Run locally" },
  },
];

const SITES = [
  {
    name: "Aurora Academy",
    slug: "aurora-academy",
    stack: "Next.js · Three.js · i18n",
    desc: "Private school landing with orbital WebGL hero.",
    demo: { type: "repo", label: "Source" },
  },
  {
    name: "Lumen Atelier",
    slug: "lumen-atelier",
    stack: "Next.js · Three.js · i18n",
    desc: "Architecture studio — wireframe light, copper accents.",
    demo: { type: "repo", label: "Source" },
  },
  {
    name: "Northline Health",
    slug: "northline-health",
    stack: "Next.js · Three.js · i18n",
    desc: "Calm outpatient clinic with booking widget.",
    demo: { type: "repo", label: "Source" },
  },
  {
    name: "Vertex Ledger",
    slug: "vertex-ledger",
    stack: "Next.js · Three.js · i18n",
    desc: "B2B fintech close automation — node graph hero.",
    demo: { type: "repo", label: "Source" },
  },
];

function renderRow(item) {
  const el = document.createElement("article");
  el.className = "row";
  el.setAttribute("role", "listitem");

  const demo =
    item.demo.type === "local"
      ? `<span class="chip muted">${item.demo.label}</span>`
      : `<a class="chip primary" href="${repo(item.slug)}" rel="noopener noreferrer">${item.demo.label}</a>`;

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
  document.getElementById("apps-grid").replaceChildren();
  document.getElementById("sites-grid").replaceChildren();
  APPS.forEach((item) => document.getElementById("apps-grid").appendChild(renderRow(item)));
  SITES.forEach((item) => document.getElementById("sites-grid").appendChild(renderRow(item)));
}

mount();
