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
let wordFilteredArr;

const findCounts = () => {
  const inputText = textArea.value;

  if (!textArea.value) {
    wordFilteredArr = [];
  } else {
    const wordArr = inputText.trim().split(" ");
    wordFilteredArr = wordArr.filter(removeEmptyElements);
  }

  const sentArr = inputText.trim().split(".");
  const sentFilteredArr = sentArr.filter(removeEmptyElements);

  const paraArr = inputText.trim().split("\n");
  const paraFilteredArr = paraArr.filter(removeEmptyElements);

  wordCount = wordFilteredArr.length;
  const charCount = inputText.length;
  const sentCount = sentFilteredArr.length;
  const paraCount = paraFilteredArr.length;

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
      Math.ceil(wordCount / 240) < 2 ? "minute" : "minutes"
    }`;
  }
};

const findLongestWord = () => {
  let longestWord = "";

  for (const word of wordFilteredArr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  longestWordEl.textContent = longestWord.replaceAll(/\W/g, "");
};

const findPronouns = () => {
  const proFilteredArr = wordFilteredArr.filter((w) => {
    const word = w.toLowerCase();

    for (const pronoun of pronouns) {
      if (word !== pronoun) {
        continue;
      } else {
        return word === pronoun;
      }
    }

    return false;
  });

  const proCount = proFilteredArr.length;

  proCountEl.textContent = proCount;
};

textArea.addEventListener("input", () => {
  findCounts();
  findAvgTime();
  findLongestWord();
  findPronouns();
});
