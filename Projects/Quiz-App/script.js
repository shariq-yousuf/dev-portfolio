const mainContainer = document.querySelector("#main-container");
const spinnerContainer = document.querySelector("#spinner-container");
const spinner = document.querySelector("#spinner");
const quizEl = document.querySelector("#quiz");
const nextBtn = document.querySelector("#next-btn");
const quizAgainBtn = document.createElement("button");

// const quizData = [
//   {
//     id: 1,
//     question: "What is the largest planet in our solar system?",
//     answers: {
//       a: "Mars",
//       b: "Jupiter",
//       c: "Saturn",
//       d: "Earth",
//     },
//     correctAnswer: "b",
//   },
//   {
//     id: 2,
//     question: "Which famous scientist developed the theory of relativity?",
//     answers: {
//       a: "Isaac Newton",
//       b: "Stephen Hawking",
//       c: "Galileo Galilei",
//       d: "Albert Einstein",
//     },
//     correctAnswer: "d",
//   },
//   {
//     id: 3,
//     question: "Which country is known as the Land of the Rising Sun?",
//     answers: {
//       a: "China",
//       b: "India",
//       c: "Japan",
//       d: "Thailand",
//     },
//     correctAnswer: "c",
//   },
//   {
//     id: 4,
//     question: "Who painted the famous work 'Mona Lisa'?",
//     answers: {
//       a: "Leonardo da Vinci",
//       b: "Vincent van Gogh",
//       c: "Pablo Picasso",
//       d: "Michelangelo",
//     },
//     correctAnswer: "a",
//   },
//   {
//     id: 5,
//     question: "What is the capital city of Australia?",
//     answers: {
//       a: "Sydney",
//       b: "Canberra",
//       c: "Melbourne",
//       d: "Brisbane",
//     },
//     correctAnswer: "b",
//   },
// ];
let quizData;
let currentQuestionIndex = 0;
let selectedElements = [];
const correctAnswers = new Set();
let score;
const resultData = [];

const url =
  "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple";

const getQuizData = async () => {
  spinnerContainer.appendChild(spinner);

  try {
    const response = await fetch(url);
    const result = await response.json();
    quizData = result.results;

    startQuiz(quizData);
    spinnerContainer.style.display = "none";
  } catch (e) {
    spinnerContainer.innerHTML = `
      <p class="text-xl text-center">There was a problem loading the quiz data. Please click the button below to try again.</p>
      <button id="retry-btn"
      class="px-4 py-2 md:px-7 md:py-3 text-xl rounded-xl hover:bg-indigo-600 mt-4 block w-full bg-indigo-700 text-white tansition-all duration-500">
      Retry</button>
    `;
    document.querySelector("#retry-btn").addEventListener("click", () => {
      spinnerContainer.innerHTML = "";
      getQuizData();
    });
  }
};

const startQuiz = (quizData) => {
  quizAgainBtn.style.display = "none";
  currentQuestionIndex = 0;
  correctAnswers.clear();
  renderQuestion(currentQuestionIndex, quizData);

  nextBtn.textContent = "Next";
  nextBtn.removeEventListener("click", showResult);
  nextBtn.addEventListener("click", nextQuestion);
};

const renderQuestion = (number, quizData) => {
  nextBtn.setAttribute("disabled", "disabled");

  quizData[number].id = number + 1;
  const { id, question, incorrect_answers, correct_answer } = quizData[number];
  const answers = [...incorrect_answers, correct_answer].sort();

  const quizHTML = `
        <span class="text-base absolute right-0 top-0">${id
          .toString()
          .padStart(2, 0)}/${quizData.length.toString().padStart(2, 0)}
        </span>
        <p class="question my-4 md:m-8">
          ${question}
        </p>
        <ul class="options w-11/12 mx-auto cursor-pointer">
          <li class="hover:bg-sky-300  rounded-3xl">
            <label class="cursor-pointer block px-4 py-2" for="Q-${id}-opt-1">
            <input onclick="getUserAnswer(this)"
            class="me-2" type="radio" name="${id}" id="Q-${id}-opt-1" 
            value="${answers[0]}"/>${answers[0]}</label>
          </li>
          <li class="hover:bg-sky-300 rounded-3xl">
            <label class="cursor-pointer block px-4 py-2" for="Q-${id}-opt-2">
            <input onclick="getUserAnswer(this)"
            class="me-2" type="radio" name="${id}" id="Q-${id}-opt-2" 
            value="${answers[1]}"/>${answers[1]}</label>
          </li>
          <li class="hover:bg-sky-300 rounded-3xl">
            <label class="cursor-pointer block px-4 py-2" for="Q-${id}-opt-3">
            <input onclick="getUserAnswer(this)"
            class="me-2" type="radio" name="${id}" id="Q-${id}-opt-3" 
            value="${answers[2]}"/>${answers[2]}</label>
          </li>
          <li class="hover:bg-sky-300 rounded-3xl">
            <label class="cursor-pointer block px-4 py-2" for="Q-${id}-opt-4">
            <input onclick="getUserAnswer(this)"
            class="me-2" type="radio" name="${id}" id="Q-${id}-opt-4" 
            value="${answers[3]}"/>${answers[3]}</label>
          </li>
        </ul>
      `;

  quizEl.innerHTML = quizHTML;
  resultData.push(quizHTML);

  if (currentQuestionIndex === quizData.length - 1) {
    nextBtn.textContent = "Submit";
  }
};

function getUserAnswer(inputEl) {
  nextBtn.removeAttribute("disabled");

  selectedElements.push(inputEl);
  checkUserAnswer(inputEl.value);
}

function checkUserAnswer(inputValue) {
  if (inputValue === quizData[currentQuestionIndex].correct_answer) {
    correctAnswers.add(inputValue);
  }
}

const nextQuestion = () => {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex, quizData);
  } else {
    const percentageScore = (correctAnswers.size / quizData.length) * 100;

    score = `${
      correctAnswers.size > 1 ? "Correct Answers:" : "Correct Answer:"
    } ${correctAnswers.size} out of ${quizData.length} <br/>
     Score: ${parseInt(percentageScore)}% <br/>
     `;
    quizEl.innerHTML = score;

    nextBtn.textContent = "Show Result";
    nextBtn.removeEventListener("click", nextQuestion);
    nextBtn.addEventListener("click", showResult);

    if (correctAnswers.size < quizData.length) {
      quizEl.innerHTML += "Want to try again?";

      quizAgainBtn.style.display = "block";
      quizAgainBtn.textContent = "Take Quiz Again";
      quizAgainBtn.classList.add(
        "px-4",
        "py-2",
        "md:px-7",
        "md:py-3",
        "text-xl",
        "font-bold",
        "rounded-xl",
        "hover:bg-indigo-600",
        "mt-4",
        "block",
        "ms-auto",
        "bg-indigo-700",
        "text-white",
        "tansition-all",
        "duration-500"
      );
      quizAgainBtn.addEventListener("click", () => {
        startQuiz(quizData);
      });
      mainContainer.appendChild(quizAgainBtn);
    } else {
      quizEl.innerHTML += `Congrats! You got all ${quizData.length} questions right.`;
    }
  }
};

const showResult = () => {
  mainContainer.innerHTML = "";
  const scoreEl = document.createElement("div");
  scoreEl.classList.add("text-xl", "font-bold", "m-4", "text-center");
  scoreEl.innerHTML = score;
  mainContainer.appendChild(scoreEl);

  let i = 0;

  resultData.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("text-sky-800", "relative", "font-bold", "text-xl");
    div.innerHTML = item;
    const showCorrectAnsEl = document.createElement("p");
    showCorrectAnsEl.classList.add("m-2", "text-right", "text-green-700");
    showCorrectAnsEl.innerHTML = `Correct Answer: ${quizData[i].correct_answer}`;
    div.appendChild(showCorrectAnsEl);
    mainContainer.appendChild(div);
    const inputNodes = document.querySelectorAll("input");
    const liNodes = document.querySelectorAll("li");
    for (const node of inputNodes) {
      for (const selected of selectedElements) {
        if (selected.getAttribute("id") === node.getAttribute("id")) {
          if (correctAnswers.has(node.value)) {
            node.parentElement.classList.add(
              "bg-green-300",
              "rounded-3xl",
              "border-2",
              "border-solid",
              "border-green-800"
            );
            showCorrectAnsEl.style.display = "none";
          } else {
            node.parentElement.classList.add(
              "bg-red-300",
              "rounded-3xl",
              "border-2",
              "border-solid",
              "border-red-900"
            );
            showCorrectAnsEl.style.display = "block";
          }
        }
      }

      node.setAttribute("disabled", "disabled");
    }
    for (const node of liNodes) {
      node.classList.remove("hover:bg-sky-300");
    }
    i += 1;
  });
};

window.addEventListener("load", getQuizData);
