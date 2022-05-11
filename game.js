const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const scoreText = document.querySelector("#score");
const timer = document.querySelector(".timer");
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

let curentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What is Your Favorite Language?",
    choices: ["JavaScript", "CSS", "HTML", "All of the Above"],
    answer: 3,
  },
];
// add to function
questionOne = (choice) => {
  debugger;
  const isCorrect = choice === 4;
  debugger;
  if (isCorrect) {
    scoreText.innerHTML = SCORE_POINTS;
    debugger;
  } else {
    // if incorrect, subtract time
  }
  //   hide question and show next question
};

startTimer = () => {
  debugger;
  var timeLeft = 30;
  debugger;

  var timerId = setInterval(countdown, 1000);
  debugger;
  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(timerId);
      doSomething();
    } else {
      timer.innerHTML = timeLeft + " seconds remaining";
      timeLeft--;
    }
  }

  function doSomething() {
    alert("Hi");
  }
};

startGame = () => {
  startTimer();

  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window, location.assign("/end.hmtl");
  }

  questionCounter++;
  progressText.innerText = "Question ${questionCounter} of ${MAX_QUESTIONS}";

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
};
