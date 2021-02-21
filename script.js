// global variables
var questionEl = document.querySelector('#main-content')
var choicesEl = document.querySelector('#choices-quiz')
var StartEl = document.getElementById("start")
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var captionEl = document.getElementById("caption");
var highscoreEl = document.getElementById('hs');
var endTextEl = document.getElementById('endText');
var runningQuestion = 0;
var correctAnswer = 0;
var wrongAnswer = 0;
var timerobject = '';

var savedata = JSON.parse(localStorage.getItem('data')) || []
var timeEl = document.getElementById('timer');

//object of questions
var questionList = [{//0
    question: 'Commonly used data types DO NOT include',//.question
    choiceA: 'alerts',//.ChoiceA
    choiceB: 'booleans',
    choiceC: 'numbers',
    correct: "A"
},
{//1
    question: 'The condition in an if/else statment is enclosed within:',
    choiceA: 'quotes',
    choiceB: 'parantheses',
    choiceC: 'curly brackets',
    correct: "B"

},
{//2
    question: 'Arrays in Javascript can be used to store...',
    choiceA: 'numbers and strings',
    choiceB: 'booleans',
    choiceC: 'both',
    correct: "C"
},
{//3
    question: 'String values must be enclosed within ____ when being assigned to variables',
    choiceA: 'parentheses',
    choiceB: 'curly brackets',
    choiceC: 'commas',
    correct: "C"
},
{//4
    question: 'A very useful tool during development and debugging for printing content to the debugger is:',
    choiceA: 'Javascript',
    choiceB: 'for loops',
    choiceC: 'console log',
    correct: "C"
}];

//variable for lastquestion reference that will be used to identify position
var lastQuestion = questionList.length - 1;
var timer = lastQuestion * 5;

// timer
function countdown() {
    timeEl.textContent = 'Time:' + timer;
    if (timer > 0) {
        timer--
    } else {
        endofgame()
    }

}

//hide initial content and display dynamically generated 
choicesEl.style.display = 'none';
endTextEl.style.display = 'none';

//calls the object question list
function renderQuestions() {
    var c = questionList[runningQuestion];
    questionEl.textContent = questionList[runningQuestion].question;
    choiceA.innerHTML = c.choiceA;
    choiceB.innerHTML = c.choiceB;
    choiceC.innerHTML = c.choiceC;
 
}

// event listener which begins the quiz
StartEl.addEventListener("click", startQuiz);

//function of the event listener
function startQuiz() {
    start.style.display = "none";

    choicesEl.style.display = 'block';

    timerobject = setInterval(countdown, 1000)
    renderQuestions();

};
// validates answers and keeps questions on going
function checkAnswer(userChoice) {
    console.log(userChoice)
    if (userChoice == questionList[runningQuestion].correct) {
        captionEl.innerText = 'Correct Answer'
        correctAnswer++
    } else {
        captionEl.innerText = 'Wrong Answer'
        wrongAnswer++;
        //decreasing time on timer when user gets question wrong
        timer--
    }
    if (runningQuestion < lastQuestion) {
        runningQuestion++
        renderQuestions();
    } else {
        console.log('correct answer:', correctAnswer);
        endofgame();
    }
}

//hides content and clears timer
function endofgame() {
    choicesEl.style.display = "none";
    questionEl.style.display = "none";
    endTextEl.style.display = 'block';
    captionEl.style.display = 'none';
    clearInterval(timerobject)
}


function user() {
    var userInitials = document.getElementById('userInitials').value
    // console.log(userInitials);
    savedata.push({
        user: userInitials,
        score: correctAnswer,
        time: 10 - timerobject,

    })

    //save to local storage
    localStorage.setItem('data', JSON.stringify(savedata))
    endTextEl.innerHTML = '<h1> Thank you for playing </h1>'
    highscoreEl.innerHTML = ('View Highscore:' + ' ' + JSON.parse(localStorage.getItem('data'))[0].score);
}
