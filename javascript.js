var start = document.getElementById("start").addEventListener("click", startBtn); 
var seconds = 60;  

function startBtn() {
    // document.querySelector("main-div").style.visibility = "hidden"; 
    setInterval(function() {
        document.getElementById("timer").innerHTML = "time: " + seconds--;
        }, 1000);
} 

// there's a bug where, if you hit start twice, the clock counts down by two seconds
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
