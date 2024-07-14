const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");
const slides = document.getElementsByClassName("slide");

let position = 0;

rightBtn.addEventListener("click", () => {
  position -= 100;
  Array.from(slides).forEach((slide) => {
    slide.style.left = `${position}%`;
  });
});

leftBtn.addEventListener("click", () => {
  position += 100;
  Array.from(slides).forEach((slide) => {
    slide.style.left = `${position}%`;
  });
});
