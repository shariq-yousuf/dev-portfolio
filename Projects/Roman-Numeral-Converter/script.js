const inputNumber = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const outputEl = document.querySelector("#output");
const romanNumeral = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

const checkInputNumber = () => {
  const inputValue = inputNumber.value;

  if (inputValue === "") {
    outputEl.textContent = "Please enter a valid number.";
    outputEl.classList.remove("bold");
  } else if (parseInt(inputValue) < 1) {
    outputEl.textContent = "Please enter a number greater than or equal to 1.";
    outputEl.classList.remove("bold");
  } else if (parseInt(inputValue) >= 4000) {
    outputEl.textContent = "Please enter a number less than or equal to 3999.";
    outputEl.classList.remove("bold");
  } else {
    outputEl.classList.add("bold");
    decimalToRoman();
  }
};

const decimalToRoman = () => {
  outputEl.textContent = "";

  const decimalKeys = Object.keys(romanNumeral).reverse();
  let inputValue = parseInt(inputNumber.value);

  for (const key of decimalKeys) {
    if (inputValue >= parseInt(key)) {
      const quotient = Math.floor(inputValue / key);

      for (let i = 0; i < quotient; i++) {
        outputEl.textContent += romanNumeral[key];
      }

      inputValue = inputValue % key;
    }
  }

  inputNumber.value = "";
};

convertBtn.addEventListener("click", checkInputNumber);

inputNumber.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    convertBtn.click();
  }
});
