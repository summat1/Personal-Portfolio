// JavaScript code to create an interactive button that expand/collapse a section of the resume when clicked
const button = document.querySelector("button");
button.addEventListener("click", function() {
  const section = document.querySelector("section");
  if (section.style.display === "none") {
    section.style.display = "block";
    button.textContent = "Collapse";
  } else {
    section.style.display = "none"
  }
})
