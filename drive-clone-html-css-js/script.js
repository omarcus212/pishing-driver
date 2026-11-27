/* ===== Ícones (Material, mesmos do Drive) ===== */
const P = {
  search:"M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
  tune:"M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z",
  help:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
  gear:"M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z",
  apps:"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z",
  plus:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
  menu:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
  close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
  left:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.59L10.83 12z",
  right:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
  download:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",
  print:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z",
  full:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",
  minus:"M19 13H5v-2h14v2z",
  zoom:"M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z",
  trash:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
  link:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z",
  more:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
  personAdd:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  move:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10v-3h-4v-2h4V8l4 4-4 4z",
  home:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
  projects:"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z",
  drive:"M19 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H5V4h14v16zM12 7l-3.5 6h7zM7 15h10v2H7z",
  laptop:"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z",
  people:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  clock:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
  star:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",
  spam:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z",
  cloud:"M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z",
  folder:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z",
  folderUser:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z",
  comment:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-9-4h2v2h-2v-2zm0-6h2v4h-2V6z",
  gemini:"M12 2c.4 5.6 4.4 9.6 10 10-5.6.4-9.6 4.4-10 10-.4-5.6-4.4-9.6-10-10 5.6-.4 9.6-4.4 10-10z",
  chevronDown:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z",
  share:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"
};
const svg = (n, s = 20, c = "currentColor") =>
  `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="${c}" aria-hidden="true"><path d="${P[n]}"/></svg>`;

/* Ícones coloridos de arquivo (estilo Drive) */
const FILE_ICONS = {
  image:`<svg viewBox="0 0 24 24" class="drive-file-icon"><rect x="3" y="3" width="18" height="18" rx="2" fill="#ea4335"/><path fill="#fff" d="M6 17l3.5-4.5 2.5 3 2-2.5L18 17z"/><circle cx="15.5" cy="8.5" r="1.3" fill="#fff"/></svg>`,
  video:`<svg viewBox="0 0 24 24" class="drive-file-icon"><rect x="3" y="4" width="18" height="16" rx="2" fill="#ea4335"/><path fill="#fff" d="M3 7h18v2.2H3zM5 4l2 3H5zm4 0l2 3H9zm4 0l2 3h-2zm4 0l2 3h-2z"/></svg>`,
  pdf:`<svg viewBox="0 0 24 24" class="drive-file-icon"><rect x="3" y="3" width="18" height="18" rx="2" fill="#ea4335"/><text x="12" y="15" font-size="7.5" font-weight="700" fill="#fff" text-anchor="middle" font-family="Arial">PDF</text></svg>`,
  zip:`<svg viewBox="0 0 24 24" class="drive-file-icon"><rect x="3" y="3" width="18" height="18" rx="2" fill="#9aa0a6"/><path fill="#fff" d="M11 5h2v2h-2zm2 2h-2v2h2zm-2 2h2v2h-2zm2 2h-2v2h2zM10 14h4v4h-4z"/></svg>`,
  folder:`<svg viewBox="0 0 24 24" class="drive-file-icon"><path fill="#9aa0a6" d="${P.folder}"/></svg>`
};
const SHARED = `<span class="shared" title="Compartilhado">${svg("people", 16, "#c4c7c5")}</span>`;

/* ===== Dados (iguais à lista do Drive real) ===== */
const IMG = "assets/carro.jpg"; // coloque suas fotos em /assets e troque o src de cada item
const mk = (name, reason) => ({ name, type: "image", reason, owner: "eu", location: "Fotos antigas", locType: "folder", src: IMG });
const files = [
  mk("IMG_8116.PNG", "Você abriu · 21 de nov."),
  mk("IMG_8118.PNG", "Você abriu · 21 de nov."),
  mk("IMG_9652.PNG", "Você criou · 26 de fev."),
  mk("IMG_9653.PNG", "Você abriu · 26 de fev.")
];
files.forEach((f, i) => f.id = i);

let visibleCount = 10, currentSection = "Pessoal", selectedId = null, zoom = 1, viewerIndex = -1;
const isMobile = () => matchMedia("(max-width:700px)").matches;
const $ = s => document.querySelector(s);
const rows = $("#fileRows"), grid = $("#gridFiles"), search = $("#searchInput");
const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800"><rect width="600" height="800" fill="#3c4043"/><text x="300" y="410" fill="#9aa0a6" font-size="26" text-anchor="middle" font-family="Arial">Adicione a foto em /assets</text></svg>`);

const iconFor = t => FILE_ICONS[t] || FILE_ICONS.image;
const escapeHtml = s => s.replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const filteredFiles = () => { const q = search.value.trim().toLowerCase(); return files.filter(f => (f.name + " " + f.location).toLowerCase().includes(q)); };
const ownerAvatar = f => f.id === selectedId ? `<span class="mini-avatar photo">E</span>` : `<span class="mini-avatar">E</span>`;

function render() {
  const data = filteredFiles(), shown = data.slice(0, visibleCount), isGrid = grid.classList.contains("active-grid");
  rows.innerHTML = ""; grid.innerHTML = "";
  $("#emptyState").classList.toggle("hidden", data.length !== 0);
  $("#tableWrap").classList.toggle("hidden", !data.length || isGrid);
  $("#moreButton").classList.toggle("hidden", data.length <= visibleCount || isGrid);
  shown.forEach(f => {
    const sel = f.id === selectedId ? " selected" : "";
    const row = document.createElement("div");
    row.className = "file-row" + sel;
    row.innerHTML = `
      <div class="file-name"><span class="file-type">${iconFor(f.type)}</span><strong>${escapeHtml(f.name)}</strong>${f.shared ? SHARED : ""}</div>
      <div class="file-meta">${f.reason}</div>
      <div class="owner">${ownerAvatar(f)}${f.owner}</div>
      <div class="location"><span class="location-icon">${svg(f.locType, 18)}</span><span>${escapeHtml(f.location)}</span></div>
      <div class="file-sub">${f.reason} · ${escapeHtml(f.location)}</div>
      <button class="row-menu" title="Mais ações">${svg("more", 20)}</button>`;
    row.addEventListener("click", e => { e.stopPropagation(); isMobile() ? open(f) : select(f.id); });
    row.addEventListener("dblclick", () => open(f));
    row.querySelector(".row-menu").addEventListener("click", e => { e.stopPropagation(); toast(`Ações de ${f.name}: abrir, renomear ou remover.`); });
    rows.appendChild(row);

    const card = document.createElement("div");
    card.className = "grid-card" + sel;
    card.innerHTML = `<div class="file-name"><span class="file-type">${iconFor(f.type)}</span><strong>${escapeHtml(f.name)}</strong></div><p>${escapeHtml(f.location)} · ${f.reason}</p>`;
    card.addEventListener("click", e => { e.stopPropagation(); isMobile() ? open(f) : select(f.id); });
    card.addEventListener("dblclick", () => open(f));
    grid.appendChild(card);
  });
  updateSelectionUI();
}

/* ===== Seleção (barra + trilha de navegação) ===== */
function select(id) { selectedId = id; render(); }
function deselect() { if (selectedId === null) return; selectedId = null; render(); }
function updateSelectionUI() {
  const f = files.find(x => x.id === selectedId);
  $("#crumbBar").classList.toggle("hidden", !f);
  if (!f) return;
  $("#crumbName").textContent = f.name;
  $("#crumbFolder").textContent = f.location;
}

/* ===== Visualizador de imagem ===== */
const images = () => files.filter(f => f.type === "image" && f.src);
function open(f) {
  if (f.type !== "image") { toast("Visualização disponível apenas para imagens neste protótipo."); return; }
  viewerIndex = images().findIndex(i => i.id === f.id);
  showViewer();
  $("#imageViewer").classList.remove("hidden");
}
function showViewer() {
  const f = images()[viewerIndex]; if (!f) return;
  const img = $("#viewerImage"); zoom = 1; img.style.transform = "scale(1)";
  img.onerror = () => { img.onerror = null; img.src = PLACEHOLDER; };
  img.src = f.src;
  $("#viewerFileName").textContent = f.name;
  $("#viewerPrev").classList.toggle("hidden", images().length < 2);
  $("#viewerNext").classList.toggle("hidden", images().length < 2);
}
function stepViewer(d) { const n = images().length; viewerIndex = (viewerIndex + d + n) % n; showViewer(); }
function closeImage() { $("#imageViewer").classList.add("hidden"); $("#viewerImage").removeAttribute("src"); }
function setZoom(z) { zoom = Math.min(4, Math.max(0.25, z)); $("#viewerImage").style.transform = `scale(${zoom})`; }
$("#closeViewer").addEventListener("click", closeImage);
$("#viewerPrev").addEventListener("click", () => stepViewer(-1));
$("#viewerNext").addEventListener("click", () => stepViewer(1));
$("#zoomIn").addEventListener("click", () => setZoom(zoom + 0.25));
$("#zoomOut").addEventListener("click", () => setZoom(zoom - 0.25));
$("#zoomReset").addEventListener("click", () => setZoom(1));
$("#viewerFull").addEventListener("click", () => document.fullscreenElement ? document.exitFullscreen() : $("#imageViewer").requestFullscreen?.());
$("#viewerDownload").addEventListener("click", () => { const a = document.createElement("a"); a.href = $("#viewerImage").src; a.download = $("#viewerFileName").textContent; a.click(); });
$("#viewerPrint").addEventListener("click", () => window.print());
$("#viewerBackdrop").addEventListener("click", e => { if (e.target.id === "viewerBackdrop") closeImage(); });

/* ===== Demais interações ===== */
let toastTimer;
function toast(msg) { const el = $("#toast"); el.textContent = msg; el.classList.remove("hidden"); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.add("hidden"), 2600); }
$("#newButton").addEventListener("click", e => { e.stopPropagation(); $("#newMenu").classList.toggle("hidden"); });
document.addEventListener("click", e => {
  if (!e.target.closest("#newMenu") && !e.target.closest("#newButton") && !e.target.closest("#fab")) $("#newMenu").classList.add("hidden");
  if (!e.target.closest(".file-row, .grid-card, #crumbBar")) deselect();
});
$("#newMenu").addEventListener("click", e => {
  const action = e.target.closest("button")?.dataset.action; if (!action) return;
  $("#newMenu").classList.add("hidden");
  if (action === "upload-file") $("#filePicker").click();
  if (action === "upload-folder") $("#folderPicker").click();
  if (action === "new-folder") { $("#modalBackdrop").classList.remove("hidden"); $("#folderName").focus(); }
  if (action === "new-doc" || action === "new-sheet") toast("Este atalho é apenas visual neste protótipo.");
});
function addUploaded(list) {
  Array.from(list).forEach(file => {
    const isImg = file.type.startsWith("image/");
    files.unshift({ id: Date.now() + Math.random(), name: file.name, type: isImg ? "image" : file.name.toLowerCase().endsWith(".pdf") ? "pdf" : file.type.startsWith("video/") ? "video" : "zip",
      reason: "Você acabou de adicionar", owner: "eu", location: "Meu Drive", locType: "drive", src: isImg ? URL.createObjectURL(file) : undefined });
  });
  visibleCount += list.length; render(); toast(`${list.length} arquivo(s) adicionado(s) à lista local.`);
}
$("#filePicker").addEventListener("change", e => addUploaded(e.target.files));
$("#folderPicker").addEventListener("change", e => addUploaded(e.target.files));
$("#cancelModal").addEventListener("click", () => $("#modalBackdrop").classList.add("hidden"));
$("#createFolder").addEventListener("click", () => {
  const name = $("#folderName").value.trim(); if (!name) return $("#folderName").focus();
  files.unshift({ id: Date.now(), name, type: "folder", reason: "Você criou agora", owner: "eu", location: "Meu Drive", locType: "drive" });
  $("#folderName").value = ""; $("#modalBackdrop").classList.add("hidden"); visibleCount++; render(); toast(`Pasta "${name}" criada nesta demonstração.`);
});
$("#folderName").addEventListener("keydown", e => { if (e.key === "Enter") $("#createFolder").click(); if (e.key === "Escape") $("#cancelModal").click(); });
$("#folderToggle").addEventListener("click", () => { $("#folderSuggestions").classList.toggle("hidden"); $("#folderToggle .chevron").classList.toggle("down"); });
search.addEventListener("input", () => { visibleCount = 10; render(); });
$("#moreButton").addEventListener("click", () => { visibleCount += 10; render(); });
$("#listView").addEventListener("click", () => { grid.classList.add("hidden"); grid.classList.remove("active-grid"); $("#listView").classList.add("selected"); $("#gridView").classList.remove("selected"); render(); });
$("#gridView").addEventListener("click", () => { grid.classList.remove("hidden"); grid.classList.add("active-grid"); $("#gridView").classList.add("selected"); $("#listView").classList.remove("selected"); render(); });

const NAV_ICONS = { "Pessoal":"home","Projetos":"projects","Meu Drive":"drive","Computadores":"laptop","Compartilhados comigo":"people","Recentes":"clock","Com estrela":"star","Spam":"spam","Lixeira":"trash","Armazenamento":"cloud" };
document.querySelectorAll(".nav-item").forEach(item => {
  item.querySelector("span").innerHTML = svg(NAV_ICONS[item.dataset.section], 20);
  item.addEventListener("click", e => {
    e.preventDefault();
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active")); item.classList.add("active");
    currentSection = item.dataset.section;
    $("#pageTitle").textContent = currentSection === "Pessoal" ? "Olá! Este é o Google Drive" : currentSection;
    toast(`Seção "${currentSection}" selecionada. Conteúdo demonstrativo.`);
  });
});
document.addEventListener("keydown", e => {
  const viewerOpen = !$("#imageViewer").classList.contains("hidden");
  if (e.key === "Escape") { if (viewerOpen) closeImage(); else { $("#newMenu").classList.add("hidden"); $("#modalBackdrop").classList.add("hidden"); deselect(); } }
  if (viewerOpen && e.key === "ArrowLeft") stepViewer(-1);
  if (viewerOpen && e.key === "ArrowRight") stepViewer(1);
});

/* ícones do topo/laterais */
const put = (sel, name, size) => { const el = document.querySelector(sel); if (el) el.innerHTML = svg(name, size); };
put(".search-icon", "search", 24); put(".search-filter", "tune", 22);
put(".top-actions .icon-button:nth-child(1)", "help", 24); put(".top-actions .icon-button:nth-child(2)", "gear", 24);
put(".apps", "apps", 24); put(".new-button span", "plus", 24); put(".help-info", "help", 22);
document.querySelectorAll("[data-i]").forEach(el => el.innerHTML = svg(el.dataset.i, +el.dataset.s || 20));
$(".gemini").innerHTML = svg("gemini", 24, "#8ab4f8");
document.querySelectorAll(".folder-icon").forEach(el => el.innerHTML = svg("folder", 22, "#9aa0a6"));

/* ===== Celular: menu lateral, navegação inferior, FAB e gestos ===== */
const drawer = open => { $(".sidebar").classList.toggle("open", open); $("#scrim").classList.toggle("hidden", !open); };
$("#menuBtn").addEventListener("click", e => { e.stopPropagation(); drawer(true); });
$("#scrim").addEventListener("click", () => drawer(false));
document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => drawer(false)));
$("#fab").addEventListener("click", e => { e.stopPropagation(); $("#newMenu").classList.toggle("hidden"); });
document.querySelectorAll(".bottom-nav button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".bottom-nav button").forEach(x => x.classList.remove("active")); b.classList.add("active");
  document.querySelector(`.nav-item[data-section="${b.dataset.go}"]`).click();
}));
let touchX = null;
$("#viewerBackdrop").addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
$("#viewerBackdrop").addEventListener("touchend", e => {
  if (touchX === null || zoom !== 1) return;
  const dx = e.changedTouches[0].clientX - touchX; touchX = null;
  if (Math.abs(dx) > 60 && images().length > 1) stepViewer(dx < 0 ? 1 : -1);
});
$("#viewerImage").addEventListener("dblclick", () => setZoom(zoom === 1 ? 2 : 1));
render();
