const textArea = document.getElementById("input-text");
const wordCountEl = document.getElementById("word-count");
const charCountEl = document.getElementById("char-count");
const sentCountEl = document.getElementById("sent-count");
const paraCountEl = document.getElementById("para-count");
const proCountEl = document.getElementById("pro-count");
const avgTime = document.getElementById("avg-time");
const longestWordEl = document.getElementById("longest-word");
const pronouns = [
  "i",
  "we",
  "you",
  "he",
  "she",
  "it",
  "they",
  "me",
  "us",
  "her",
  "him",
  "them",
  "mine",
  "ours",
  "yours",
  "hers",
  "his",
  "theirs",
  "myself",
  "yourself",
  "herself",
  "himself",
  "itself",
  "ourselves",
  "yourselves",
  "themselves",
];

let wordCount = 0;
let charCount = 0;
let sentCount = 0;
let paraCount = 0;
let proCount = 0;

let wordFilteredArr;
let sentFilteredArr;
let paraFilteredArr;

const findCounts = () => {
  const inputText = textArea.value;

  if (!textArea.value) {
    wordFilteredArr = [];
    sentFilteredArr = [];
    paraFilteredArr = [];
  } else {
    const wordArr = inputText.trim().split(" ");
    wordFilteredArr = wordArr.filter(removeEmptyElements);

    const sentArr = inputText.trim().split(".");
    sentFilteredArr = sentArr.filter(removeEmptyElements);

    const paraArr = inputText.trim().split("\n");
    paraFilteredArr = paraArr.filter(removeEmptyElements);
  }

  charCount = inputText.length;
  wordCount = wordFilteredArr.length;
  sentCount = sentFilteredArr.length;
  paraCount = paraFilteredArr.length;

  wordCountEl.textContent = wordCount;
  charCountEl.textContent = charCount;
  sentCountEl.textContent = sentCount;
  paraCountEl.textContent = paraCount;
};

function removeEmptyElements(el) {
  return Boolean(el) === true;
}

const findAvgTime = () => {
  if (!textArea.value) {
    avgTime.textContent = "";
  } else {
    avgTime.textContent = `~${Math.ceil(wordCount / 240)} ${
      Math.ceil(wordCount / 240) === 1 ? "minute" : "minutes"
    }`;
  }
};

const findLongestWord = () => {
  if (!textArea.value) {
    longestWordEl.textContent = "";
  } else {
    let longestWord = "";

    for (const word of wordFilteredArr) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }

    longestWordEl.textContent = longestWord.replaceAll(/\W/g, "");
  }
};

textArea.addEventListener("input", () => {
  findCounts();
  findAvgTime();
  findLongestWord();
});
