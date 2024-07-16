const typingField = document.querySelector("#typing-field");
const keyboard = document.querySelector("#keyboard");

const typingText = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit dignissimos ipsum corrupti odio dolorum ab architecto beatae, quae obcaecati reprehenderit dolores minima? Veniam nihil esse ipsam repellendus nam sint.",
];

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

typingField.innerHTML = typingText[0];

// console.log(document.querySelectorAll(".key"));
