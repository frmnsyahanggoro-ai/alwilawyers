const navToggle = document.querySelector("[data-nav-toggle]");
const mainNav = document.querySelector("[data-main-nav]");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const yearTarget = document.querySelector("[data-year]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (!document.querySelector("[data-floating-cta]")) {
  const floatingCta = document.createElement("a");
  floatingCta.href = "https://wa.me/6281387910251";
  floatingCta.className = "floating-cta";
  floatingCta.setAttribute("data-floating-cta", "true");
  floatingCta.setAttribute("aria-label", "Konsultasi via WhatsApp");
  floatingCta.innerHTML =
    '<span class="floating-cta-badge">W</span><span><span>Konsultasi Cepat</span><strong>WhatsApp Kami</strong></span>';
  document.body.appendChild(floatingCta);
}
