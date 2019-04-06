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

//function that reveals the hidden picture for choosing a wrong answers
function wPicShow() {
    document.getElementById('wrongPic').style.visibility='visible';
    console.log("show pic for wrong choice");
}

//function that reveals the hidden pic when the user chooses the correct answer
function cPicShow() {
    document.getElementById('correctPic').style.visibility='visible';
    console.log("show pic for correct choice")
}

//function that hides the image (gif)
function picHide() {
    document.getElementById('wrongPic').style.visibility='hidden';
    document.getElementById('correctPic').style.visibility='hidden';
    console.log("hide pic");
}

var scoreCorrect = 0;

var scoreWrong = 0;

var noAnswer = 0;
//var which is called with a specific length after answering each question or running out of time
var response = ["OUT OF TIME!", "CORRECT!!", "WRONG.."];

//the initial countdown for the first page of questions
var count = 20;
//the initial countdown for when you get the result after choosing an answer or running out of time
var rcount = 5;
//function will reset the values with every playthrough
function resetResults(){
    scoreCorrect = 0;
    scoreWrong = 0;
    noAnswer = 0;
}

hideDisplay();

//function that starts the first page of questions on the trvia page
function page1Start() {
//used when restarting the game using the button at the end result screen
showDisplay();
//calls function to reset scores for every playthrough
resetResults();

//timer that when reaches 0 will end will result in a "time out screen" also displaying the correct answer
var counter=setInterval(timer, 1000) //100 will run it every second

function timer() {
  count=count-1;
  if (count <= 0) {
     clearInterval(counter);
     //when timer reaches 0 the display id will hide and a 'time out' result will show
     console.log("out of time!");
    //if no answer is chosen then the score for the unanswered will go up
     noAnswer++;
    //hide timer, question and answers
     hideDisplay();
     document.getElementById("result").innerHTML = response[0];

     var rcounter=setInterval(rtimer, 1000) //100 will run it every second
    //function that only occurs when no answer is chosen
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

//var for the question first, then multiple choices
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
document.getElementById("a1").onclick = function() {oneFuncWrong(), hideDisplay(), wPicShow()};
    function oneFuncWrong(){
        console.log("wrong");
        document.getElementById("result").innerHTML = response[2];
        document.getElementById("correctA").innerHTML ="Correct Answer was: " + page1[3];

        scoreWrong++;
        //this is clear the counter so it doesn't interfere with the next page of questions
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

    document.getElementById("a2").onclick = function() {oneFuncWrong(), hideDisplay(), wPicShow()};
    function oneFuncWrong(){
        console.log("wrong");
        document.getElementById("result").innerHTML = response[2];
        document.getElementById("correctA").innerHTML ="Correct Answer was: " + page1[3];

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
document.getElementById("a3").onclick = function() {oneFuncCorrect(), hideDisplay(), cPicShow()};
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

    document.getElementById("a4").onclick = function() {oneFuncWrong(), hideDisplay(), wPicShow()};
    function oneFuncWrong(){
        console.log("wrong");
        document.getElementById("result").innerHTML = response[2];
        document.getElementById("correctA").innerHTML ="Correct Answer was: " + page1[3];

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
//hides any gif that was displayed in the start of a new question
picHide();
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
document.getElementById("a3").onclick = function() {twoFuncWrong(), hideDisplay(), wPicShow()};
    function twoFuncWrong(){
        console.log("wrong");
        document.getElementById("result").innerHTML = response[2];
        document.getElementById("correctA").innerHTML ="Correct Answer was: " + page2[1];

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

    document.getElementById("a2").onclick = function() {twoFuncWrong(), hideDisplay(), wPicShow()};
    function twoFuncWrong(){
        console.log("wrong");
        document.getElementById("result").innerHTML = response[2];
        document.getElementById("correctA").innerHTML ="Correct Answer was: " + page2[1];

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
document.getElementById("a1").onclick = function() {twoFuncCorrect(), hideDisplay(), cPicShow()};
    function twoFuncCorrect() {
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

    document.getElementById("a4").onclick = function() {twoFuncWrong(), hideDisplay(), wPicShow()};
    function twoFuncWrong(){
        console.log("wrong");
        document.getElementById("result").innerHTML = response[2];
        document.getElementById("correctA").innerHTML ="Correct Answer was: " + page2[1];

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
    picHide();
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
    var page3 = [
        "What does Meatwad's squishy body look like?",
         "A piece of cake",
          "A piece of dung",
           "A meatball",
            "A piece of chewing gum"];
    
    document.getElementById("q").innerHTML = page3[0]
    
    document.getElementById("a1").innerHTML = page3[1];
    document.getElementById("a2").innerHTML = page3[2];
    document.getElementById("a3").innerHTML = page3[3];
    document.getElementById("a4").innerHTML = page3[4];
    
    //on click functions for third page
    //change the oneFuncWrong/oneFuncCorrect 
    document.getElementById("a1").onclick = function() {threeFuncWrong(), hideDisplay(), wPicShow()};
        function threeFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page3[3];
    
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
    
        document.getElementById("a2").onclick = function() {threeFuncWrong(), hideDisplay(), wPicShow()};
        function threeFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page3[3];
    
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
    document.getElementById("a3").onclick = function() {threeFuncCorrect(), hideDisplay(), cPicShow()};
        function threeFuncCorrect() {
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
    
        document.getElementById("a4").onclick = function() {threeFuncWrong(), hideDisplay(), wPicShow()};
        function threeFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page3[3];
    
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
    picHide();
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
    var page4 = [
        "Who is the Aqua Teens' next door neighbor?",
         "Earl",
          "Josh",
           "Greg",
            "Carl"];
    
    document.getElementById("q").innerHTML = page4[0]
    
    document.getElementById("a1").innerHTML = page4[1];
    document.getElementById("a2").innerHTML = page4[2];
    document.getElementById("a3").innerHTML = page4[3];
    document.getElementById("a4").innerHTML = page4[4];
    
    //on click functions for fourth page
    //change the oneFuncWrong/oneFuncCorrect 
    document.getElementById("a1").onclick = function() {fourFuncWrong(), hideDisplay(), wPicShow()};
        function fourFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page4[4];
    
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
    
        document.getElementById("a2").onclick = function() {fourFuncWrong(), hideDisplay(), wPicShow()};
        function fourFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page4[4];
    
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
    document.getElementById("a4").onclick = function() {fourFuncCorrect(), hideDisplay(), cPicShow()};
        function fourFuncCorrect() {
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
    
        document.getElementById("a3").onclick = function() {fourFuncWrong(), hideDisplay(), wPicShow()};
        function fourFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page4[4];
    
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
    picHide();
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
    var page5 = [
        "What color is the milkshake inside of Master Shake?",
         "Green",
          "Pink",
           "Brown",
            "Yellow"];
    
    document.getElementById("q").innerHTML = page5[0]
    
    document.getElementById("a1").innerHTML = page5[1];
    document.getElementById("a2").innerHTML = page5[2];
    document.getElementById("a3").innerHTML = page5[3];
    document.getElementById("a4").innerHTML = page5[4];
    
    //on click functions for fifth page
    //change the oneFuncWrong/oneFuncCorrect 
    document.getElementById("a3").onclick = function() {fiveFuncWrong(), hideDisplay(), wPicShow()};
        function fiveFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page5[1];
    
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
    
        document.getElementById("a2").onclick = function() {fiveFuncWrong(), hideDisplay(), wPicShow()};
        function fiveFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page5[1];
    
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
    document.getElementById("a1").onclick = function() {fiveFuncCorrect(), hideDisplay(), cPicShow()};
        function fiveFuncCorrect() {
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
    
        document.getElementById("a4").onclick = function() {fiveFuncWrong(), hideDisplay(), wPicShow()};
        function fiveFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page5[1];
    
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
    picHide();
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
    var page6 = [
        "Where does Carl always have his hands?",
         "Crossed above his chest",
          "Over his head",
           "By his sides",
            "On his hips"];
    
    document.getElementById("q").innerHTML = page6[0]
    
    document.getElementById("a1").innerHTML = page6[1];
    document.getElementById("a2").innerHTML = page6[2];
    document.getElementById("a3").innerHTML = page6[3];
    document.getElementById("a4").innerHTML = page6[4];
    
    //on click functions for sixth page
    //change the oneFuncWrong/oneFuncCorrect 
    document.getElementById("a1").onclick = function() {sixFuncWrong(), hideDisplay(), wPicShow()};
        function sixFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page6[4];
    
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
    
        document.getElementById("a2").onclick = function() {sixFuncWrong(), hideDisplay(),wPicShow()};
        function sixFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page6[4];
    
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
    document.getElementById("a4").onclick = function() {sixFuncCorrect(), hideDisplay(), cPicShow()};
        function sixFuncCorrect() {
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
    
        document.getElementById("a3").onclick = function() {sixFuncWrong(), hideDisplay(), wPicShow()};
        function sixFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page6[4];
    
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
    picHide();
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
    var page7 = [
    "When the theme song comes on, what's the first few words said",
     "My name is...Shake Zula.",
      "My show is...Aqua Teen.",
       "My body is...a milkshake.",
        "My show is...so funny."];
    
    document.getElementById("q").innerHTML = page7[0]
    
    document.getElementById("a1").innerHTML = page7[1];
    document.getElementById("a2").innerHTML = page7[2];
    document.getElementById("a3").innerHTML = page7[3];
    document.getElementById("a4").innerHTML = page7[4];
    
    //on click functions for seventh page
    //change the oneFuncWrong/oneFuncCorrect 
    document.getElementById("a3").onclick = function() {sevenFuncWrong(), hideDisplay(), wPicShow()};
        function sevenFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page7[1];
    
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
    
        document.getElementById("a2").onclick = function() {sevenFuncWrong(), hideDisplay(), wPicShow()};
        function sevenFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page7[1];
    
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
    document.getElementById("a1").onclick = function() {sevenFuncCorrect(), hideDisplay(), cPicShow()};
        function sevenFuncCorrect() {
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
    
        document.getElementById("a4").onclick = function() {sevenFuncWrong(), hideDisplay(), wPicShow()};
        function sevenFuncWrong(){
            console.log("wrong");
            document.getElementById("result").innerHTML = response[2];
            document.getElementById("correctA").innerHTML ="Correct Answer was: " + page7[1];
    
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

//this function will pop up at the end of the game and display your score that it was adding up
function pageRStart () {
    picHide();
    showResults();
    document.getElementById("ca").innerHTML = "Correct Answer: " + scoreCorrect;
    document.getElementById("ia").innerHTML = "Incorrect Answer: " + scoreWrong;
    document.getElementById("ua").innerHTML = "Unanswered: " + noAnswer;
    //will re-display the button from the main menu and restart the game if pressed
    showButton();
    // document.getElementById("startGame").onclick = function() {page1Start(), hideButton()}
    document.getElementById("startGame").innerHTML = "PLAY AGAIN?";
}


