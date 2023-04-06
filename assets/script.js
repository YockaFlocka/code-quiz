var startButton = document.querySelector("#start-button")

//  Question and answer objects
var qOne = {
  q: "Photosynthetic plankton are called?",
  aOne: "Green",
  aTwo: "Zooxanthelle",
  aThree: "Dirty",
  aFour: "Proifera"
}
var qTwo = {
  q: "Why is the sky blue?",
  aOne: "It was made that way",
  aTwo: "A giant threw paint",
  aThree: "Reflection of water on earth",
  aFour: "Greenhouse gasses"
}
var qThree = {
  q: "What do you take Tums for?",
  aOne: "Acid indegestion",
  aTwo: "Heartburn",
  aThree: "Sour stomach",
  aFour: "All of the above"
}
var qFour = {
  q: "Why is JS so hard?",
  aOne: "Functions",
  aTwo: "Arrays",
  aThree: "Loops",
  aFour: "All of the above"
}
var qFive = {
  q: "Highest height free fall jump?",
  aOne: "1,000 ft",
  aTwo: "10,000 ft",
  aThree: "100,000 ft",
  aFour: "135,898 ft"
}

//  List of questions to pull from
var qList = [qOne, qTwo, qThree, qFour, qFive];
var questionCounter = 0;

var count = 100;




// function to get rid of start quiz box
function startQuiz() {
  document.getElementById("start-screen").style.display = "none";  
}

// event listener for the next-button to go to next question when you click the next button
document.getElementById("next-button").addEventListener("click", function() {
  questionCounter++;
  document.getElementById("question1").innerHTML = qList[questionCounter].q;
})

// event listener for the start button
startButton.addEventListener("click", function() {
    startQuiz();
});
