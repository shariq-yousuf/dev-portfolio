const typingField = document.querySelector("#typing-field");
const keyboard = document.querySelector("#keyboard");

const keys = {
  numsRow: [
    ["`", "~"],
    ["1", "!"],
    ["2", "@"],
    ["3", "#"],
    ["4", "$"],
    ["5", "%"],
    ["6", "^"],
    ["7", "&"],
    ["8", "*"],
    ["9", "("],
    ["0", ")"],
    ["-", "_"],
    ["=", "+"],
    "Backspace",
  ],
  tabRow: [
    "Tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    ["[", "{"],
    ["]", "}"],
    ["\\", "|"],
  ],
  capsRow: [
    "Caps-Lock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    [";", ":"],
    ["'", '"'],
    "Enter",
  ],
  shiftRow: [
    "Shift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    [",", "<"],
    [".", ">"],
    ["/", "?"],
    "Shift",
  ],
  ctrlRow: ["Ctrl", "Alt", "Cmd", "Space", "Cmd", "Alt", "Ctrl"],
};

const specialKeys = [
  "Backspace",
  "Tab",
  "Caps-Lock",
  "Enter",
  "Shift",
  "Ctrl",
  "Alt",
  "Cmd",
  "Space",
];

const typingText = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit dignissimos ipsum corrupti odio dolorum ab architecto beatae, quae obcaecati reprehenderit dolores minima? Veniam nihil esse ipsam repellendus nam sint.",
];

const textToArr = typingText[0].split("");
let charIndex = 0;

// create keyboard keys
for (const row in keys) {
  const rowDiv = document.createElement("div");

  keys[row].forEach((key) => {
    const keyDiv = document.createElement("div");

    specialLoop: for (const specialKey of specialKeys) {
      if (key === specialKey) {
        keyDiv.classList.add(key);
        break specialLoop;
      }
    }

    keyDiv.classList.add("key");
    keyDiv.innerHTML = Array.isArray(key) ? `${key[1]}<br>${key[0]}` : `${key}`;

    rowDiv.appendChild(keyDiv);
  });

  keyboard.appendChild(rowDiv);
}

// start typing and add text to typing field
const startTyping = () => {
  const keys = document.querySelectorAll(".key");

  textToArr.forEach(
    (char) => (typingField.innerHTML += `<span>${char}</span>`)
  );

  keys.forEach((key) => {
    key.addEventListener("click", () => {
      charIndex++;
      highlightChar();
    });
  });

  highlightChar();
};

const highlightChar = () => {
  const typingChars = document.querySelectorAll("#typing-field span");

  typingChars.forEach((char) => char.classList.remove("highlight-char"));
  typingChars[charIndex].classList.add("highlight-char");
  //   typingChars[charIndex].style.background = "#f7f795ca";
  //   typingChars[charIndex].style.borderBottom = "thick solid yellow";
  //   typingChars[charIndex].style.borderRadius = "5px";
  //   typingChars[charIndex].style.padding = "0 3px";
};

startTyping();
