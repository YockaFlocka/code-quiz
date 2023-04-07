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

var winCounter = 0;
var lossCounter = 0;

// function to decrement the timer and lose when it hits 0
function startTimer() {
  countdown = setInterval(function() {
    secondsRemaining--;
    timerCountEl.textContent = "Time Remaining: " + secondsRemaining;
    if (secondsRemaining === 0) {
      clearInterval(countdown);
      endGame();
    }
  }, 1000)
}

  // removes the previous answer items
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }


function checkAnswer(event) {
  // validate answer
  var correctAnswer = questions[questionCounter].answer;
  if (event.target.textContent === correctAnswer) {
    winCounter++;
  } else {
    lossCounter++;
  }
  // console.log(event.target.textContent)   // answer user clicks on
  // console.log(correctAnswer);   // correct answer
  
  // increment questionCounter and removes previous answer elements
  questionCounter++;
  removeAllChildNodes(answersEl);
  // If there are no more questions: (if-else)
  if (questions[questionCounter] === undefined) {
    endGame();
  } else {
    generateQuestion();
  } 
}


function generateQuestion() {
  // generate the current question
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

// switch to hi-score screen
function endGame() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("hiScore-page").style.display = "block";
  
}



// event listener for the start button
startButtonEl.addEventListener("click", function() {
    startQuiz();
});
