const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");
const slideContainer = document.querySelector(".slide-container");
const dotContainer = document.querySelector(".dot-container");

let position = 0;

const slides = [];
let dotId = 0;

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

slides.forEach(() => {
  const dotEl = document.createElement("div");
  dotEl.classList.add("dot");
  dotEl.id = dotId;

  dotContainer.appendChild(dotEl);

  dotId += 100;
});

const slideRight = () => {
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

  highlightDot();
};

const slideLeft = () => {
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

  highlightDot();
};

const goToSlide = (e) => {
  position = -e.target.id;

  slides.forEach((slide) => {
    slide.style.left = `${position}%`;
  });

  highlightDot();
};

const highlightDot = () => {
  const dots = Array.from(document.getElementsByClassName("dot"));
  dots.forEach((dot) => {
    dot.classList.remove("focus");
    dot.addEventListener("click", goToSlide);
  });

  const targetDot = dots.find((dot) => parseInt(dot.id) === Math.abs(position));

  targetDot.classList.add("focus");
};

rightBtn.addEventListener("click", slideRight);

leftBtn.addEventListener("click", slideLeft);

highlightDot();

setInterval(slideRight, 5000);
