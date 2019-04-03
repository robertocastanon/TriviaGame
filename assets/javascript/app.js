//Onclick that when pressed displays the first question page
document.getElementById("startGame").onclick = function() {page1Start(), hideButton()}

//after the start game button has been pressed hide it so its out of the way
function hideButton() {
    var divStart = document.getElementById("startGame");
    divStart.style.display = 'none';
}

//function that starts the first page of questions on the trvia page
function page1Start() {


var count = 10;

var counter=setInterval(timer, 1000) //100 will run it every second

function timer() {
  count=count-1;
  if (count <= 0) {
     clearInterval(counter);
     console.log("hello");
      return;
  }

 document.getElementById("timer").innerHTML="Time Remaining: " + count + " Seconds"; // watch for spelling
}


var page1 = ["page 1 question goes here", "wrong", "wrong", "correct", "wrong"];
var correct1 = page1[2];

document.getElementById("q").innerHTML = page1[0]

document.getElementById("a1").innerHTML = page1[1];
document.getElementById("a2").innerHTML = page1[2];
document.getElementById("a3").innerHTML = page1[3];
document.getElementById("a4").innerHTML = page1[4];

//on click functions for first page
document.getElementById("a3").onclick = function() {oneFuncCorrect()};
    function oneFuncCorrect() {
        console.log("correct");

    };

document.getElementById("answers").onclick = function() {oneFuncWrong()};
    function oneFuncWrong(){
        console.log("wrong");


    };

// function 

};
