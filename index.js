const searchToggle = document.getElementById("search-toggle");
const searchForm = document.getElementById("search-form");

searchToggle.addEventListener("click", () => {
  searchForm.classList.toggle("show");
});