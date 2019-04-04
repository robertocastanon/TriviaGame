//Onclick that when pressed displays the first question page
document.getElementById("startGame").onclick = function() {page1Start(), hideButton()}

//after the start game button has been pressed hide it so its out of the way
function hideButton() {
    var divStart = document.getElementById("startGame");
    divStart.style.display = 'none';
}

//var that removes the question and possible answers 
function hideDisplay() {
    var divDisplay = document.getElementById("display");
    divDisplay.style.display = 'none';
}

var response = ["OUT OF TIME!", "CORRECT!!", "WRONG.."];


//function that starts the first page of questions on the trvia page
function page1Start() {

//timer that when reaches 0 will end will result in a "time out screen" also displaying the correct answer
var count = 10;

var counter=setInterval(timer, 1000) //100 will run it every second

function timer() {
  count=count-1;
  if (count <= 0) {
     clearInterval(counter);
     //when timer reaches 0 the display id will hide and a 'time out' result will show
     console.log("hello");
     hideDisplay();
     document.getElementById("result").innerHTML = response[0];
      return;
  }

 document.getElementById("timer").innerHTML="Time Remaining: " + count + " Seconds";
}


var page1 = ["page 1 question goes here", "wrong", "wrong", "correct", "wrong"];

document.getElementById("q").innerHTML = page1[0]

document.getElementById("a1").innerHTML = page1[1];
document.getElementById("a2").innerHTML = page1[2];
document.getElementById("a3").innerHTML = page1[3];
document.getElementById("a4").innerHTML = page1[4];

// on click functions for first page
document.getElementById("a1").onclick = function() {oneFuncWrong(), hideDisplay()};
    function oneFuncWrong(){
        console.log("wrong");
        document.getElementById("result").innerHTML = response[2];
        document.getElementById("correctA").innerHTML ="Correct Answer was " + page1[3];

    };

    document.getElementById("a2").onclick = function() {oneFuncWrong(), hideDisplay()};
    function oneFuncWrong(){
        console.log("wrong");
        document.getElementById("result").innerHTML = response[2];
        document.getElementById("correctA").innerHTML ="Correct Answer was " + page1[3];

    };
//correct answer, rest are wrong for page1
document.getElementById("a3").onclick = function() {oneFuncCorrect(), hideDisplay()};
    function oneFuncCorrect() {
        console.log("correct");
        document.getElementById("result").innerHTML = response[1];

    };

    document.getElementById("a4").onclick = function() {oneFuncWrong(), hideDisplay()};
    function oneFuncWrong(){
        console.log("wrong");
        document.getElementById("result").innerHTML = response[2];
        document.getElementById("correctA").innerHTML ="Correct Answer was " + page1[3];

    };

    


    

};


