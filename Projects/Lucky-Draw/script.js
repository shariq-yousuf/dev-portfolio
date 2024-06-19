const inputNames = document.getElementById("input-names");
const resultEl = document.getElementById("result");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const drawBtn = document.getElementById("draw-btn");
let names;

saveBtn.addEventListener("click", () => {
  if (inputNames.value) {
    names = inputNames.value.split("\n");
  } else {
    alert("Please enter names!");
  }
});

clearBtn.addEventListener("click", () => {
  inputNames.value = "";
});

drawBtn.addEventListener("click", () => {
  const drawIndex = Math.floor(Math.random() * names.length);
  const result = names[drawIndex];

  resultEl.textContent = result;

  names.splice(drawIndex, 1);
  inputNames.value = names.join("\n");
});
