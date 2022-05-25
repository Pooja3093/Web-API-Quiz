// Questions that will be asked
var questionSet = [{
  question: "Web API supports which of the following protocol?",
  choices: ["TCP", "HTTP", "Soap", "All of the above"],
  correct: "4"
},
{
  question: "Web API supports which of the following request/response data formats by default?",
  choices: ["JSON", "XML", "BSON", "All of the above"],
  correct: "4"
},
{
  question: "Web API uses which of the following open-source library for JSON serialization?",
  choices: ["Json.NET", "JsonFormatter.NET", "GetJson.NET", "None of the above"], 
  correct: "1"
},
{
  question: "Which of the following action method names are valid to handle HTTP GET request?",
  choices: ["Get()", "GetStudent()", "GetStudentAll()", "All of the above"],
  correct: "4"
},
{
  question: "Web API uses which of the following NET framework?",
  choices: [".NET 2.0", ".NET 3.0", ".NET 3.5", ".NET 4.0"],
  correct: "4"
}
];

var startButton = document.querySelector(".start-button");
var optionContainer = document.querySelector(".option-container");
var timerElement = document.querySelector(".timer-count");
var q = document.querySelector(".question-container");
var op1 = document.querySelector("#op1");
var op2 = document.querySelector("#op2");
var op3 = document.querySelector("#op3");
var op4 = document.querySelector("#op4");

var timer;
var timerCount;
var answer;
var show;
var penalty =10;
var num = [0,1,2,3,4];

// Shuffle questioSet object for random selection
function shuffle(questionSet) {
  for (var i = 0; i < questionSet.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (questionSet.length - i));

      var temp = questionSet[j];
      questionSet[j] = questionSet[i];
      questionSet[i] = temp;
  }
  return questionSet;
}


var shuffledQuestionSet = shuffle(questionSet);


function diaplayQuestion(abc){
  q.textContent = abc.question;
  op1.textContent = abc.option1;
  op2.textContent = abc.option2;
  op3.textContent = abc.option3;
  op4.textContent = abc.option4;
  optionContainer.addEventListener("click", checkAnswer , {once: true});
  return;
  choice.forEach(function (newItem) {
    listItem.textContent = newItem;
    questionsDiv.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", (compare));
})
}


function checkAnswer(event){
  answer = event.target;
  // Check for wrong answer and penalize 10 seconds if so
  if(answer.value != show.correct){
    timerCount = timerCount - penalty;
    if(timerCount <= 0){
      gameOver();
    }
  }
  return;
}


// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timerCount = 60;
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      gameOver();
    }
  }, 1000);
  return;
}

// Render question on screen
function renderQuestion(){
  // Start timer
  startTimer();

  if(timerCount >= 0){
    for(i = 0; i < shuffledQuestionSet.length; i++) {
      show = shuffledQuestionSet[i];
      diaplayQuestion(show);
    }
  } else{
    return;
  }
}

// The startGame function is called when the start button is clicked
function startGame() {
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderQuestion();
}









// These functions are used by init
function getScore() {
  // Get stored value from client storage, if it exists
  var storedScores = localStorage.getItem("highScore");
  // If stored value doesn't exist, set counter to 0
  if (storedScores === null) {
    
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    
  }
  //Render win count to page
  win.textContent = winCounter;
}


function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (chosenOption === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}

// Tests if guessed option is the true answer



// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", renderQuestion);

