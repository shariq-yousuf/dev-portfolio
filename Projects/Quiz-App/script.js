const quizEl = document.querySelector("#quiz");
const nextBtn = document.querySelector("#next-btn");

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
let userAnswer;
const correctAnswers = new Set();

const url =
  "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple";

const getQuizData = async () => {
  const response = await fetch(url);
  const result = await response.json();
  quizData = result.results;

  startQuiz(quizData);
};

const startQuiz = (quizData) => {
  currentQuestionIndex = 0;
  correctAnswers.clear();
  renderQuestion(currentQuestionIndex, quizData);

  nextBtn.textContent = "Next";
  nextBtn.removeEventListener("click", startQuiz);
  nextBtn.addEventListener("click", nextQuestion);
};

const renderQuestion = (number, quizData) => {
  nextBtn.setAttribute("disabled", "disabled");

  quizData[number].id = number + 1;
  const { id, question, incorrect_answers, correct_answer } = quizData[number];
  const answers = [...incorrect_answers, correct_answer].sort();

  quizEl.innerHTML = `
        <span class="text-base absolute right-0 top-0">${id
          .toString()
          .padStart(2, 0)}/${quizData.length.toString().padStart(2, 0)}
        </span>
        <p class="question my-4 md:m-8">
          ${question}
        </p>
        <ul class="options w-11/12 mx-auto cursor-pointer">
          <li class="hover:bg-sky-300  rounded-3xl">
            <label class="cursor-pointer block px-4 py-2" for="opt-1">
            <input onclick="getUserAnswer(this)"
            class="me-2" type="radio" name="${id}" id="opt-1" value="${
    answers[0]
  }"/>
            ${answers[0]}</label>
          </li>
          <li class="hover:bg-sky-300 rounded-3xl">
            <label class="cursor-pointer block px-4 py-2" for="opt-2">
            <input onclick="getUserAnswer(this)"
            class="me-2" type="radio" name="${id}" id="opt-2" value="${
    answers[1]
  }"/>
            ${answers[1]}</label>
          </li>
          <li class="hover:bg-sky-300 rounded-3xl">
            <label class="cursor-pointer block px-4 py-2" for="opt-3">
            <input onclick="getUserAnswer(this)"
            class="me-2" type="radio" name="${id}" id="opt-3" value="${
    answers[2]
  }"/>
            ${answers[2]}</label>
          </li>
          <li class="hover:bg-sky-300 rounded-3xl">
            <label class="cursor-pointer block px-4 py-2" for="opt-4">
            <input onclick="getUserAnswer(this)"
            class="me-2" type="radio" name="${id}" id="opt-4" value="${
    answers[3]
  }"/>
            ${answers[3]}</label>
          </li>
        </ul>
      `;

  if (currentQuestionIndex === quizData.length - 1) {
    setTimeout(() => {
      nextBtn.textContent = "Submit";
    }, 500);
  }
};

function getUserAnswer(inputEl) {
  nextBtn.removeAttribute("disabled");

  userAnswer = inputEl.value;
  checkUserAnswer();
}

function checkUserAnswer() {
  if (userAnswer === quizData[currentQuestionIndex].correct_answer) {
    correctAnswers.add(userAnswer);
  }
}

const nextQuestion = () => {
  console.log(quizData);
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex, quizData);
  } else {
    const percentageScore = (correctAnswers.size / quizData.length) * 100;

    quizEl.innerHTML = `${
      correctAnswers.size > 1 ? "Correct Answers:" : "Correct Answer:"
    } ${correctAnswers.size} out of ${quizData.length} <br/>
     Score: ${parseInt(percentageScore)}% <br/>
     `;

    if (correctAnswers.size < quizData.length) {
      quizEl.innerHTML += "Want to try again?";

      nextBtn.textContent = "Take Quiz Again";
      nextBtn.removeEventListener("click", nextQuestion);
      nextBtn.addEventListener("click", () => {
        startQuiz(quizData);
      });
    } else {
      quizEl.innerHTML += `Congrats! You got all ${quizData.length} questions right.`;
      nextBtn.style.display = "none";
    }
  }
};

window.addEventListener("load", getQuizData);
