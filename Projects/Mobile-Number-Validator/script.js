const inputEl = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const resultEl = document.querySelector("#results-div");
const selectEl = document.querySelector("#select-country");

const USANumberFormats = [
  /^(1\s)?([0-9]{3})(\s+|-)?([0-9]{3})(\s+|-)?([0-9]{4})$/,
  /^1?\s?(\([0-9]{3}\))(\s+|-)?([0-9]{3})(\s+|-)?([0-9]{4})$/,
];

const PakNumberFormats = [
  /^((0092|\+92)(\s+|-)?|0)3[0-4][0-9](\s+|-)?[0-9]{7}$/,
  /^((0092|\+92)(\s+|-)?|0)355(\s+|-)?[0-9]{7}$/,
  /^((0092|\+92)(\s+|-)?|0)370(\s+|-)?[0-9]{7}$/,
];

const checkUserInput = () => {
  const inputValue = inputEl.value.trim();

  if (!inputValue) {
    resultEl.textContent = "Please provide a phone number!";
  } else {
    let formats = PakNumberFormats;
    let country = "Pak";

    if (selectEl.value === "usa") {
      formats = USANumberFormats;
      country = "US";
    }

    for (const regex of formats) {
      const isValid = regex.test(inputValue);
      if (isValid) {
        resultEl.innerHTML = `Valid ${country} number: <br> ${inputEl.value}`;
        break;
      } else {
        resultEl.innerHTML = `Invalid ${country} number: <br> ${inputEl.value}`;
      }
    }
  }

  inputEl.value = "";
};

checkBtn.addEventListener("click", checkUserInput);
clearBtn.addEventListener("click", () => {
  resultEl.textContent = "";
  inputEl.value = "";
});
inputEl.addEventListener("keydown", (e) => {
  const typingAlphabets = /^[a-z~!@#\$%\^&\*_=\[\]{}\\|/\?\.,<>;:'"]$/i.test(
    e.key
  );
  const numbers = /^[0-9]$/.test(e.key);
  console.log(e.key, typeof e.key);
  if (e.key === "Enter") {
    e.preventDefault();
    checkUserInput();
  } else if (typingAlphabets) {
    e.preventDefault();
  } else if (numbers) {
    resultEl.textContent = "";
  }
});
selectEl.addEventListener("change", () => {
  clearBtn.click();
});
