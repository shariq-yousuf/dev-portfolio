class CodingBook {
  constructor(
    id,
    title,
    author,
    year,
    publisher,
    ISBN,
    pages,
    description,
    summary,
    coverImageUrl
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.publisher = publisher;
    this.ISBN = ISBN;
    this.pages = pages;
    this.description = description;
    this.summary = summary;
    this.coverImageUrl = coverImageUrl;
  }
}

// Create an array of CodingBook objects with summaries
const codingBooks = [
  new CodingBook(
    1,
    "Eloquent JavaScript",
    "Marijn Haverbeke",
    2014,
    "No Starch Press",
    "9781593272848",
    462,
    "A modern and comprehensive guide to JavaScript",
    "This book guides you from programming basics to advanced topics like closures and promises.",
    "./imgs/Eloquent JavaScript.jpg"
  ),
  new CodingBook(
    2,
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Robert C. Martin",
    2008,
    "Prentice Hall",
    "0136760930",
    431,
    "Practices for writing clean and maintainable code",
    "Learn best practices for naming, formatting, and structuring your code for readability and maintainability.",
    "./imgs/Clean Code A Handbook of Agile Software Craftsmanship.jpg"
  ),
  new CodingBook(
    3,
    "Head First HTML & CSS",
    "Elisabeth Robson & Eric Freeman",
    2011,
    "O'Reilly Media",
    "9780596006184",
    656,
    "A visual and interactive guide to HTML and CSS",
    "This book uses a visual approach to teach you the fundamentals of building web pages with HTML and CSS.",
    "./imgs/Head First HTML and CSS.jpg"
  ),
  new CodingBook(
    4,
    "The Pragmatic Programmer: From Journeyman to Master",
    "Andrew Hunt & David Thomas",
    1999,
    "Addison-Wesley Professional",
    "0134960568",
    392,
    "From junior developer to software architect, this book covers practical development topics.",
    "Gain valuable advice on software project management, testing, debugging, and more.",
    "./imgs/The Pragmatic Programmer From Journeyman to Master.jpg"
  ),
  new CodingBook(
    5,
    "Don't Make Me Think: A Simple Approach to Usability",
    "Steve Krug",
    2006,
    "New Riders",
    "0321344758",
    184,
    "Learn how to create user-friendly websites that are easy to navigate and understand.",
    "This short and practical book provides actionable insights for web usability.",
    "./imgs/Don't Make Me Think A Simple Approach to Usability.jpg"
  ),
  new CodingBook(
    6,
    "Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People",
    " Aditya Bhargava",
    2016,
    "Manning Publications",
    "9781617292231",
    464,
    "Learn how algorithms work with a visual and interactive approach.",
    "This book breaks down complex algorithms into easy-to-understand concepts using illustrations and examples.",
    "./imgs/Grokking Algorithms An Illustrated Guide for Programmers and Other Curious People.jpg"
  ),
  new CodingBook(
    7,
    "Refactoring: Improving the Design of Existing Code",
    "Martin Fowler",
    1999,
    "Addison-Wesley Professional",
    "0134969704",
    431,
    "Learn techniques for improving the design of existing code without changing its functionality.",
    "This classic book provides a step-by-step approach to code refactoring.",
    "./imgs/Refactoring Improving the Design of Existing Code.jpg"
  ),
  new CodingBook(
    8,
    "JavaScript for Kids: A Playful Introduction to Programming",
    "Nick Morgan",
    2014,
    "No Starch Press",
    "9781593274729",
    232,
    "A fun and engaging introduction to programming for kids using JavaScript",
    "This book teaches kids the basics of programming through interactive games and projects.",
    "./imgs/JavaScript for Kids A Playful Introduction to Programming.png"
  ),
  new CodingBook(
    9,
    "The Linux Command Line: A Complete Introduction",
    "William Shotts",
    2014,
    "No Starch Press",
    "9781593279510",
    688,
    "Master the power of the Linux command line",
    "This comprehensive guide covers all aspects of using the Linux command line, from basic commands to advanced scripting.",
    "./imgs/The Linux Command Line A Complete Introduction.jpg"
  ),
  new CodingBook(
    10,
    "Frontend Developer Handbook",
    "Adam Freeman",
    2023,
    "O'Reilly Media",
    "9781492093370",
    912,
    "A comprehensive guide to modern front-end development practices",
    "This book covers essential topics like HTML, CSS, JavaScript, frameworks like React, and best practices for building user interfaces.",
    "./imgs/Frontend Developer Handbook.jpeg"
  ),
];

const booksEl = document.querySelector(".books");
const sideMenuBtn = document.querySelector("#side-menu-btn");
const sideMenu = document.querySelector(".side-menu");

codingBooks.forEach((book) => {
  const bookContainer = document.createElement("div");
  bookContainer.classList.add("book-container");

  bookContainer.innerHTML = `
        <img class="cover-img" src="${book.coverImageUrl}" alt="${book.title}" />
          <div class="info">
            <h2 class="title">${book.title}</h2>
            <p class="author">${book.author}</p>
            <p class="publish-year">Publish by ${book.publisher} in ${book.year}</p>
            <span class="isbn">ISBN: ${book.ISBN}</span>
            <span class="pages">Pages: ${book.pages}</span>
            <p class="description">${book.description}</p>
            <button class="borrow-btn">Borrow</button>
    `;

  booksEl.appendChild(bookContainer);
});

sideMenuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("hidden");

  if (Array.from(sideMenuBtn.classList).includes("fa-bars")) {
    sideMenuBtn.classList.remove("fa-bars");
    sideMenuBtn.classList.add("fa-xmark");
  } else {
    sideMenuBtn.classList.remove("fa-xmark");
    sideMenuBtn.classList.add("fa-bars");
  }
});
