const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const bodyEl = document.getElementsByTagName("body");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date;

const updateDate = setInterval(() => {
  date = new Date();
  timeEl.textContent = `${date.getHours().toString().padStart(2, 0)} : ${date
    .getMinutes()
    .toString()
    .padStart(2, 0)}  : ${date.getSeconds().toString().padStart(2, 0)}`;
  dateEl.textContent = `${months[date.getMonth()]}, ${
    days[date.getDay()]
  } ${date.getDate()}`;

  if (date.getHours > "19" || date.getHours < "06") {
    bodyEl[0].style.background = "black";
  }
}, 1000);
