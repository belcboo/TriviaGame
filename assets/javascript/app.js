var intervalId;
var trivia = $("#trivia");
var startBtn = $("#startBtn");
var solution = ["Scripting", "Programming"];
var questions = ["choice0", "choice1"];
var goodAns = 0;
var wrongAns = 0;
var unAns = 0;

var gamePlay = {

  time: 5,

  reset: function() {
    trivia.hide();
    startBtn.show();
  },

  play: function() {
    trivia.show();
    startBtn.hide();
  },

  countDown: function() {
    gamePlay.time -= 1;
    console.log(gamePlay.time);
    gamePlay.timeOut();
  },

  timeOut: function() {
    if (gamePlay.time === 0) {
      clearInterval(intervalId); //stops countDown
      gamePlay.evaluator();
    };
  },

  evaluator: function() {

    for (i = 0; i < solution.length; i++) {

      var radios = document.getElementsByName(questions[i]);
      var checked = false;
      var userAnswer;

      for (j = 0; j < radios.length; j++) {
        if (radios[i].checked) {
          checked = true;
          userAnswer = radios[i].value;
          console.log(checked + " " + userAnswer)
        }
      }

      if (userAnswer === solution[i]) {
        goodAns++;
      } else {
        wrongAns++;
      }


      console.log(radios, checked, userAnswer);

      console.log("run" + i);


    }
    // var radios = document.getElementsByName("choice");
    // var i = 0, len = radios.length;
    // var checked = false;
    // var userAnswer;
    //
    // for( ; i < len; i++ ) {
    //    if(radios[i].checked) {
    //      checked = true;
    //      userAnswer = radios[i].value;
    //    }
    // }
    // // if user click submit button without selecting any option, alert box should be say "please select choice answer".
    // // if(!checked) {
    // //   unAns ++;
    // //   return;
    // // }
    // // Correct answer
    // if(userAnswer === "Scripting") {
    //    goodAns ++;
    // }
    // // incorrect answer
    // else {
    //    wrongAns ++;
    // }

    console.log(goodAns + " " + wrongAns + " " + unAns);

  },
}

gamePlay.reset();

$("#startBtn").on('click', function() {
  gamePlay.play();
  intervalId = setInterval(gamePlay.countDown, 1000);
});
