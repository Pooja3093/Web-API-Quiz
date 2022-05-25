# Web-API-Quiz

This project was designed as an assignment for Module 4 : Web API

Quiz application was designed using HTML, CSS, Javascript and Web API's. This application emphasizes the use of Javascript to provide quiz questions and collect user data to determine whether the answers to a question are correct.
This ia a timed quiz. For each incorrect answer 10 seconds penalty is deducted from the total time. At the end of the quiz, the remining time is the score.


## Links:

[GitHub Repository]()
[Deployed Application]()
[Full Demo Video](https://drive.google.com/file/d/1U3wQsAhRqnC3ix0BMdgz3-bO0NQj7AQh/view)


## Summary
A multiple choice quiz is created using HTML and Javascript. And it is styled using CSS.

This project emphasizes the use of using Javascript to make dynamic changes to an HMTL document.

THe page loads with a header containing a title, start button and timer and paragraph oulining the rules. 

Once the START button is clicked, the timer will start with 60 seconds and decreasing by 1 second. On click of start button, first question will be displayed and a list of options will be dyanamically created and displayed.

If any of the list items is clicked, next question and its options will be displayed.

For every incorrect answer, 10 seconds will be deducted from the timer as penalty.

If the timer runs out, a times up message will be displayed through alert and user will be prompted to enter initials.

If all the questions are answered, an alert notifying quiz end will be displayed and user will be prompted to enter initials.

Onc initials are entered, the program will compare it with previously stored scores and if the user score is higher than an alert notifying a new highscore will be displayed. The new highscore will also be stored locally.

If there is no existing highscore then user score will be saved as highdcore locally.


## Features:

* Start button
* Timer
* List of options that are dynamically created using Web API
* Local storage of highscore
* Comparision of user score and locally stored highscore
* Alerts and prompt
* Event listners (on-click)