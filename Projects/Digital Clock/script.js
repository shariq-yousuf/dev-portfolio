const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
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
  timeEl.textContent = `${date.getHours()} : ${date.getMinutes()}  : ${date.getSeconds()}`;
  dateEl.textContent = `${months[date.getMonth()]}, ${
    days[date.getDay()]
  } ${date.getDate()}`;
}, 1000);
