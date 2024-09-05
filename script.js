const links = document.querySelectorAll(
  "#home-link, #my-projects-link, #my-skills-link, #about-link, #contact-link, #back-to-top"
)
const backToTopBtn = document.getElementById("back-to-top")
const myProjectsContainer = document.getElementById("my-projects-container")
const mySkillsContainer = document.getElementById("my-skills-container")
const contactDiv = document.getElementById("social-links")
const burgerIcon = document.getElementById("burger-icon")
const burgerMenuContent = document.getElementById("burger-menu-content")

const projects = [
  // {
  //   id: 1,
  //   title: "Digital Clock",
  //   description:
  //     "Stay on time, anywhere! Simple, clean digital clock. Always accurate. Check it out!",
  //   imgSrc:
  //     "https://res.cloudinary.com/do0pop1de/image/upload/v1718194146/src%20for%20portfolio%20website/clock.png",
  //   liveUrl: "./Projects/Digital-Clock/clock.html",
  //   githubLink:
  //     "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Digital-Clock",
  // isJS: true,
  // isTS: false,
  // isReact: false
  // },
  {
    id: 2,
    title: "Secret Chat",
    description:
      "Send secret messages with a fun twist! Secret Chat lets you encrypt messages.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/v1718191950/src%20for%20portfolio%20website/secret-chat.png",
    liveUrl: "https://shariq-yousuf.github.io/Secret-Chat/",
    githubLink: "https://github.com/shariq-yousuf/Secret-Chat",
    isJS: true,
    isTS: false,
    isReact: false,
  },
  {
    id: 3,
    title: "TicTacToe",
    description:
      "Classic Tic Tac Toe with two modes. Play with friends or AI, first to three in a row wins!",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/tictactoe",
    liveUrl: "https://shariq-yousuf.github.io/TicTacToe/",
    githubLink: "https://github.com/shariq-yousuf/TicTacToe",
    isJS: true,
    isTS: false,
    isReact: false,
  },
  {
    id: 4,
    title: "Palindrome Checker",
    description:
      "Enter any text & see if it reads the same backwards. Discover hidden palindromes!",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/Palindrome%20Checker",
    liveUrl: "./Projects/Palindrome-Checker/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Palindrome-Checker",
    isJS: true,
    isTS: false,
    isReact: false,
  },
  {
    id: 5,
    title: "Lucky Draw",
    description:
      "Lucky Draw picks winners for giveaways FAST. Enter names, spin, & see who wins!",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/lucky-draw",
    liveUrl: "./Projects/Lucky-Draw/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Lucky-Draw",
    isJS: true,
    isTS: false,
    isReact: false,
  },
  {
    id: 6,
    title: "Word Counter",
    description:
      "Analyze words, characters, & more. Count pronouns, estimate readability, find longest word.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/word-counter",
    liveUrl: "./Projects/Word-Counter/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Word-Counter",
    isJS: true,
    isTS: false,
    isReact: false,
  },
  {
    id: 7,
    title: "Roman Numeral Converter",
    description: "Convert decimal numbers (1-3999) to classic Roman numerals.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/roman-numerals-converter",
    liveUrl: "./Projects/Roman-Numeral-Converter/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Roman-Numeral-Converter",
    isJS: true,
    isTS: false,
    isReact: false,
  },
  {
    id: 8,
    title: "Quiz App",
    description:
      "Test your knowledge! Answer Qs on science, history, nature & more.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/quiz-app",
    liveUrl: "./Projects/Quiz-App/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Quiz-App",
    isJS: true,
    isTS: false,
    isReact: false,
  },
  {
    id: 9,
    title: "Mobile Number Validator",
    description: "Verify numbers for Pak and US!  Valid or not?",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/mobile-number-validator",
    liveUrl: "./Projects/Mobile-Number-Validator/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Mobile-Number-Validator",
    isJS: true,
    isTS: false,
    isReact: false,
  },
  // {
  //   id: 10,
  //   title: "Statistics Calculator",
  //   description:
  //     "Analyze your data with ease! Mean, median, mode, variance and standard deviation. ",
  //   imgSrc:
  //     "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/Statistics-Calculator",
  //   liveUrl:
  //     "https://shariq-yousuf.github.io/my-fCC-js-cert-projects/Projects/Statistics-Calculator/index.html",
  //   githubLink:
  //     "https://github.com/shariq-yousuf/my-fCC-js-cert-projects/tree/main/Projects/Statistics-Calculator",
  // isJS: true,
  // isTS: false,
  // isReact: false
  // },
  // {
  //   id: 11,
  //   title: "Todo App",
  //   description:
  //     "This simple to-do app lets you easily add, track, and complete your tasks.",
  //   imgSrc:
  //     "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/Todo-App",
  //   liveUrl:
  //     "https://shariq-yousuf.github.io/my-fCC-js-cert-projects/Projects/Todo-App/index.html",
  //   githubLink:
  //     "https://github.com/shariq-yousuf/my-fCC-js-cert-projects/tree/main/Projects/Todo-App",
  // isJS: true,
  // isTS: false,
  // isReact: false
  // },
  // {
  //   id: 12,
  //   title: "Calorie Counter",
  //   description:
  //     "Take control of your diet.This easy-to-use calorie counter app helps you track your food intake.",
  //   imgSrc:
  //     "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/Calorie-Counter",
  //   liveUrl:
  //     "https://shariq-yousuf.github.io/my-fCC-js-cert-projects/Projects/Calorie-Counter/index.html",
  //   githubLink:
  //     "https://github.com/shariq-yousuf/my-fCC-js-cert-projects/tree/main/Projects/Calorie-Counter",
  // isJS: true,
  // isTS: false,
  // isReact: false
  // },
  {
    id: 13,
    title: "Skyhop",
    description:
      "Jump & collect! Simple platform game for fun. (Dark & Light mode)",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/Platformer-Game",
    liveUrl:
      "https://shariq-yousuf.github.io/my-fCC-js-cert-projects/Projects/Platformer-Game/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/my-fCC-js-cert-projects/tree/main/Projects/Platformer-Game",
    isJS: true,
    isTS: false,
    isReact: false,
  },
  {
    id: 14,
    title: "Carousel",
    description: "Random carousel and image slider",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/Carousel",
    liveUrl: "./Projects/Carousel/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Carousel",
    isJS: true,
    isTS: false,
    isReact: false,
  },
  {
    id: 15,
    title: "Typing Pro",
    description: "Learn to type like a pro! Our app makes it easy & engaging.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/typing-pro",
    liveUrl: "./Projects/Typing-Pro/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Typing-Pro",
    isJS: true,
    isTS: false,
    isReact: false,
  },
  {
    id: 16,
    title: "Change Champ",
    description:
      " All-in-one cash register app for smooth transactions. Calculate exact change, and track sales.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/change-champ",
    liveUrl: "./Projects/Change-Champ/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Change-Champ",
    isJS: true,
    isTS: false,
    isReact: false,
  },
  // {
  //   id: 17,
  //   title: "CRUD APP",
  //   description:
  //     " A simple crud app with all four methods, get, post, patch and delete.",
  //   imgSrc:
  //     "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/crud-app",
  //   liveUrl: "./Projects/crud-app/index.html",
  //   githubLink:
  //     "https://github.com/shariq-yousuf/Developer-Portfolio/tree/crud/Projects/crud-app",
  // isJS: true,
  // isTS: false,
  // isReact: false
  // },
  {
    id: 18,
    title: "Meme Generator",
    description:
      "Create memes in seconds! Choose from a huge library of templates and add your own text.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/react_projects-scrimba/meme-generator",
    liveUrl: "https://meme-generator-sy.netlify.app/",
    githubLink:
      "https://github.com/shariq-yousuf/React-Projects_with-Scrimba/tree/main/Projects/meme-generator",
    isJS: false,
    isTS: false,
    isReact: true,
  },
  {
    id: 19,
    title: "Notes App",
    description:
      "Built with React and powered by Firebase Firestore. Leveraging the flexibility of React-Split and React-MDE.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/react_projects-scrimba/notes-app",
    liveUrl: "https://notes-app-sy.netlify.app/",
    githubLink:
      "https://github.com/shariq-yousuf/React-Projects_with-Scrimba/tree/main/Projects/notes-app",
    isJS: false,
    isTS: false,
    isReact: true,
  },
  {
    id: 20,
    title: "Tenzies",
    description:
      "TenZies is a dice-rolling game where you try to make all dice the same number. Beat your high score!",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/react_projects-scrimba/tenzies",
    liveUrl: "https://tenzies-sy.netlify.app/",
    githubLink:
      "https://github.com/shariq-yousuf/React-Projects_with-Scrimba/tree/main/Projects/tenzies",
    isJS: false,
    isTS: false,
    isReact: true,
  },
  {
    id: 21,
    title: "ChaiChat",
    description:
      "A real-time messaging application built on Firebase platform. Features: user profiles, chats, and real-time updates.",
    imgSrc:
      "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/chaichat",
    liveUrl: "https://shariq-yousuf.github.io/ChaiChat/",
    githubLink: "https://github.com/shariq-yousuf/ChaiChat",
    isJS: false,
    isTS: true,
    isReact: false,
  },
]

const skills = [
  {
    id: 1,
    title: "HTML5",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/html",
  },
  {
    id: 2,
    title: "CSS",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/css",
  },
  {
    id: 3,
    title: "Bootstrap 5",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/bootstrap",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/tailwind-css",
  },
  {
    id: 5,
    title: "Accessibility",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/Accessibility",
  },
  {
    id: 6,
    title: "SASS",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/sass-icon",
  },
  {
    id: 7,
    title: "JavaScript",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/js",
  },
  {
    id: 8,
    title: "TypeScript",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/typescript",
  },
  {
    id: 9,
    title: "Git",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/git",
  },
  {
    id: 10,
    title: "GitHub",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/v1718268748/src%20for%20portfolio%20website/skills%20icons/github.svg",
  },
  {
    id: 11,
    title: "Vite",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/vite",
  },
  {
    id: 12,
    title: "Firebase",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/firebase",
  },
  {
    id: 13,
    title: "React",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/react",
  },
]

const socialLinks = [
  {
    id: 1,
    platform: "Github",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/skills%20icons/github",
    url: "https://github.com/shariq-yousuf",
  },
  {
    id: 2,
    platform: "LinkedIn",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Social%20Icons/LinkedIn",
    url: "https://www.linkedin.com/in/shariq-yousuf/",
  },
  // {
  //   id: 3,
  //   platform: "Gmail",
  //   icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Social%20Icons/Gmail-icon",
  //   url: "mailto:shariqyousuf01@gmail.com",
  // },
  {
    id: 4,
    platform: "w3schools",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Social%20Icons/w3schools-icon",
    url: "https://www.w3profile.com/shariq-yousuf",
  },
  {
    id: 5,
    platform: "freeCodeCamp",
    icon: "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Social%20Icons/freeCodeCamp-icon",
    url: "https://www.freecodecamp.org/shariq-yousuf",
  },
]

// projects.push({
//   id: projects.length + 1,
//   title: "Coming Soon...",
//   description:
//     "Web just got more awesome. Our next project is cooking up. What could it be?",
//   imgSrc:
//     "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/src%20for%20portfolio%20website/Projects%20Screenshots/coming%20soon",
//   liveUrl: "./Projects/Coming-Soon/coming-soon.html",
//   githubLink:
//     "https://github.com/shariq-yousuf/Developer-Portfolio/tree/main/Projects/Coming-Soon",
// });

// PUSH NEW PROJECT ABOVE THIS LINE

// navbar, prevent default behavior and scroll to section without updating url
links.forEach((link) => link.addEventListener("click", scrollIntoSection))

function scrollIntoSection(event) {
  event.preventDefault()

  const targetElementId = this.getAttribute("href").slice(1)
  const targetElement = document.getElementById(targetElementId)
  targetElement.scrollIntoView({ behavior: "smooth" })
}

// back to top btn appearance
window.onscroll = function () {
  const threshold = innerHeight - 150

  if (window.scrollY >= threshold) {
    backToTopBtn.style.display = "block"
  } else {
    backToTopBtn.style.display = "none"
  }
}

// add projects
const projectsInReverseOrder = projects.reverse()

for (const project of projectsInReverseOrder) {
  const projectCard = document.createElement("div")
  projectCard.id = `project-${project.id}`
  projectCard.className = "card"

  projectCard.innerHTML = `
    <img src="${project.imgSrc}" alt="${project.title}"/>
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <div class="link-container">
      <a class="live-link" href="${project.liveUrl}"><i class="material-symbols-outlined live-icon"> visibility</i> Live</a>
      <a class="github-link" target="_blank" href="${project.githubLink}">Github</a>
    </div>
  `

  const projectTagEl = document.createElement("span")
  projectTagEl.className = "project-tag"
  if (project.isJS) {
    projectTagEl.textContent = "Vanilla JS"
    projectTagEl.style.backgroundColor = "#f7e45a"
  } else if (project.isTS) {
    projectTagEl.textContent = "TypeScript"
    projectTagEl.style.backgroundColor = "#3178C6"
    projectTagEl.style.color = "white"
  } else if (project.isReact) {
    projectTagEl.textContent = "React"
    projectTagEl.style.backgroundColor = "#80dff7"
  }
  projectCard.appendChild(projectTagEl)

  myProjectsContainer.appendChild(projectCard)
}

// add skills
const skillsInReverseOrder = skills.reverse()

for (const skill of skillsInReverseOrder) {
  const bgEl = document.createElement("div")
  bgEl.className = "bg"
  const imgEl = document.createElement("img")
  imgEl.setAttribute("src", skill.icon)
  imgEl.setAttribute("alt", skill.title)
  imgEl.title = skill.title
  bgEl.appendChild(imgEl)
  mySkillsContainer.appendChild(bgEl)
}

// add social links
socialLinks.forEach((link) => {
  const linkHtml = `
   <a href="${link.url}" target="_blank">
    <div class="link" title="${link.platform}">
      <img src="${link.icon}" alt="${link.platform}" />
    </div>
   </a>
  `

  contactDiv.innerHTML += linkHtml
})

// add burger menu for small screen
burgerIcon.addEventListener("click", () => {
  if (burgerIcon.innerHTML === "menu") {
    burgerIcon.innerHTML = "close"
  } else {
    burgerIcon.innerHTML = "menu"
  }

  burgerMenuContent.classList.toggle("hidden")
})
