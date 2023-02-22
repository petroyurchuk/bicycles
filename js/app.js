const burgerBtn = document.querySelector(".burger-btn");
const header = document.querySelector(".header");

burgerBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});
