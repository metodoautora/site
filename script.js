/* =========================================================
   MÉTODO AUTORA — script
   ▼▼▼ EDITE APENAS ESTA PARTE ▼▼▼
   ========================================================= */
const CONFIG = {
  // Número de WhatsApp no formato internacional, só dígitos.
  // Ex.: Brasil + DDD 11 + número = "5511999999999"
  whatsapp: "5511999999999",

  // Mensagem que já vem digitada quando a pessoa abre o WhatsApp.
  whatsappMensagem: "Olá! Vim pelo site e quero saber mais sobre o Método Autora.",

  // Link do checkout (Hotmart, Kiwify, Eduzz, Stripe, etc.).
  // Cole aqui o link de pagamento do seu produto.
  checkout: "https://pay.exemplo.com.br/seu-produto",
};
/* ▲▲▲ EDITE APENAS ESTA PARTE ▲▲▲ */


/* ---------- Aplica os links de WhatsApp e checkout ---------- */
(function aplicarLinks() {
  const waUrl =
    "https://wa.me/" +
    CONFIG.whatsapp +
    "?text=" +
    encodeURIComponent(CONFIG.whatsappMensagem);

  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.setAttribute("href", waUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  document.querySelectorAll("[data-checkout]").forEach((el) => {
    el.setAttribute("href", CONFIG.checkout);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
})();

/* ---------- Sombra na navbar ao rolar ---------- */
const nav = document.getElementById("nav");
const onScroll = () => {
  if (window.scrollY > 12) nav.classList.add("is-scrolled");
  else nav.classList.remove("is-scrolled");
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Animação de revelação ao rolar ---------- */
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}

/* ---------- Ano atual no rodapé ---------- */
const anoEl = document.getElementById("ano");
if (anoEl) anoEl.textContent = new Date().getFullYear();
