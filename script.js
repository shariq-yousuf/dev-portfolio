const links = document.querySelectorAll("#home-link, #my-projects-link, #my-skills-link")


// navbar, prevent default behavior and scroll to section without updating url
links.forEach(link => link.addEventListener("click", scrollIntoSection))

function scrollIntoSection(event) {
  event.preventDefault();

  const targetElementId = this.getAttribute("href").slice(1)
  const targetElement = document.getElementById(targetElementId)
  targetElement.scrollIntoView({ behavior: "smooth" });
}
