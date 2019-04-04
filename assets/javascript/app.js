//Onclick that when pressed displays the first question page
document.getElementById("startGame").onclick = function() {page1Start(), hideButton(), hideResults()}
document.getElementById("startGame").innerHTML = "START GAME!";

//after the start game button has been pressed hide it so its out of the way
function hideButton() {
    var divStart = document.getElementById("startGame");
    divStart.style.display = 'none';
}

//function that brings back the button at the end
function showButton() {
    var divStart = document.getElementById("startGame");
    divStart.style.display = '';
}

//function that removes the question and possible answers 
function hideDisplay() {
    var divDisplay = document.getElementById("display");
    divDisplay.style.display = 'none';
}

//function that undoes the removal of the display
function showDisplay() {
    var divDisplay = document.getElementById("display");
    divDisplay.style.display = '';
}
//will hide the end result when you restart the game
function hideResults() {
    var divResults = document.getElementById("userResults");
    divResults.style.display = 'none';
}
//shows the result page once again since it was hidden
function showResults() {
    var divResults = document.getElementById("userResults");
    divResults.style.display = '';
}



var scoreCorrect = 0;

var scoreWrong = 0;

var noAnswer = 0;

var response = ["OUT OF TIME!", "CORRECT!!", "WRONG.."];

var count = 10;

var rcount = 3;
//function will reset the values with every playthrough
function resetResults(){
    scoreCorrect = 0;
    scoreWrong = 0;
    noAnswer = 0;
}

//function that starts the first page of questions on the trvia page
function page1Start() {

showDisplay();

resetResults();

//timer that when reaches 0 will end will result in a "time out screen" also displaying the correct answer
var counter=setInterval(timer, 1000) //100 will run it every second

function timer() {
  count=count-1;
  if (count <= 0) {
     clearInterval(counter);
     //when timer reaches 0 the display id will hide and a 'time out' result will show
     console.log("out of time!");

     noAnswer++;

     hideDisplay();
     document.getElementById("result").innerHTML = response[0];

     var rcounter=setInterval(rtimer, 1000) //100 will run it every second

     function rtimer() {
         rcount=rcount-1;
         if (rcount <= 0) {
            clearInterval(rcounter);
            //when timer reaches 0 the display id will hide and a 'time out' result will show
            console.log("next page");
            document.getElementById("result").innerHTML = "";
            document.getElementById("correctA").innerHTML = "";
            page2Start();
             return;
         }
     }

     


      return;
  }

//display timer on html
 document.getElementById("timer").innerHTML="Time Remaining: " + count + " Seconds";
}


var page1 = [
    "What kind of food does Master Shake look like?",
     "A fast food coffee",
      "A fast food soda", "A fast food milkshake",
       "A bottle of drinking water"
    ];

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
        document.getElementById("imgID").innerHTML = '<img src="../assets/images/wrong.gif" />';
        //this is clear the counter so it doesn't interfere with the next page of questions
        clearInterval(counter);

        scoreWrong++;

        var rcounter=setInterval(rtimer, 1000) //100 will run it every second

        function rtimer() {
            rcount=rcount-1;
            if (rcount <= 0) {
               clearInterval(rcounter);
               //when timer reaches 0 the display id will hide and a 'time out' result will show
               console.log("next page");
               document.getElementById("result").innerHTML = "";
               document.getElementById("correctA").innerHTML = "";
               page2Start();
                return;
            }
        }
        

    };

    document.getElementById("a2").onclick = function() {oneFuncWrong(), hideDisplay()};
    function oneFuncWrong(){
        console.log("wrong");
        document.getElementById("result").innerHTML = response[2];
        document.getElementById("correctA").innerHTML ="Correct Answer was " + page1[3];

        scoreWrong++;

        clearInterval(counter);

        var rcounter=setInterval(rtimer, 1000) //100 will run it every second

        function rtimer() {
            rcount=rcount-1;
            if (rcount <= 0) {
               clearInterval(rcounter);
               //when timer reaches 0 the display id will hide and a 'time out' result will show
               console.log("next page");
               document.getElementById("result").innerHTML = "";
               document.getElementById("correctA").innerHTML = "";
               page2Start();
                return;
            }
        }

    };
//correct answer, rest are wrong for page1
document.getElementById("a3").onclick = function() {oneFuncCorrect(), hideDisplay()};
    function oneFuncCorrect() {
        console.log("correct");
        document.getElementById("result").innerHTML = response[1];

        scoreCorrect++;

        clearInterval(counter);

        var rcounter=setInterval(rtimer, 1000) //100 will run it every second

        function rtimer() {
            rcount=rcount-1;
            if (rcount <= 0) {
               clearInterval(rcounter);
               //when timer reaches 0 the display id will hide and a 'time out' result will show
               console.log("next page");
               document.getElementById("result").innerHTML = "";
               document.getElementById("correctA").innerHTML = "";
               page2Start();
                return;
            }
        }

    };

    document.getElementById("a4").onclick = function() {oneFuncWrong(), hideDisplay()};
    function oneFuncWrong(){
        console.log("wrong");
        document.getElementById("result").innerHTML = response[2];
        document.getElementById("correctA").innerHTML ="Correct Answer was " + page1[3];

        scoreWrong++;

        clearInterval(counter);

        var rcounter=setInterval(rtimer, 1000) //100 will run it every second

        function rtimer() {
            rcount=rcount-1;
            if (rcount <= 0) {
               clearInterval(rcounter);
               //when timer reaches 0 the display id will hide and a 'time out' result will show
               console.log("next page");
               document.getElementById("result").innerHTML = "";
               document.getElementById("correctA").innerHTML = "";
               page2Start();
                return;
            }
        }

    };

};


//start of page 2 (change here)
function page2Start () {
//Will bring back the html starting display at the start of the next question
showDisplay();
//rest both the counts
count = 20;
rcount = 5;

//timer that when reaches 0 will end will result in a "time out screen" also displaying the correct answer
var counter=setInterval(timer, 1000) //100 will run it every second

function timer() {
  count=count-1;
  if (count <= 0) {
     clearInterval(counter);
     //when timer reaches 0 the display id will hide and a 'time out' result will show
     console.log("out of time!");

     noAnswer++;

     hideDisplay();
     document.getElementById("result").innerHTML = response[0];

     var rcounter=setInterval(rtimer, 1000) //100 will run it every second

     function rtimer() {
         rcount=rcount-1;
         if (rcount <= 0) {
            clearInterval(rcounter);
            //when timer reaches 0 the display id will hide and a 'time out' result will show
            console.log("next page");
            document.getElementById("result").innerHTML = "";
            document.getElementById("correctA").innerHTML = "";
            //needs to be changed
            page3Start();
             return;
         }
     }

     


      return;
  }

//display timer on html
 document.getElementById("timer").innerHTML="Time Remaining: " + count + " Seconds";
}
//change here
var page2 = [
    "What popular fast food snack does Frylock resemble?",
     "A fast food cup of french fries",
      "A fast food cup of hash browns",
       "A fast food cup of chicken nuggets",
        "A fast food cup of curly fries"
    ];

document.getElementById("q").innerHTML = page2[0]

document.getElementById("a1").innerHTML = page2[1];
document.getElementById("a2").innerHTML = page2[2];
document.getElementById("a3").innerHTML = page2[3];
document.getElementById("a4").innerHTML = page2[4];

//on click functions for first page
//change the oneFuncWrong/oneFuncCorrect 
document.getElementById("a3").onclick = function() {oneFuncWrong(), hideDisplay()};
    function oneFuncWrong(){
        console.log("wrong");
        document.getElementById("result").innerHTML = response[2];
        document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];

        scoreWrong++;

        clearInterval(counter);

        var rcounter=setInterval(rtimer, 1000) //100 will run it every second

        function rtimer() {
            rcount=rcount-1;
            if (rcount <= 0) {
               clearInterval(rcounter);
               //when timer reaches 0 the display id will hide and a 'time out' result will show
               console.log("next page");
               document.getElementById("result").innerHTML = "";
               document.getElementById("correctA").innerHTML = "";
               page3Start();
                return;
            }
        }
        

    };

    document.getElementById("a2").onclick = function() {oneFuncWrong(), hideDisplay()};
    function oneFuncWrong(){
        console.log("wrong");
        document.getElementById("result").innerHTML = response[2];
        document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];

        scoreWrong++;

        clearInterval(counter);

        var rcounter=setInterval(rtimer, 1000) //100 will run it every second

        function rtimer() {
            rcount=rcount-1;
            if (rcount <= 0) {
               clearInterval(rcounter);
               //when timer reaches 0 the display id will hide and a 'time out' result will show
               console.log("next page");
               document.getElementById("result").innerHTML = "";
               document.getElementById("correctA").innerHTML = "";
               page3Start();
                return;
            }
        }

    };
//correct answer, rest are wrong 
document.getElementById("a1").onclick = function() {oneFuncCorrect(), hideDisplay()};
    function oneFuncCorrect() {
        console.log("correct");
        document.getElementById("result").innerHTML = response[1];

        scoreCorrect++;

        clearInterval(counter);

        var rcounter=setInterval(rtimer, 1000) //100 will run it every second

        function rtimer() {
            rcount=rcount-1;
            if (rcount <= 0) {
               clearInterval(rcounter);
               //when timer reaches 0 the display id will hide and a 'time out' result will show
               console.log("next page");
               document.getElementById("result").innerHTML = "";
               document.getElementById("correctA").innerHTML = "";
               page3Start();
                return;
            }
        }

    };

    document.getElementById("a4").onclick = function() {oneFuncWrong(), hideDisplay()};
    function oneFuncWrong(){
        console.log("wrong");
        document.getElementById("result").innerHTML = response[2];
        document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];

        scoreWrong++;

        clearInterval(counter);

        var rcounter=setInterval(rtimer, 1000) //100 will run it every second

        function rtimer() {
            rcount=rcount-1;
            if (rcount <= 0) {
               clearInterval(rcounter);
               //when timer reaches 0 the display id will hide and a 'time out' result will show
               console.log("next page");
               document.getElementById("result").innerHTML = "";
               document.getElementById("correctA").innerHTML = "";
               page3Start();
                return;
            }
        }

    };



};

//start of page 3 (change here)
function page3Start () {
    //Will bring back the html starting display at the start of the next question
    showDisplay();
    //rest both the counts
    count = 20;
    rcount = 5;
    
    //timer that when reaches 0 will end will result in a "time out screen" also displaying the correct answer
    var counter=setInterval(timer, 1000) //100 will run it every second
    
    function timer() {
      count=count-1;
      if (count <= 0) {
         clearInterval(counter);
         //when timer reaches 0 the display id will hide and a 'time out' result will show
         console.log("out of time!");
    
         noAnswer++;
    
         hideDisplay();
         document.getElementById("result").innerHTML = response[0];
    
         var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
         function rtimer() {
             rcount=rcount-1;
             if (rcount <= 0) {
                clearInterval(rcounter);
                //when timer reaches 0 the display id will hide and a 'time out' result will show
                console.log("next page");
                document.getElementById("result").innerHTML = "";
                document.getElementById("correctA").innerHTML = "";
                //needs to be changed to the next page function
                page4Start();
                 return;
             }
         }
    
         
    
    
          return;
      }
    
    //display timer on html
     document.getElementById("timer").innerHTML="Time Remaining: " + count + " Seconds";
    }
    //change here
    var page2 = ["page 3 question goes here", "wrong", "wrong", "correct", "wrong"];
    
    document.getElementById("q").innerHTML = page2[0]
    
    document.getElementById("a1").innerHTML = page2[1];
    document.getElementById("a2").innerHTML = page2[2];
    document.getElementById("a3").innerHTML = page2[3];
    document.getElementById("a4").innerHTML = page2[4];
    
    //on click functions for first page
    //change the oneFuncWrong/oneFuncCorrect 
    document.getElementById("a1").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   //change to the following page
                   page4Start();
                    return;
                }
            }
            
    
        };
    
        document.getElementById("a2").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page4Start();
                    return;
                }
            }
    
        };
    //correct answer, rest are wrong 
    document.getElementById("a3").onclick = function() {oneFuncCorrect(), hideDisplay()};
        function oneFuncCorrect() {
            console.log("correct");
            document.getElementById("result").innerHTML = response[1];
    
            scoreCorrect++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page4Start();
                    return;
                }
            }
    
        };
    
        document.getElementById("a4").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page4Start();
                    return;
                }
            }
    
        };
    
    
    
    };


//start of page 4 (change here)
function page4Start () {
    //Will bring back the html starting display at the start of the next question
    showDisplay();
    //rest both the counts
    count = 20;
    rcount = 5;
    
    //timer that when reaches 0 will end will result in a "time out screen" also displaying the correct answer
    var counter=setInterval(timer, 1000) //100 will run it every second
    
    function timer() {
      count=count-1;
      if (count <= 0) {
         clearInterval(counter);
         //when timer reaches 0 the display id will hide and a 'time out' result will show
         console.log("out of time!");
    
         noAnswer++;
    
         hideDisplay();
         document.getElementById("result").innerHTML = response[0];
    
         var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
         function rtimer() {
             rcount=rcount-1;
             if (rcount <= 0) {
                clearInterval(rcounter);
                //when timer reaches 0 the display id will hide and a 'time out' result will show
                console.log("next page");
                document.getElementById("result").innerHTML = "";
                document.getElementById("correctA").innerHTML = "";
                //needs to be changed
                page5Start();
                 return;
             }
         }
    
         
    
    
          return;
      }
    
    //display timer on html
     document.getElementById("timer").innerHTML="Time Remaining: " + count + " Seconds";
    }
    //change here
    var page2 = ["page 4 question goes here", "wrong", "wrong", "correct", "wrong"];
    
    document.getElementById("q").innerHTML = page2[0]
    
    document.getElementById("a1").innerHTML = page2[1];
    document.getElementById("a2").innerHTML = page2[2];
    document.getElementById("a3").innerHTML = page2[3];
    document.getElementById("a4").innerHTML = page2[4];
    
    //on click functions for first page
    //change the oneFuncWrong/oneFuncCorrect 
    document.getElementById("a1").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page5Start();
                    return;
                }
            }
            
    
        };
    
        document.getElementById("a2").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page5Start();
                    return;
                }
            }
    
        };
    //correct answer, rest are wrong 
    document.getElementById("a3").onclick = function() {oneFuncCorrect(), hideDisplay()};
        function oneFuncCorrect() {
            console.log("correct");
            document.getElementById("result").innerHTML = response[1];
    
            scoreCorrect++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page5Start();
                    return;
                }
            }
    
        };
    
        document.getElementById("a4").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page5Start();
                    return;
                }
            }
    
        };
    
    
    
    };


//start of page 5 (change here)
function page5Start () {
    //Will bring back the html starting display at the start of the next question
    showDisplay();
    //rest both the counts
    count = 20;
    rcount = 5;
    
    //timer that when reaches 0 will end will result in a "time out screen" also displaying the correct answer
    var counter=setInterval(timer, 1000) //100 will run it every second
    
    function timer() {
      count=count-1;
      if (count <= 0) {
         clearInterval(counter);
         //when timer reaches 0 the display id will hide and a 'time out' result will show
         console.log("out of time!");
    
         noAnswer++;
    
         hideDisplay();
         document.getElementById("result").innerHTML = response[0];
    
         var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
         function rtimer() {
             rcount=rcount-1;
             if (rcount <= 0) {
                clearInterval(rcounter);
                //when timer reaches 0 the display id will hide and a 'time out' result will show
                console.log("next page");
                document.getElementById("result").innerHTML = "";
                document.getElementById("correctA").innerHTML = "";
                //needs to be changed
                page6Start();
                 return;
             }
         }
    
         
    
    
          return;
      }
    
    //display timer on html
     document.getElementById("timer").innerHTML="Time Remaining: " + count + " Seconds";
    }
    //change here
    var page2 = ["page 5 question goes here", "wrong", "wrong", "correct", "wrong"];
    
    document.getElementById("q").innerHTML = page2[0]
    
    document.getElementById("a1").innerHTML = page2[1];
    document.getElementById("a2").innerHTML = page2[2];
    document.getElementById("a3").innerHTML = page2[3];
    document.getElementById("a4").innerHTML = page2[4];
    
    //on click functions for first page
    //change the oneFuncWrong/oneFuncCorrect 
    document.getElementById("a1").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page6Start();
                    return;
                }
            }
            
    
        };
    
        document.getElementById("a2").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page6Start();
                    return;
                }
            }
    
        };
    //correct answer, rest are wrong 
    document.getElementById("a3").onclick = function() {oneFuncCorrect(), hideDisplay()};
        function oneFuncCorrect() {
            console.log("correct");
            document.getElementById("result").innerHTML = response[1];
    
            scoreCorrect++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page6Start();
                    return;
                }
            }
    
        };
    
        document.getElementById("a4").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page6Start();
                    return;
                }
            }
    
        };
    
    
    
    };

//start of page 6 (change here)
function page6Start () {
    //Will bring back the html starting display at the start of the next question
    showDisplay();
    //rest both the counts
    count = 20;
    rcount = 5;
    
    //timer that when reaches 0 will end will result in a "time out screen" also displaying the correct answer
    var counter=setInterval(timer, 1000) //100 will run it every second
    
    function timer() {
      count=count-1;
      if (count <= 0) {
         clearInterval(counter);
         //when timer reaches 0 the display id will hide and a 'time out' result will show
         console.log("out of time!");
    
         noAnswer++;
    
         hideDisplay();
         document.getElementById("result").innerHTML = response[0];
    
         var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
         function rtimer() {
             rcount=rcount-1;
             if (rcount <= 0) {
                clearInterval(rcounter);
                //when timer reaches 0 the display id will hide and a 'time out' result will show
                console.log("next page");
                document.getElementById("result").innerHTML = "";
                document.getElementById("correctA").innerHTML = "";
                //needs to be changed
                page7Start();
                 return;
             }
         }
    
         
    
    
          return;
      }
    
    //display timer on html
     document.getElementById("timer").innerHTML="Time Remaining: " + count + " Seconds";
    }
    //change here
    var page2 = ["page 6 question goes here", "wrong", "wrong", "correct", "wrong"];
    
    document.getElementById("q").innerHTML = page2[0]
    
    document.getElementById("a1").innerHTML = page2[1];
    document.getElementById("a2").innerHTML = page2[2];
    document.getElementById("a3").innerHTML = page2[3];
    document.getElementById("a4").innerHTML = page2[4];
    
    //on click functions for first page
    //change the oneFuncWrong/oneFuncCorrect 
    document.getElementById("a1").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page7Start();
                    return;
                }
            }
            
    
        };
    
        document.getElementById("a2").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page7Start();
                    return;
                }
            }
    
        };
    //correct answer, rest are wrong 
    document.getElementById("a3").onclick = function() {oneFuncCorrect(), hideDisplay()};
        function oneFuncCorrect() {
            console.log("correct");
            document.getElementById("result").innerHTML = response[1];
    
            scoreCorrect++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page7Start();
                    return;
                }
            }
    
        };
    
        document.getElementById("a4").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   page7Start();
                    return;
                }
            }
    
        };
    
    
    
    };

//start of page 2 (change here)
function page7Start () {
    //Will bring back the html starting display at the start of the next question
    showDisplay();
    //rest both the counts
    count = 20;
    rcount = 5;
    
    //timer that when reaches 0 will end will result in a "time out screen" also displaying the correct answer
    var counter=setInterval(timer, 1000) //100 will run it every second
    
    function timer() {
      count=count-1;
      if (count <= 0) {
         clearInterval(counter);
         //when timer reaches 0 the display id will hide and a 'time out' result will show
         console.log("out of time!");
    
         noAnswer++;
    
         hideDisplay();
         document.getElementById("result").innerHTML = response[0];
    
         var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
         function rtimer() {
             rcount=rcount-1;
             if (rcount <= 0) {
                clearInterval(rcounter);
                //when timer reaches 0 the display id will hide and a 'time out' result will show
                console.log("next page");
                document.getElementById("result").innerHTML = "";
                document.getElementById("correctA").innerHTML = "";
                //needs to be changed
                pageRStart();
                 return;
             }
         }
    
         
    
    
          return;
      }
    
    //display timer on html
     document.getElementById("timer").innerHTML="Time Remaining: " + count + " Seconds";
    }
    //change here
    var page2 = ["page 7 question goes here", "wrong", "wrong", "correct", "wrong"];
    
    document.getElementById("q").innerHTML = page2[0]
    
    document.getElementById("a1").innerHTML = page2[1];
    document.getElementById("a2").innerHTML = page2[2];
    document.getElementById("a3").innerHTML = page2[3];
    document.getElementById("a4").innerHTML = page2[4];
    
    //on click functions for first page
    //change the oneFuncWrong/oneFuncCorrect 
    document.getElementById("a1").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   pageRStart();
                    return;
                }
            }
            
    
        };
    
        document.getElementById("a2").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   pageRStart();
                    return;
                }
            }
    
        };
    //correct answer, rest are wrong 
    document.getElementById("a3").onclick = function() {oneFuncCorrect(), hideDisplay()};
        function oneFuncCorrect() {
            console.log("correct");
            document.getElementById("result").innerHTML = response[1];
    
            scoreCorrect++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   pageRStart();
                    return;
                }
            }
    
        };
    
        document.getElementById("a4").onclick = function() {oneFuncWrong(), hideDisplay()};
        function oneFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was " + page2[3];
    
            scoreWrong++;
    
            clearInterval(counter);
    
            var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    
            function rtimer() {
                rcount=rcount-1;
                if (rcount <= 0) {
                   clearInterval(rcounter);
                   //when timer reaches 0 the display id will hide and a 'time out' result will show
                   console.log("next page");
                   document.getElementById("result").innerHTML = "";
                   document.getElementById("correctA").innerHTML = "";
                   pageRStart();
                    return;
                }
            }
    
        };
    
    
    
    };
    
    
    
    
    








function pageRStart () {
    showResults();
    document.getElementById("ca").innerHTML = "Correct Answer: " + scoreCorrect;
    document.getElementById("ia").innerHTML = "Incorrect Answer: " + scoreWrong;
    document.getElementById("ua").innerHTML = "Unanswered: " + noAnswer;

    showButton();
    // document.getElementById("startGame").onclick = function() {page1Start(), hideButton()}
    document.getElementById("startGame").innerHTML = "PLAY AGAIN?";
}


