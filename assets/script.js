var startButtonEl = document.querySelector("#start-button");
var quizTitleEl = document.querySelector("#question-title");
var answersEl = document.querySelector('#answers');
var timerCountEl = document.querySelector('.timer-count');

// Array of objects that holds the questions, choices, and answer
var questions = [
  {
  q: "Photosynthetic plankton are called?",
  choices: ["Green", "Zooxanthelle", "Dirty", "Proifera"],
  answer: "Zooxanthelle"
  },
  {
  q: "Why is the sky blue?",
  choices: ["It was made that way", "A giant threw paint", "Reflection of water on earth", "Greenhouse gasses"],
  answer: "Reflection of water on earth"
  },
  {
    q: "What do you take Tums for?",
    choices: ["Acid indegestion", "Heartburn", "Sour stomach", "All of the above"],
    answer: "All of the above"
  },
  {
    q: "Why is JS so hard?",
  choices: ["Functions", "Arrays", "Loops", "All of the above"],
  answer: "All of the above"
  },
  {
    q: "Highest height free fall jump?",
  choices: ["1,000 ft", "10,000 ft", "100,000 ft", "135,898 ft"],
  answer: "135,898 ft"
  }
]


var secondsRemaining = 5;
var countdown;

var questionCounter = 0;
var ansCounter = 0;



// function to decrement the timer and lose when it hits 0
function startTimer() {
  countdown = setInterval(function() {
    secondsRemaining--;
    timerCountEl.textContent = "Time Remaining: " + secondsRemaining;
    if (secondsRemaining === 0) {
      clearInterval(countdown);
      // endGame();
    }
  }, 1000)
}


function checkAnswer() {
  // validate answer

  // increment questionCounter/answerCounter

  // are the questions done? (if-else)

  // run generateQuestion() again

  console.log("test")
}


function generateQuestion() {
  // generates the current question
  var currentQuestion = questions[questionCounter];
  var choicesTitle = currentQuestion.q;
  quizTitleEl.textContent = choicesTitle;
  // generate the possible answers
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var temp = document.createElement("li");
    temp.textContent = currentQuestion.choices[i];
    temp.onclick = checkAnswer;
    temp.setAttribute('class', 'list-item');
    answersEl.appendChild(temp);
  }
}


// function to get rid of starting quiz box, show question and choices, start the timer
function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";  
  generateQuestion();
  startTimer();
}


function endGame() {

}



// event listener for the next-button to go to next question and answers
// document.getElementById("next-button").addEventListener("click", function() {
//   questionCounter++;
//   ansCounter++;
//   document.getElementById("question-title").innerHTML = qList[questionCounter].q;
//   document.getElementById("list-item").innerHTML = qList[ansCounter].aOne;
// })

// event listener for the start button
startButtonEl.addEventListener("click", function() {
    startQuiz();
});
