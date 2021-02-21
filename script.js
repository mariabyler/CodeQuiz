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
    choiceC: 'alerts',
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
    choiceA: 'numberss and strings',
    choiceB: 'booleans',
    choiceC: 'both',
    correct: "C"
},
{//3
    question: 'String values must be enclosed within ____ when being assigned to variables',
    choiceA: 'parantheses',
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



// // start button function called
// var start = document.getElementById("start").addEventListener("click", startBtn); 
// // timer set
// var seconds = 60;
// // array of objects
// // look up .indexof 
// var questions = [
//     {
//         text: "1+1",
//         choiceA: "2",
//         choiceB: "3", 
//         choiceC: "4",  
//         answer: "A",
//     }, 
//     {
//         text: "1+1",
//         choiceA: "2",
//         choiceB: "3", 
//         choiceC: "4",  
//         answer: "A",
//     }, 
//     {
//         text: "1+1",
//         choiceA: "2",
//         choiceB: "3", 
//         choiceC: "4",  
//         answer: "A",
//     },  
//     {
//         text: "1+1",
//         choiceA: "2",
//         choiceB: "3", 
//         choiceC: "4",  
//         answer: "A",
//     }, 
//     {
//         text: "1+1",
//         choiceA: "2",
//         choiceB: "3", 
//         choiceC: "4",  
//         answer: "A",
//     }
//     ]; 
    
//     //  function to define question rendering 
//     function questionRender () {
//         var questionRender = document.createElement('p'); 
//             questionRender.type = 'p';
//             for(var m = 0; m < questions.length; m++){
//                 questionRender.innerHTML = questions[m].text; 
//             }; 
//             questionRender.className = 'unique';
//             document.getElementById('header').appendChild(questionRender);
//     }
 
// //  function to render button 
//     function buttonRender () {
//         // var buttonsWanted = 3;
//         // for(var x = 0; x < buttonsWanted; x++){}
//         var button1 = document.createElement('button'); 
//             button1.type = 'button';
//             for(var n = 0; n < questions.length; n++){
//                 button1.innerHTML = questions[n].choiceA; 
//             }; 
//             button1.className = 'btn btn-secondary userChoice';
//             document.getElementById('main-content').appendChild(button1);

//         var button2 = document.createElement('button'); 
//             button2.type = 'button';
//             for(var o = 0; o < questions.length; o++){
//                 button2.innerHTML = questions[o].choiceB; 
//             }; 
//             button2.className = 'btn btn-secondary userChoice';
//             document.getElementById('main-content').appendChild(button2);

//         var button3 = document.createElement('button'); 
//             button3.type = 'button';
//             for(var p = 0; p < questions.length; p++){
//                 button3.innerHTML = questions[p].choiceC; 
//             }; 
//             button3.className = 'btn btn-secondary userChoice';
//             document.getElementById('main-content').appendChild(button3);
//     }

//     //function to load questions
//     function loadQuestion () { 
//             questionRender(); 
//             buttonRender(); 
//     }

// // function that runs when you click start button 
// function startBtn() {
//     // function to remove start button 
//     function removeStartBtn() {
//         var elem = document.getElementById("start");
//         elem.parentNode.removeChild(elem);
//         return false;
//     }
//     // starts timer, if/then statement to keep timer from restarting every time start button is clicked
//     var element= document.querySelector("#start") 
//         if (element.classList.contains("active")) {
//         } 
//         else {
//          setInterval(function() {
//             document.getElementById("timer").innerHTML = "time: " + seconds--;
//             }, 1000);
//         document.getElementById("start").classList.add("active"); 
//     }  

//     // function to remove start button called
//     removeStartBtn();  

//     // replaces clear header and main content 
//     document.getElementById("header").innerHTML = ""; 
//     document.getElementById("main-content").innerHTML = ""; 

//     // calling function to load 1st question
//     loadQuestion (); 

//     // function to determine if user chose correct answer..only loads if I click 1st button
//     function questionAuthentication () {
//         console.log("user selection even listener is working...pls God")
//     } 
//     document.querySelector(".userChoice").addEventListener("click", questionAuthentication);

//  // if (questions[0].ques == value) return questions[i];


// } 

