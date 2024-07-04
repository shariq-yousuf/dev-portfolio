const inputEl = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const resultEl = document.querySelector("#results-div");

const USANumberFormats = [
  /^(1\s)?([0-9]{3})[\s-]?([0-9]{3})[\s-]?([0-9]{4})$/,
  /^1?\s?(\([0-9]{3}\))[\s-]?([0-9]{3})[\s-]?([0-9]{4})$/,
];

// const PakNumberFormat = [/^[(0092)(\+92)(0)][0-9]{3}[\s-]?[0-9]{7}$/];

const checkUserInput = () => {
  const inputValue = inputEl.value.trim();

  if (!inputValue) {
    alert("Please provide a phone number");
  } else {
    for (const regex of USANumberFormats) {
      const isValid = regex.test(inputValue);
      if (isValid) {
        resultEl.innerHTML = `Valid US number: <br> ${inputEl.value}`;
        break;
      } else {
        resultEl.innerHTML = `Invalid US number: <br> ${inputEl.value}`;
      }
    }
  }

  inputEl.value = "";
};

checkBtn.addEventListener("click", checkUserInput);
clearBtn.addEventListener("click", () => {
  resultEl.textContent = "";
});
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkUserInput();
  }
});
