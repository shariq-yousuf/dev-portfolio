const inputNumber = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const outputEl = document.querySelector("#output");

convertBtn.addEventListener("click", () => {
  if (inputNumber.value === "") {
    outputEl.textContent = "Please enter a valid number.";
  } else if (inputNumber.value < 1) {
    outputEl.textContent = "Please enter a number greater than or equal to 1.";
  } else if (inputNumber.value === "4000") {
    outputEl.textContent = "Please enter a number less than or equal to 3999.";
  }
});

inputNumber.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    convertBtn.click();
  }
});
