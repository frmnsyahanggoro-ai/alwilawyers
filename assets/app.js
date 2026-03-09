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
    <span class="floating-cta-badge" aria-hidden="true">
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M16 5.333C10.845 5.333 6.667 9.51 6.667 14.666c0 2.019.628 3.89 1.708 5.44L6 26l6.063-2.315c1.48.811 3.18 1.281 4.937 1.281 5.155 0 9.333-4.178 9.333-9.333S21.155 5.333 16 5.333zm0 16.178c-1.52 0-2.93-.41-4.15-1.122l-.296-.175-2.463.941.84-2.54-.192-.312a6.77 6.77 0 0 1-1.044-3.6c0-3.73 3.036-6.765 6.765-6.765 3.73 0 6.766 3.035 6.766 6.765 0 3.73-3.036 6.81-6.766 6.81zm3.707-5.092c-.204-.102-1.21-.6-1.398-.668-.188-.07-.325-.102-.463.101-.139.203-.532.667-.652.804-.12.139-.24.155-.444.052-.203-.102-.858-.316-1.635-1.008-.604-.537-1.011-1.2-1.13-1.404-.12-.203-.013-.313.09-.414.093-.093.203-.24.305-.36.102-.12.139-.204.204-.34.07-.139.035-.26-.017-.36-.052-.102-.463-1.115-.635-1.528-.167-.401-.337-.347-.463-.353l-.395-.007c-.12 0-.315.045-.48.213-.167.167-.64.625-.64 1.523 0 .898.656 1.767.747 1.889.093.12 1.29 1.973 3.127 2.765.437.189.778.302 1.044.387.438.14.837.12 1.152.073.352-.052 1.21-.495 1.381-.973.171-.48.171-.89.12-.973-.052-.084-.188-.139-.392-.241z"
          fill="currentColor"
        />
      </svg>
    </span>
    <span class="floating-cta-copy">
      <span class="floating-cta-label">Konsultasi Cepat</span>
      <strong class="floating-cta-title">WhatsApp Kami</strong>
    </span>
  `;
  document.body.appendChild(floatingCta);
}
