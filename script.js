var timerEl = document.getElementById('time');
var startContainer = document.getElementById('start-container');
var startBtn = document.getElementById('start');
var questionContainer = document.getElementById('question-container');
var finalScoreContainer = document.getElementById('final-score-container');
var finalScoreEl = document.getElementById('finalScore');
var initialsEl = document.getElementById('initials');
var submitBtn = document.getElementById('submit');

var questionArrayIndex = 0;
var time = 40;
var timerId;

//Quiz questions. Question: Options: Answer:
var myQuestions = [
    {
        question: "Which HTML tag is self closing?",
        options: ["<p>", "<a>", "<link>", "<h1>"],
        answer: "<link>"
    },
    {
        question: "CSS targets the HTML for styling via: ?",
        options: ["classes", "ids", "links", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "In JavaScript, when a variable is declared within a function, its scope is considered: ?",
        options: ["declared", "global", "local", "equal"],
        answer: "local"
    },
    {
        question: "In JavaScript, which method is used to round down to the next whole number?",
        options: ["Math.random", "Math.round", "Math.floor", "Math.number"],
        answer: "Math.floor"
    },
];



//Have to specify timer details from start, any penalties and when time is up.
//Have to do a for loop to render the questions and selections to the page.
//For loop to compare the questions with the answers.

function start() {
    // hide the start container and display the question container

    startContainer.classList.add = 'hidden';
    questionContainer.classList.remove = 'hidden';


    // start the timer
    time = setInterval(function() {
        timeCount--;
        timerEl.textContent = timeCount;
        if (timeCount > 0) {
        //Need to build in penalty if answer incorrectly
        }
        // if time reaches zero, quiz needs to end.
        if (timeCount === 0) {
            clearInterval(time);
        }, 1000
    }) 


    // run a function that will show your questions
    displayQuestion()
}

function displayQuestion() {
    // need to create the elements that will go in the question container


    //need to add the content from the current question
    setNextQuestion();

    //need to create the container to house the button choices.

    //need to loop the array of choices
    for (var i = 0; i < myQuestions.length; i++) {

    }

    //need to create the buttons and add the content and event listenter to the buttons

    //need to append the buttons to the button container


    //need to append all create elements to the question container. 
}

// create function that will tie to the button event listener. to check the answer clicked.



//Event listener to start the quiz.
startBtn.addEventListener('click', start)