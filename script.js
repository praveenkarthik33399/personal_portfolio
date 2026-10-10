
// Open and close the mobile navigation menu.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu when a navigation link is clicked.
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Display the current year automatically in the footer.
document.getElementById("year").textContent =
  new Date().getFullYear();

// Handle the contact form submission.
document.getElementById("contactForm").addEventListener(
  "submit",
  function (event) {
    event.preventDefault();

    // Get values entered by the visitor.
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check that all fields have values.
    if (!name || !email || !subject || !message) {
      alert("Please complete all fields before sending.");
      return;
    }

    // Replace this with your actual email address.
    const recipient = "your.email@example.com";

    // Prepare the email content.
    const body =
      `Name: ${name}\nEmail: ${email}\n\n${message}`;

    // Open the visitor's default email application.
    window.location.href =
      `mailto:${recipient}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }
);
