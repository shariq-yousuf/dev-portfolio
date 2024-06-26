const quizEl = document.querySelector("#quiz");
const nextBtn = document.querySelector("#next-btn");
const quizData = [
  {
    id: 1,
    question: "What is the largest planet in our solar system?",
    answers: {
      a: "Mars",
      b: "Jupiter",
      c: "Saturn",
      d: "Earth",
    },
    correctAnswer: "b",
  },
  {
    id: 2,
    question: "Which famous scientist developed the theory of relativity?",
    answers: {
      a: "Isaac Newton",
      b: "Stephen Hawking",
      c: "Galileo Galilei",
      d: "Albert Einstein",
    },
    correctAnswer: "d",
  },
  {
    id: 3,
    question: "Which country is known as the Land of the Rising Sun?",
    answers: {
      a: "China",
      b: "India",
      c: "Japan",
      d: "Thailand",
    },
    correctAnswer: "c",
  },
  {
    id: 4,
    question: "Who painted the famous work 'Mona Lisa'?",
    answers: {
      a: "Leonardo da Vinci",
      b: "Vincent van Gogh",
      c: "Pablo Picasso",
      d: "Michelangelo",
    },
    correctAnswer: "a",
  },
  {
    id: 5,
    question: "What is the capital city of Australia?",
    answers: {
      a: "Sydney",
      b: "Canberra",
      c: "Melbourne",
      d: "Brisbane",
    },
    correctAnswer: "b",
  },
];

let currentQuestionIndex = 0;
let userAnswer;
const correctAnswers = new Set();

const startQuiz = () => {
  renderQuestion(currentQuestionIndex);

  nextBtn.textContent = "Next";
  nextBtn.removeEventListener("click", startQuiz);
  nextBtn.addEventListener("click", nextQuestion);
};

const renderQuestion = (number) => {
  nextBtn.setAttribute("disabled", "disabled");

  const {
    id,
    question: que,
    answers: ans,
    correctAnswer: correct,
  } = quizData[number];

  quizEl.innerHTML = `
        <span class="text-base absolute right-0 top-0">
        ${id.toString().padStart(2, 0)}/
        ${quizData.length.toString().padStart(2, 0)}
        </span>
        <p class="question my-4 md:m-8">
          ${que}
        </p>
        <ul class="options w-11/12 mx-auto cursor-pointer">
          <li class="hover:bg-sky-300  rounded-3xl">
            <label class="cursor-pointer block px-4 py-2" for="opt-1">
            <input onclick="getUserAnswer(this)"
            class="me-2" type="radio" name="${id}" id="opt-1" value="${ans.a}"/>
            ${ans.a}</label>
          </li>
          <li class="hover:bg-sky-300 rounded-3xl">
            <label class="cursor-pointer block px-4 py-2" for="opt-2">
            <input onclick="getUserAnswer(this)"
            class="me-2" type="radio" name="${id}" id="opt-2" value="${ans.b}"/>
            ${ans.b}</label>
          </li>
          <li class="hover:bg-sky-300 rounded-3xl">
            <label class="cursor-pointer block px-4 py-2" for="opt-3">
            <input onclick="getUserAnswer(this)"
            class="me-2" type="radio" name="${id}" id="opt-3" value="${ans.c}"/>
            ${ans.c}</label>
          </li>
          <li class="hover:bg-sky-300 rounded-3xl">
            <label class="cursor-pointer block px-4 py-2" for="opt-4">
            <input onclick="getUserAnswer(this)"
            class="me-2" type="radio" name="${id}" id="opt-4" value="${ans.d}"/>
            ${ans.d}</label>
          </li>
        </ul>
      `;
};

function getUserAnswer(inputEl) {
  nextBtn.removeAttribute("disabled");

  userAnswer = inputEl.value;

  checkUserAnswer();
}

function checkUserAnswer() {
  if (
    userAnswer ===
    quizData[currentQuestionIndex].answers[
      quizData[currentQuestionIndex].correctAnswer
    ]
  ) {
    correctAnswers.add(userAnswer);
  }
}

const nextQuestion = () => {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
  } else {
    const percentageScore = (correctAnswers.size / quizData.length) * 100;

    quizEl.innerHTML = `${
      correctAnswers.size > 1 ? "Correct Answers:" : "Correct Answer:"
    } ${correctAnswers.size} out of ${quizData.length} <br/>
     Score: ${parseInt(percentageScore)}% <br/>
     `;

    if (correctAnswers.size < quizData.length) {
      quizEl.innerHTML += "Want to try again?";

      currentQuestionIndex = 0;

      nextBtn.textContent = "Take Quiz Again";
      nextBtn.removeEventListener("click", nextQuestion);
      nextBtn.addEventListener("click", startQuiz);
    } else {
      quizEl.innerHTML += `Congrats! You got all ${quizData.length} questions right.`;
      nextBtn.style.display = "none";
    }
  }
};

window.addEventListener("load", startQuiz);
