const inputEl = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultEl = document.getElementById("result");

function checkPalindrome() {
  const inputText = inputEl.value;
  const cleanedInputText = inputText
    .trim()
    .replaceAll(/[\W_]/g, "")
    .toLowerCase();
  const reverseInputText = cleanedInputText.split("").reverse().join("");

  if (!inputText) {
    alert("Please input a value");
  } else if (cleanedInputText === reverseInputText) {
    resultEl.textContent = `${inputText} is a palindrome`;
  } else {
    resultEl.textContent = `${inputText} is not a palindrome`;
  }
}

checkBtn.addEventListener("click", checkPalindrome);
inputEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    checkBtn.click();
  }
});
