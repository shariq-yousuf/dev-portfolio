const timerEl = document.getElementById("timer");

const timer = setInterval(() => {
  const date = new Date(2024, 5, 22);
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

  timerEl.textContent = `${days} Days ${hrs.toString().padStart(2, 0)} : ${min
    .toString()
    .padStart(2, 0)} : ${sec.toString().padStart(2, 0)}`;
}, 1000);
