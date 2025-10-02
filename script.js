/* ==========================
   SCRIPT PRINCIPAL
   ========================== */

// Seletores principais
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarClose = document.querySelector(".sidebar-close");
const langBtns = document.querySelectorAll(".lang-btn");
const cartBtn = document.querySelector(".cart-btn");

// Função para abrir/fechar sidebar
if (sidebarToggle) {
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    sidebarToggle.classList.toggle("active");
  });
}

// Botão fechar no canto superior da sidebar
if (sidebarClose) {
  sidebarClose.addEventListener("click", () => {
    sidebar.classList.remove("active");
    sidebarToggle.classList.remove("active");
  });
}

// Alternar idiomas (simples, só para mostrar interação)
langBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    langBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const idioma = btn.dataset.lang;
    alert("Idioma cambiado a: " + idioma.toUpperCase());
    // Aqui futuramente você pode carregar JSONs ou redirecionar para /es ou /en
  });
});

// Simular carrinho → redireciona para planos
if (cartBtn) {
  cartBtn.addEventListener("click", () => {
    window.location.href = "#plans"; // rola até seção de planos
  });
}

// Fechar sidebar se clicar fora dela
document.addEventListener("click", (e) => {
  if (sidebar.classList.contains("active") &&
      !sidebar.contains(e.target) &&
      !sidebarToggle.contains(e.target)) {
    sidebar.classList.remove("active");
    sidebarToggle.classList.remove("active");
  }
});

// Suavizar rolagem nos links de navegação
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    sidebar.classList.remove("active");
    sidebarToggle.classList.remove("active");
  });
});
