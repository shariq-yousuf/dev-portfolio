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
    summary
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
    "This book guides you from programming basics to advanced topics like closures and promises."
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
    "Learn best practices for naming, formatting, and structuring your code for readability and maintainability."
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
    "This book uses a visual approach to teach you the fundamentals of building web pages with HTML and CSS."
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
    "Gain valuable advice on software project management, testing, debugging, and more."
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
    "This short and practical book provides actionable insights for web usability."
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
    "This book breaks down complex algorithms into easy-to-understand concepts using illustrations and examples."
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
    "This classic book provides a step-by-step approach to code refactoring."
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
    "This book teaches kids the basics of programming through interactive games and projects."
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
    "This comprehensive guide covers all aspects of using the Linux command line, from basic commands to advanced scripting."
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
    "This book covers essential topics like HTML, CSS, JavaScript, frameworks like React, and best practices for building user interfaces."
  ),
];
