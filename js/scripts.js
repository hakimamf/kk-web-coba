/* toggle class active */
const navbarNav = document.querySelector(".navbar-nav");

//ketika humberger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

/* klik di luar sidebar untuk menutup sidebar */
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const modalOverlay = document.getElementById("modalOverlay");
  const closeModalButton = document.getElementById("closeModal");

  // Function to show the modal
  function showModal() {
    modalOverlay.style.display = "flex"; // Use flex to center content
  }

  // Function to hide the modal
  function hideModal() {
    modalOverlay.style.display = "none";
  }

  // Auto-popup after a delay (e.g., 2 seconds)
  setTimeout(showModal, 1000); // 2000 milliseconds = 2 seconds

  // Close modal when the close button is clicked
  closeModalButton.addEventListener("click", hideModal);

  // Close modal when clicking outside the modal content (on the overlay)
  modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
      hideModal();
    }
  });
});
