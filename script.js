function scrollToContent() {
  document.getElementById("story").scrollIntoView({ behavior: "smooth" });
}

// Carousel logic
const carousel = document.querySelector(".carousel");
const leftBtn = document.querySelector(".carousel-btn.left");
const rightBtn = document.querySelector(".carousel-btn.right");

let scrollAmount = 0;
const scrollStep = 250;

rightBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
});
leftBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -scrollStep, behavior: "smooth" });
});

// Book Modal
const modal = document.getElementById("bookModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalDescription = document.getElementById("modalDescription");
const modalRating = document.getElementById("modalRating");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".book-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";

    modalImg.src = card.querySelector("img").src;
    modalTitle.textContent = card.dataset.title;
    modalAuthor.textContent = `by ${card.dataset.author}`;
    modalDescription.textContent = card.dataset.description;

    // ⭐ Handle rating (supports decimals like 4.3, 4.8, etc.)
    const rating = parseFloat(card.dataset.rating) || 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = "";

    // full stars
    stars += "★".repeat(fullStars);

    // half star (Unicode: ☆ = empty, ⯨ alternative, or use a styled span)
    if (hasHalfStar) stars += "⯨"; // looks like a half star

    // empty stars
    stars += "☆".repeat(5 - fullStars - (hasHalfStar ? 1 : 0));

    // Add both number + stars
    modalRating.innerHTML = `<span>${rating.toFixed(1)}</span> ${stars}`;
  });
});



closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


