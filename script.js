// start button function called
var start = document.getElementById("start").addEventListener("click", startBtn); 
// timer set
var seconds = 60;
// array of objects
// .indexof 
var questions = [
    {
        text: "1+1",
        choiceA: "2",
        choiceB: "3", 
        choiceC: "4",  
        answer: "A",
    }, 
    {
        text: "1+1",
        choiceA: "2",
        choiceB: "3", 
        choiceC: "4",  
        answer: "A",
    }, 
    {
        text: "1+1",
        choiceA: "2",
        choiceB: "3", 
        choiceC: "4",  
        answer: "A",
    },  
    {
        text: "1+1",
        choiceA: "2",
        choiceB: "3", 
        choiceC: "4",  
        answer: "A",
    }, 
    {
        text: "1+1",
        choiceA: "2",
        choiceB: "3", 
        choiceC: "4",  
        answer: "A",
    }
    ]; 
    
    //  function to define question rendering 
    function questionRender () {
        var questionRender = document.createElement('p'); 
            questionRender.type = 'p';
            questionRender.innerHTML = "questionsOptions";
            questionRender.className = 'unique';
            document.getElementById('header').appendChild(questionRender);
    }
 
//  function to render button 
    function buttonRender () {
        var buttonsWanted = 3;
        for(var x = 0; x < buttonsWanted; x++){
            var button = document.createElement('button'); 
            button.type = 'button';
            button.innerHTML = "questionsOptions";
            button.className = 'btn btn-secondary';
            document.getElementById('main-content').appendChild(button);
        }
    }

    //function to load questions
    function loadQuestion () { 
            questionRender(); 
            buttonRender(); 
    }

// function that runs when you click start button 
function startBtn() {
    // function to remove start button 
    function removeStartBtn() {
        var elem = document.getElementById("start");
        elem.parentNode.removeChild(elem);
        return false;
    }
    // starts timer, if/then statement to keep timer from restarting every time start button is clicked
    var element= document.querySelector("#start") 
        if (element.classList.contains("active")) {
        } 
        else {
         setInterval(function() {
            document.getElementById("timer").innerHTML = "time: " + seconds--;
            }, 1000);
        document.getElementById("start").classList.add("active"); 
    }  

    // function to remove start button called
    removeStartBtn();  

    // replaces content of main div with dynamically generated html
    document.getElementById("header").innerHTML = "Commonly used data types DO NOT include:"; 
    document.getElementById("main-content").innerHTML = ""; 

    // calling function to load 1st question
    loadQuestion (); 

 // if (questions[0].ques == value) return questions[i];


} 

console.log(startBtn); 

