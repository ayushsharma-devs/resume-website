function showMessage() {
  const response = document.getElementById("response");
  response.textContent = "Thanks for reaching out! I’ll get back to you soon. 😊";

  // Optional: Fade out after a few seconds
  setTimeout(() => {
    response.textContent = "";
  }, 4000);
}
