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
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    ["[", "{"],
    ["]", "}"],
    ["\\", "|"],
  ],
  capsRow: [
    "CapsLock",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    [";", ":"],
    ["'", '"'],
    "Enter",
  ],
  shiftRow: [
    "Shift",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
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
  { keyName: "CapsLock", id: "CapsLock" },
  { keyName: "Enter", id: "" },
  { keyName: "Shift", id: "" },
  { keyName: "Ctrl", id: "" },
  { keyName: "Alt", id: "" },
  { keyName: "Cmd", id: "" },
  { keyName: "Space", id: " " },
];

const typingText = [
  "Ready to test your typing skills? This quick challenge will assess your accuracy and speed. Focus on hitting the right keys without sacrificing speed. Don't worry about mistakes - the goal is to type as many words as possible. Let's see how fast your fingers can fly!",
];

const textToArr = typingText[0].split("");
let typingChars;
let charIndex = 0;
let previousHighlightKeyBtn;
let isCapsLockOn = false;

// create keyboard keys
for (const row in keys) {
  const rowEl = document.createElement("div");

  keys[row].forEach((key) => {
    const keyEl = document.createElement("div");
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

  highlightChar();
  findKeyBtn(keys);
  highlightShiftBtn(keys[41]);
};

const highlightChar = () => {
  typingChars = document.querySelectorAll("#typing-field span");

  //   typingChars.forEach((char) => char.classList.remove("highlight-char"));
  if (charIndex > 0) {
    typingChars[charIndex - 1].classList.remove("highlight-char");
  }
  typingChars[charIndex].classList.add("highlight-char");
};

const findKeyBtn = (keys) => {
  const targetKeyBtn = Array.from(keys).find((key) => {
    const idArr = key.id.toLowerCase().split("");
    return (
      typingChars[charIndex].textContent.toLowerCase() === idArr[0] ||
      typingChars[charIndex].textContent.toLowerCase() === idArr[2]
    );
  });

  highlightKeyBtn(targetKeyBtn);
};

const highlightKeyBtn = (key) => {
  if (previousHighlightKeyBtn) {
    previousHighlightKeyBtn.classList.remove("highlight-key-btn");
  }

  key.classList.add("highlight-key-btn");
  previousHighlightKeyBtn = key;
};

const highlightShiftBtn = (key) => {
  if (
    typingChars[charIndex].textContent ===
    typingChars[charIndex].textContent.toUpperCase()
  ) {
    // highlight the shift key, in keys nodelist the shift key is on index 41
    key.classList.add("highlight-key-btn");
  } else {
    key.classList.remove("highlight-key-btn");
  }
};

window.addEventListener("keydown", (e) => {
  const keys = document.querySelectorAll(".key");
  const pressedKey = e.key;

  if (
    pressedKey !== "Shift" &&
    pressedKey !== "Alt" &&
    pressedKey !== "Control" &&
    pressedKey !== "CapsLock"
  ) {
    if (pressedKey === typingChars[charIndex].textContent) {
      const currentChar = typingChars[charIndex];
      currentChar.classList.add("correct");
      setTimeout(() => currentChar.classList.remove("correct"), 300);
    } else {
      const currentChar = typingChars[charIndex];
      currentChar.classList.add("wrong");
      setTimeout(() => currentChar.classList.remove("wrong"), 300);
    }

    charIndex++;
    highlightChar();
    findKeyBtn(keys);
    highlightShiftBtn(keys[41]);
  } else if (pressedKey === "CapsLock") {
    // highlight the capslock key, in keys nodelist the capslock key is on index 28
    keys[28].classList.toggle("highlight-key-btn");

    isCapsLockOn ? (isCapsLockOn = false) : (isCapsLockOn = true);
    isCapsLockOn ? alert("Caps Lock is on!") : null;
  } else {
    e.preventDefault();
  }
});

startTyping();
