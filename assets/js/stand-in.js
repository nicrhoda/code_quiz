var questionsContent = document.getElementById("questions");
var qList = document.querySelector('.list');
var response = document.querySelector('.feedback');
var time = document.querySelector('.time');
var optionEl_1 = document.querySelector('.option-1');
var optionEl_2 = document.querySelector('.option-2');
var optionEl_3 = document.querySelector('.option-3');
var displayFeedback = document.querySelector('.feedback');
var buttonEl = document.querySelectorAll('button');
var answer_1 = "Application Programming Interface";
var promptText = "What does API stand for?";
var option_1 = "Apple Pear Indigo";
var option_2 = "Advanced Programming Interface";
var option_3 = "Application Programming Interface";
var promptText_2 = "What does DOM stand for?";
var option_4 = "Document Objective Model";
var option_5 = "Dollop Of Mayo";
var option_6 = "Document Object Model";
// function to start the 60 second countdown
console.log(buttonEl);
questionDisplay_1();

var secondsRemaining = 60;

function setTime() {
    
    var timerInterval = setInterval(function(){
    secondsRemaining--;
    time.textContent = "Timer" + " " + secondsRemaining;
    if(secondsRemaining === 0) {
        clearInterval(timerInterval);
        highScore();
    }
    
}, 1000);

}

// questions 1
function questionDisplay_1() {


        questionsContent.append(promptText);
        optionEl_1.append(option_1);
        optionEl_2.append(option_2);
        optionEl_3.append(option_3);
        userInput_1();
        setTime();
}

// questions 2
function questionDisplay_2() {
    // var promptText_2 = "What does DOM stand for?";
    // var option_4 = "Document Objective Model";
    // var option_5 = "Dollop Of Mayo";
    // var option_6 = "Document Object Model";

        questionsContent.append(promptText_2);
        optionEl_1.append(option_4);
        optionEl_2.append(option_5);
        optionEl_3.append(option_6);
}

//event listener for "click"

function userInput_1() {
    buttonEl[0].addEventListener("click", function response() {
        if (optionEl_1.textContent === answer_1) {
            displayFeedback.textContent = "correct";
            nextQuestion();
        } else {
            displayFeedback.textContent = "incorrect";
            nextQuestion();
        }})
    buttonEl[1].addEventListener("click", function response() {
        if (optionEl_2.textContent === answer_1) {
            displayFeedback.textContent = "correct";
            nextQuestion();
        } else {
            displayFeedback.textContent = "incorrect";
            nextQuestion();
        }})
    buttonEl[2].addEventListener("click", function response() {
        if (optionEl_3.textContent === answer_1) {
            displayFeedback.textContent = "correct";
            nextQuestion();
        } else {
            displayFeedback.textContent = "incorrect";
            nextQuestion();
        }})
    }  
    
    


//high score redirect 
function highScore() {
    window.location.href = "high-scores.html";
}

//next question redirect
function nextQuestion() {
    var listEl = document.querySelector("list");
    listEl
    
    
}

