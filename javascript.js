// start button function called
var start = document.getElementById("start").addEventListener("click", startBtn); 
// timer set
var seconds = 60;  

// function that runs when you click start button 
function startBtn() {
    // replaces content of main div with dynamically generated html 
    document.getElementById("header").innerHTML = "Commonly used data types DO NOT include:"; 
    document.getElementById("main-content").innerHTML = "";
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
} 

console.log(startBtn); 

// array of objects
var questions = [
{
    ques: "1+1",
    options: ["1", "2", "3", "4"],  
    answer: "2",
}, 
{
    ques: "1+1" ,
    options: ["1", "2", "3", "4"],  
    answer: "2",
}, 
// last question
{
    ques: "1+1",
    options: [1, 2, 3, 4],  
    answer: 2,
}
]  
