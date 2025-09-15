const modal = document.getElementById("bookModal");
const closeBtn = modal.querySelector(".close");

const modalImg = document.getElementById("bookImg");
const modalTitle = document.getElementById("bookTitle");
const modalAuthor = document.getElementById("bookAuthor");
const modalStars = document.getElementById("bookStars");
const modalScore = document.getElementById("bookScore");
const modalSynopsis = document.getElementById("bookSynopsis");
const modalLocation = document.getElementById("bookLocation");

// === Rating Stars ===
function generateStars(rating) {
  let starsHTML = "";
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  for (let i = 0; i < full; i++) starsHTML += "★";
  if (half) starsHTML += "⯪";
  for (let i = 0; i < empty; i++) starsHTML += "☆";

  return starsHTML;
}

// === Modal Open ===
document.querySelectorAll(".book-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.dataset.title;
    const author = card.dataset.author;
    const synopsis = card.dataset.synopsis;
    const rating = parseFloat(card.dataset.rating || "0");
    const location = card.dataset.location;
    const img = card.querySelector("img").src;

    modalTitle.textContent = title;
    modalAuthor.textContent = author;
    modalSynopsis.textContent = synopsis;
    modalLocation.textContent = location;
    modalImg.src = img;

    modalStars.innerHTML = generateStars(rating);
    modalScore.textContent = `${rating.toFixed(1)} / 5`;

    modal.style.display = "flex";
  });
});

// === Modal Close ===
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// === Search & Filter ===
const searchBar = document.getElementById("searchBar");
const genreFilter = document.getElementById("genreFilter");
const books = document.querySelectorAll(".book-card");

function filterBooks() {
  const searchText = searchBar.value.toLowerCase();
  const genre = genreFilter.value.toLowerCase();

  books.forEach(book => {
    const title = (book.dataset.title || "").toLowerCase();
    const author = (book.dataset.author || "").toLowerCase();
    const bookGenre = (book.dataset.genre || "").toLowerCase();

    const matchesSearch =
      title.includes(searchText) || author.includes(searchText);

    const matchesGenre = genre === "all" || bookGenre === genre;

    book.style.display = matchesSearch && matchesGenre ? "block" : "none";
  });
}

// Event listeners
searchBar.addEventListener("input", filterBooks);
genreFilter.addEventListener("change", filterBooks);
