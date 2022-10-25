// Variables for questions

var questions = document.getElementById('.questions');
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
        highScore();
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

//function for generating list with questions in it

function addChoiceList() {
        
        var button = document.createElement('button');
        var choicesEl = document.querySelector('list');
        var choicesContent = quizQuestions;
       
        
        button.textContent(choicesContent);
        button.className = "choices-btn";

        button.addEventListener("click", function() {
            userAnswer(button.textContent);
        }, true);

        choicesEl.appendChild(button);
        questionList.appendChild(choicesEl);
    }

    var questionList = document.createElement('ul');

    var currentQuestion = quizQuestions[questionCount];
    currentQuestion.choices.forEach(addChoiceList);
    document.body.appendChild(currentQuestion);
    


//right or wrong feedback function

function userAnswer() {
    var currentQuestion = questions[questionCount];
    var answerText = document.querySelector('.feedback');

    if (currentQuestion.answer == answer) {
        answerText.textContent = "Correct";
    }
    else {
        answerText.textContent = "Wrong";
        secondsRemaining.textContent = secondsRemaining -10;
    }


}

function advanceForward() {
    questionCount++;
    refreshScreen();
}

function refreshScreen() {
    if (questionCount <= questions.length - 1) {
        questions.textContent = quizQuestions[questionCount].title;

    if (choices.children.length > 0) {
        choices.removeChild(choices.children[0]);
    }

    choices.appendChild(addChoiceList());
    } else {
        window.location.href = "high-scores.html";
    }
}


var sample = document.createElement('div');

document.body.appendChild(sample);






