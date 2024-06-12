const links = document.querySelectorAll(
  "#home-link, #my-projects-link, #my-skills-link, #back-to-top"
);
const backToTopBtn = document.getElementById("back-to-top");
const myProjectsContainer = document.getElementById("my-projects-container");
const projects = [
  {
    id: 1,
    title: "Digital Clock",
    description:
      "Stay on time, anywhere! Simple, clean digital clock. Always accurate, always free. Check it out!",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/v1718194146/src%20for%20portfolio%20website/clock.png",
    url: "./Projects/Digital-Clock/clock.html",
  },
  {
    id: 2,
    title: "Secret Chat",
    description:
      "Send secret messages with a fun twist! Secret Chat lets you encrypt messages. Encode your message, and share it with your friends.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/v1718191950/src%20for%20portfolio%20website/secret-chat.png",
    url: "https://shariq-yousuf.github.io/Secret-Chat/",
  },
  {
    id: 3,
    title: "TicTacToe",
    description:
      "The Xs and Os are coming! Prepare for strategic battles.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/coming-soon",
    url: "./Projects/Coming Soon/coming-soon.html",
  },
];

// navbar, prevent default behavior and scroll to section without updating url
links.forEach((link) => link.addEventListener("click", scrollIntoSection));

function scrollIntoSection(event) {
  event.preventDefault();

  const targetElementId = this.getAttribute("href").slice(1);
  const targetElement = document.getElementById(targetElementId);
  targetElement.scrollIntoView({ behavior: "smooth" });
}

// back to top btn
window.onscroll = function () {
  const threshold = window.innerHeight;

  if (window.scrollY >= threshold) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// adding projects
for (const project of projects) {
  const projectCard = document.createElement("div");
  projectCard.id = `card-${project.id}`;
  projectCard.className = "card";
  projectCard.innerHTML = `
  <a href="${project.url}">
  <img src="${project.imgSrc}" alt="Project ${project.id} Image."/>
  <h2>${project.title}</h2>
  <p>${project.description}</p>
  </a>`;
  myProjectsContainer.appendChild(projectCard);
  console.log(projectCard);
}
