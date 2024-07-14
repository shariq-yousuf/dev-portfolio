const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");
const slideContainer = document.querySelector(".slide-container");

let position = 0;

const slides = [];
const imgs = [
  "./pics/pic(1).jpg",
  "./pics/pic(2).jpg",
  "./pics/pic(3).jpg",
  "./pics/pic(4).jpg",
  "./pics/pic(5).jpg",
];

imgs.forEach((img) => {
  const slideEl = document.createElement("div");
  slideEl.classList.add("slide");

  const imgEl = document.createElement("img");
  imgEl.classList.add("slide-img");
  imgEl.setAttribute("src", `${img}`);

  slideEl.appendChild(imgEl);
  slides.push(slideEl);
});

slides.forEach((slide) => slideContainer.appendChild(slide));

rightBtn.addEventListener("click", () => {
  if (position > (slides.length - 1) * -100) {
    position -= 100;
    slides.forEach((slide) => {
      slide.style.left = `${position}%`;
    });
  } else {
    position = 0;
    slides.forEach((slide) => {
      slide.style.left = `${position}%`;
    });
  }
});

leftBtn.addEventListener("click", () => {
  if (position < 0) {
    position += 100;
    slides.forEach((slide) => {
      slide.style.left = `${position}%`;
    });
  } else {
    position = (slides.length - 1) * -100;
    slides.forEach((slide) => {
      slide.style.left = `${position}%`;
    });
  }
});
