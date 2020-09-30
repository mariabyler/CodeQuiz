// start button function called
var start = document.getElementById("start").addEventListener("click", startBtn); 
// timer set
var seconds = 60;
// array of objects
// .indexof 
var questions = [
    {
        ques: "1+1",
        options: [1, 2, 3, 4],  
        answer: 2,
    }, 
    {
        ques: "1+2",
        options: [1, 2, 3, 4],  
        answer: 3,
    }, 
    {
        ques: "1+3",
        options: [1, 2, 3, 4],  
        answer: 4,
    },  
    {
        ques: "2+1",
        options: [1, 2, 3, 4],  
        answer: 3,
    }, 
    {
        ques: "3+1",
        options: [1, 2, 3, 4],  
        answer: 4,
    }
    ];  

// function that runs when you click start button 
function startBtn() {
    // function to remove start button 
    function removeStartBtn() {
        var elem = document.getElementById("start");
        elem.parentNode.removeChild(elem);
        return false;
    }
    console.log(removeStartBtn); 

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

    var buttonsWanted = 4;
    var questionsOptions = function questionSelector () {
        for(var i=0; i < questions.length; i++) {
            console.log("question", question[i]); 
        // if (questions[0].ques == value) return questions[i];
        // }
        }
    }


    for(var x = 0; x < buttonsWanted; x++){
        var button = document.createElement('button'); 
        button.type = 'button';
        button.innerHTML = questionsOptions;
        button.className = 'btn btn-secondary';
            // button1.onclick = function() {
                
            //     //         };
        document.getElementById('main-content').appendChild(button);
    }
    console.log(questions[0].ques);

    // for(var x = 0; x < buttonsWanted; x++){
    //     var button = document.createElement('button'); 
    //     button.type = 'button';
    //     button.innerHTML = questions[0];
    //     button.className = 'btn btn-secondary';
    //         // button1.onclick = function() {
                
    //         //     //         };
    //     document.getElementById('main-content').appendChild(button);
    // }
    

    // document.getElementById("header").innerHTML = "Commonly used data types DO NOT include:"; 
    // document.getElementById("main-content").innerHTML = "";
    // var button1 = document.createElement('button'); 
    //     button1.type = 'button';
    //     button1.innerHTML = 'strings';
    //     button1.className = 'btn btn-secondary';
    //       button1.onclick = function() {
            
    //         };
    // var container = document.getElementById("main-content");
    // container.appendChild(button1);



    // document.getElementById("header").innerHTML = "Commonly used data types DO NOT include:"; 
    // document.getElementById("main-content").innerHTML = "";
    // var button1 = document.createElement('button'); 
    //     button1.type = 'button';
    //     button1.innerHTML = 'strings';
    //     button1.className = 'btn btn-secondary';
    //       button1.onclick = function() {
            
    //         };
    // var container = document.getElementById("main-content");
    // container.appendChild(button1);

    // var button2 = document.createElement('button'); 
    //     button2.type = 'button';
    //     button2.innerHTML = 'booleans';
    //     button2.className = 'btn btn-secondary';
    //     //   button.onclick = function() {
            
    //     //     };
    // var container = document.getElementById("main-content");
    // container.appendChild(button2);

    // var button3 = document.createElement('button'); 
    //     button3.type = 'button';
    //     button3.innerHTML = 'alerts';
    //     button3.className = 'btn btn-secondary';
    //     //   button.onclick = function() {
            
    //     //     };
    // var container = document.getElementById("main-content");
    // container.appendChild(button3);

    // var button4 = document.createElement('button'); 
    //     button4.type = 'button';
    //     button4.innerHTML = 'numbers';
    //     button4.className = 'btn btn-secondary';
    //     //   button.onclick = function() {
            
    //     //     };
    // var container = document.getElementById("main-content");
    // container.appendChild(button4);

} 

console.log(startBtn); 

