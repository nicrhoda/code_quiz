// Variables for questions

var questions = document.getElementById("questions");
var time = document.querySelector('.time');
var choices = document.querySelector('.choices');
var questionCount = 0;

//function to start the 60 second countdown

setTime()

var secondsRemaining = 60;

function setTime() {
    var timerInterval = setInterval(function(){
    secondsRemaining--;
    time.textContent = "Timer" + " " + secondsRemaining;

    if(secondsRemaining === 0) {
        clearInterval(timerInterval);
        highScore()
    }
}, 1000);
}
console.log(setTime);

// questions

var quizQuestions = [{
    name: "What does API stand for?",
    options: ["Apple Pear Indigo", "Advanced Programming Interface", "Application Programming Interface"],
    answer: "Application Programming Interface"
},
{
    name: "What does DOM stand for?",
    options: ["Document Objective Model", "Dollop Of Mayo", "Document Object Model"],
    answer: "Document Object Model"
},
{
    name: "The querySelector Method returns the first match for the specified selector",
    options: ["true", "false"],
    answer: "true"
}];

//function for generating quiz choices

