const question = document.querySelector("#question");
const choices = document.querySelectorAll(".choice-text");
const scoreText = document.querySelector("#score");

let curentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What is Your Favorite Language",
    choice1: "JavaScript",
    choice2: "CSS",
    choice3: "HTML",
    choice4: "All of The Above",
    answer: 4,
  },
];

const SCORE_POINTS = 100;
const MAX_question = 4;

startGame = () => {
  questionCounter = 0;
  score = 0;
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCOunter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window, location.assign("/end.hmtl");
  }
};
