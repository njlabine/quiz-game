const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const scoreText = document.querySelector("#score");

let curentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What is Your Favorite Language?",
    choice1: "JavaScript",
    choice2: "CSS",
    choice3: "HTML",
    choice4: "All of the Above",
    answer: 4,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
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
};
