/* =========================
   Smooth Scroll Navigation
========================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* =========================
   Navbar Scroll Effect
========================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* =========================
   Button Interactions
========================= */
const bookBtn = document.querySelector(".primary");
const providerBtn = document.querySelector(".secondary");

bookBtn.addEventListener("click", () => {
  openModal("Book a Service", "Service booking will be available soon.");
});

providerBtn.addEventListener("click", () => {
  openModal("Become a Provider", "Provider registration coming soon.");
});

/* =========================
   Modal Logic
========================= */
const modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML = `
  <div class="modal-content">
    <h3 id="modal-title"></h3>
    <p id="modal-text"></p>
    <button id="closeModal">Close</button>
  </div>
`;
document.body.appendChild(modal);

function openModal(title, text) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-text").innerText = text;
  modal.classList.add("active");
}

document.addEventListener("click", e => {
  if (e.target.id === "closeModal" || e.target === modal) {
    modal.classList.remove("active");
  }
});