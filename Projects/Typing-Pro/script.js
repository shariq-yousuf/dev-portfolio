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
  { keyName: "Backspace", id: "" },
  { keyName: "Tab", id: "" },
  { keyName: "Caps-Lock", id: "" },
  { keyName: "Enter", id: "" },
  { keyName: "Shift", id: "" },
  { keyName: "Ctrl", id: "" },
  { keyName: "Alt", id: "" },
  { keyName: "Cmd", id: "" },
  { keyName: "Space", id: " " },
];

const typingText = [
  "Lo   rem:;1 23'\\,.<>()#@#$%\"   ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit dignissimos ipsum corrupti odio dolorum ab architecto beatae, quae obcaecati reprehenderit dolores minima? Veniam nihil esse ipsam repellendus nam sint.",
];

const textToArr = typingText[0].split("");
let typingChars;
let charIndex = 0;
let previousHighlightKeyBtn;

// create keyboard keys
for (const row in keys) {
  const rowEl = document.createElement("div");

  keys[row].forEach((key) => {
    const keyEl = document.createElement("div");
    // Array.isArray(key) ? null : (keyEl.id = key);
    keyEl.id = key;

    specialLoop: for (const specialKey of specialKeys) {
      if (key === specialKey.keyName) {
        keyEl.classList.add(key);
        keyEl.id = specialKey.id;
        break specialLoop;
      }
    }

    keyEl.classList.add("key");
    keyEl.innerHTML = Array.isArray(key) ? `${key[1]}<br>${key[0]}` : `${key}`;

    rowEl.appendChild(keyEl);
  });

  keyboard.appendChild(rowEl);
}

const startTyping = () => {
  const keys = document.querySelectorAll(".key");

  textToArr.forEach(
    (char) => (typingField.innerHTML += `<span>${char}</span>`)
  );

  keys.forEach((key) => {
    key.addEventListener("click", () => {
      charIndex++;
      highlightChar();
      highlightKeyBtn(keys);
    });
  });

  highlightChar();
  highlightKeyBtn(keys);
};

const highlightChar = () => {
  typingChars = document.querySelectorAll("#typing-field span");

  //   typingChars.forEach((char) => char.classList.remove("highlight-char"));
  if (charIndex > 0) {
    typingChars[charIndex - 1].classList.remove("highlight-char");
  }
  typingChars[charIndex].classList.add("highlight-char");
};

const highlightKeyBtn = (keys) => {
  //   keys.forEach((key) => key.classList.remove("highlight-key-btn"));
  if (previousHighlightKeyBtn) {
    previousHighlightKeyBtn.classList.remove("highlight-key-btn");
  }

  const targetKeyBtn = Array.from(keys).find((key) => {
    const idArr = key.id.split("");

    return (
      typingChars[charIndex].textContent.toLowerCase() === idArr[0] ||
      typingChars[charIndex].textContent.toLowerCase() === idArr[2]
    );
  });

  targetKeyBtn.classList.add("highlight-key-btn");
  previousHighlightKeyBtn = targetKeyBtn;
};

startTyping();
