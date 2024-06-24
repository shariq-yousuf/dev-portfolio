const timerDays = document.getElementById("timer-days");
const timerHours = document.getElementById("timer-hours");
const dateEl = document.getElementById("date");
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const date = new Date(2025, 0, 1);

const timer = setInterval(() => {
  const currentDate = new Date();
  const diff = date - currentDate;

  let secN = diff / 1000;
  let minN = secN / 60;
  let hrsN = minN / 60;
  let daysN = hrsN / 24;
  let days = Math.floor(daysN);
  hrsN = (daysN - days) * 24;
  const hrs = Math.floor(hrsN);
  minN = (hrsN - hrs) * 60;
  const min = Math.floor(minN);
  secN = (minN - min) * 60;
  const sec = Math.floor(secN);

  timerDays.textContent = `${days} Days+`;
  timerHours.textContent = `${hrs.toString().padStart(2, 0)} : ${min
    .toString()
    .padStart(2, 0)} : ${sec.toString().padStart(2, 0)}`;
}, 1000);

dateEl.textContent = `${date.getDate().toString().padStart(2, 0)}-${
  months[date.getMonth()]
}-${date.getFullYear()}`;
