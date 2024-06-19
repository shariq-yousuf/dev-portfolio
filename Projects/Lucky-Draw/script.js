const inputNames = document.getElementById("input-names");
const outputEl = document.getElementById("result");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const drawBtn = document.getElementById("draw-btn");
const declaration = document.styleSheets[0].cssRules[1];
let names;

saveBtn.addEventListener("click", () => {
  if (inputNames.value) {
    names = inputNames.value.split("\n");
    drawBtn.style.opacity = "1";
  } else {
    alert("Please enter names!");
  }
});

clearBtn.addEventListener("click", () => {
  inputNames.value = "";
  outputEl.innerHTML = "";
});

drawBtn.addEventListener("click", () => {
  outputEl.innerHTML = "";
  const drawIndex = Math.floor(Math.random() * names.length);
  const result = names[drawIndex];

  outputEl.style.setProperty("animation-name", "draw");
  declaration.style.setProperty("--percentage", `${names.length * 100}%`);
  names.forEach((item) => {
    outputEl.innerHTML += item + "<br>";
  });

  setTimeout(() => {
    outputEl.style.removeProperty("animation-name");
    outputEl.textContent = result;

    names.splice(drawIndex, 1);
    inputNames.value = names.join("\n");
  }, 8000);
});
