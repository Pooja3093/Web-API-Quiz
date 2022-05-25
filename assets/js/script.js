// Questions that will be asked
var questionSet = [{
  question: "Web API supports which of the following protocol?",
  choices: ["TCP", "HTTP", "Soap", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
  choices: ["Javascript", "terminal / bash", "for loops", "console log"],
  correctAnswer: "console log"
},
{
  question: "Web API uses which of the following open-source library for JSON serialization?",
  choices: ["Json.NET", "JsonFormatter.NET", "GetJson.NET", "None of the above"], 
  correctAnswer: "Json.NET"
},
{
  question: "Which of the following action method names are valid to handle HTTP GET request?",
  choices: ["Get()", "GetStudent()", "GetStudentAll()", "All of the above"],
  correctAnswer: "All of the above"
},
{
  question: "Web API uses which of the following NET framework?",
  choices: [".NET 2.0", ".NET 4.0", ".NET 3.5", ".NET 3.0"],
  correctAnswer: ".NET 4.0"
}
];

var startButton = document.querySelector(".start-button");
var optionContainer = document.querySelector(".option-container");
var timerElement = document.querySelector(".timer-count");
var questionContainer = document.querySelector(".question-container");
var ulCreate = document.querySelector("#options");
var op1 = document.querySelector("#op1");
var op2 = document.querySelector("#op2");
var op3 = document.querySelector("#op3");
var op4 = document.querySelector("#op4");

var timer;
var timerCount;
var show;
var penalty =10;
var num = [0,1,2,3,4];
var index = 0;
var userScore;
var userInitials;
var storedInitials;
var storedScores;


// Render question on screen on the click of Start button
function renderQuestion(){
  // Start timer
  startTimer();
  displayQuestion(index);
}


// Start timer from 60 seconds
function startTimer() {
  // Sets timer
  timerCount = 60;
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      alert("Times up!");
      clearInterval(timer);
      gameOver();
      return;
    }
  }, 1000);
  return;
}


// Display question and options
function displayQuestion(index){
  // Clear existing data on display
  questionContainer.textContent = "";
  ulCreate.textContent = "";
  // For loop to loop through all questions in array
  for (var i = 0; i < questionSet.length; i++) {
      // Appends question only
      var userQuestion = questionSet[index].question;
      var userChoices = questionSet[index].choices;
      questionContainer.textContent = userQuestion;
  }
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    listItem.setAttribute('style','list-style-type:none; background-color:lightblue; margin: 5px; text-align:center; border-style:rounded; cursor:grab');
    questionContainer.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", (checkAnswer));
  })
}


// Check whether answer is correct and penalize if not
function checkAnswer(event){
  var userAnswer = event.target;
  // Check for wrong answer and penalize 10 seconds if so
  if(userAnswer.textContent != questionSet[index].correctAnswer){
    timerCount = timerCount - penalty;
    // If 
    if(timerCount <= 0){
      alert("Times Up!");
      clearInterval(timer);
      gameOver();
      return;
    }
  }
  index++;
  // If all questions are answered, stop timer and get score
  if (index >= questionSet.length) {
    userScore = timerCount;
    clearInterval(timer);
    alert("Quiz over!");
    gameOver();
    return;
  } else {
      displayQuestion(index);
  }
}


// Stores the scores in local storage
function gameOver() {
  userInitials = prompt("Please enter your initials.");
  userScore = timerCount;

  // Reset timer and display
  timerCount = 0;
  timerElement.textContent = timerCount;

  // // Clear quiz container
  // questionContainer.textContent = "";
  // ulCreate.textContent = "";

  // Get stored scores and compare for highscore
  storedScores = localStorage.getItem("HighScore");
  storedInitials = localStorage.getItem("Initials");
  if(storedScores === null && storedInitials === null){
    alert("Congratulations! You made a new high score: " + userScore);
    localStorage.setItem("HighScore", userScore);
    localStorage.setItem("Initials", userInitials);
  } else if(userScore >= storedScores){
    alert("Congratulations! You made a new high score: " + userScore);
    localStorage.setItem("HighScore", userScore);
    localStorage.setItem("Initials", userInitials);
  } else {
    alert("Your Score: " + userScore + "\n" + "HighScore: " + storedScores + " by " + storedInitials);
  }
}



// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", renderQuestion);

