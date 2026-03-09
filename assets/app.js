const navToggle = document.querySelector("[data-nav-toggle]");
const mainNav = document.querySelector("[data-main-nav]");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-year]").forEach((yearTarget) => {
  yearTarget.textContent = new Date().getFullYear();
});

if (!document.querySelector("[data-floating-cta]")) {
  const floatingCta = document.createElement("a");
  floatingCta.href = "https://wa.me/6281387910251";
  floatingCta.className = "floating-cta";
  floatingCta.setAttribute("data-floating-cta", "true");
  floatingCta.setAttribute("aria-label", "Konsultasi via WhatsApp");
  floatingCta.innerHTML = `
    <span class="floating-cta-badge" aria-hidden="true">WA</span>
    <span class="floating-cta-copy">
      <span class="floating-cta-label">Konsultasi Cepat</span>
      <strong class="floating-cta-title">WhatsApp Kami</strong>
    </span>
  `;
  document.body.appendChild(floatingCta);
}
