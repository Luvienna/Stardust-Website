// RSVP Modal logic
const rsvpModal = document.getElementById("rsvpModal");
const confirmPopup = document.getElementById("confirmationPopup");
const closeConfirmBtn = document.getElementById("closeConfirm");
const rsvpForm = document.getElementById("rsvpForm");

document.querySelectorAll(".rsvp-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("eventName").value = btn.dataset.event;
    document.getElementById("eventDate").value = btn.dataset.date;
    rsvpModal.style.display = "flex";
  });
});

// Close RSVP modal
document.querySelectorAll(".close").forEach(el => {
  el.addEventListener("click", () => {
    rsvpModal.style.display = "none";
    confirmPopup.style.display = "none";
  });
});

// Submit RSVP form
rsvpForm.addEventListener("submit", e => {
  e.preventDefault();
  rsvpModal.style.display = "none";
  confirmPopup.style.display = "flex";
});

// Close confirmation
closeConfirmBtn.addEventListener("click", () => {
  confirmPopup.style.display = "none";
});

document.querySelectorAll(".rsvp-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("eventName").value = btn.dataset.event;
    document.getElementById("eventDate").value = btn.dataset.date;
    rsvpModal.style.display = "flex";
  });
});
