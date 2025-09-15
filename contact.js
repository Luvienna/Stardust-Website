const contactForm = document.getElementById("contactForm");
const contactConfirm = document.getElementById("contactConfirm");
const closeContactConfirm = document.getElementById("closeContactConfirm");

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  contactConfirm.style.display = "flex"; // show confirmation modal
});

closeContactConfirm.addEventListener("click", () => {
  contactConfirm.style.display = "none"; // close modal
});
