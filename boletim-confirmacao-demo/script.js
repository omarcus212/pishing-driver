const protocol = "7814698/2026";

document.getElementById("protocol").textContent = protocol;

const date = new Date();
const formattedDate = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
}).format(date);

document.getElementById("registeredAt").textContent = formattedDate;

const toast = document.getElementById("toast");
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

document.getElementById("copyProtocol").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(protocol);
    showToast("Protocolo de demonstração copiado.");
  } catch {
    showToast("Não foi possível copiar automaticamente neste navegador.");
  }
});

document.getElementById("homeButton").addEventListener("click", () => {
  showToast("Botão demonstrativo: aqui você definiria a navegação para a página inicial.");
});
