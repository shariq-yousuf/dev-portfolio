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
let isOptionChecked = false;
const correctAnswers = new Set();

const renderQuestion = (number) => {
  isOptionChecked = false;

  const {
    id,
    question: que,
    answers: ans,
    correctAnswer: correct,
  } = quizData[number];

  quizEl.innerHTML = `
        <p class="question my-4 md:m-8">
          ${que}
        </p>
        <div class="options w-11/12 mx-auto cursor-pointer">
          <div class="hover:bg-sky-300 px-4 py-2 rounded-3xl">
            <input onclick="getUserAnswer(this)" class="me-2" type="radio" name="${id}" id="opt-1" value="${ans.a}" />
            <label class="cursor-pointer" for="opt-1">${ans.a}</label>
          </div>
          <div class="hover:bg-sky-300 px-4 py-2 rounded-3xl">
            <input onclick="getUserAnswer(this)" class="me-2" type="radio" name="${id}" id="opt-2" value="${ans.b}" />
            <label class="cursor-pointer" for="opt-2">${ans.b}</label>
          </div>
          <div class="hover:bg-sky-300 px-4 py-2 rounded-3xl">
            <input onclick="getUserAnswer(this)" class="me-2" type="radio" name="${id}" id="opt-3" value="${ans.c}" />
            <label class="cursor-pointer" for="opt-3">${ans.c}</label>
          </div>
          <div class="hover:bg-sky-300 px-4 py-2 rounded-3xl">
            <input onclick="getUserAnswer(this)" class="me-2" type="radio" name="${id}" id="opt-4" value="${ans.d}" />
            <label class="cursor-pointer" for="opt-4">${ans.d}</label>
          </div>
        </div>
        `;
};

function getUserAnswer(inputEl) {
  userAnswer = inputEl.value;
  isOptionChecked = true;

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

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < quizData.length - 1) {
    if (isOptionChecked) {
      currentQuestionIndex++;
      renderQuestion(currentQuestionIndex);
    } else {
      alert("Please choose one answer!");
    }
  } else {
    quizEl.innerHTML = `${
      correctAnswers.size > 1 ? "Correct Answers:" : "Correct Answer:"
    } ${correctAnswers.size}`;
    nextBtn.style.display = "none";

    // if (correctAnswers.size < quizData.length) {
    //   nextBtn.innerHTML = "Take Quiz Again";
    //   currentQuestionIndex = 0;
    // } else {
    //   nextBtn.style.display = "none";
    // }
  }
});

window.addEventListener("load", () => renderQuestion(currentQuestionIndex));
