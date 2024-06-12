const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let date;

const updateDate = setInterval(() => {
  date = new Date();
  timeEl.textContent = `${date.getHours()} : ${date.getMinutes()}  : ${date.getSeconds()}`;
  dateEl.textContent = `${months[date.getMonth()]}, ${days[date.getDay()]} ${date.getDate()}`
}, 1000);
