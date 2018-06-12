var intervalId;
var trivia = $("#trivia"),
  startBtn = $("#startBtn"),
  submitBtn = $("#submitBtn"),
  display = $("#display"),
  results = $("#results");
var solution = ["Scripting", "Programming"];
var questions = ["choice0", "choice1"];
var goodAns = 0,
  wrongAns = 0,
  unAns = 0;


var gamePlay = {

  time: 120,

  //Hides and shows all the necessary div's to left only the start button on screen.
  reset: function() {
    trivia.hide();
    display.hide();
    results.hide();
    startBtn.show();
  },

  //Hides and shows all the necessary div's to show the questions..
  play: function() {
    startBtn.hide();
    trivia.show();
    display.show();
    display.text("02:00");
    gamePlay.timer();
  },

  //Executes the countDown every 1 second.
  timer: function() {
    intervalId = setInterval(gamePlay.countDown, 1000);
  },

  //Has de control of the countDown.
  countDown: function() {
    gamePlay.time -= 1;
    console.log(gamePlay.time);
    if (gamePlay.time === 0) {
      clearInterval(intervalId);
      submitBtn.hide();
      gamePlay.evaluator();
    }

    var converted = gamePlay.timeConverter(gamePlay.time);
    $("#display").text(converted);
  },

  //Manually stops the countdow in case user press the submit button.
  submit: function() {
    clearInterval(intervalId);
      display.text("00:00");
    submitBtn.hide();
    gamePlay.evaluator();
  },

  evaluator: function() {

    for (i = 0; i < solution.length; i++) {

      var radios = document.getElementsByName(questions[i]);
      var checked = false;
      var userAnswer;

      for (j = 0; j < radios.length; j++) {
        if (radios[j].checked) {
          checked = true;
          userAnswer = radios[j].value;
        }
      }

      if (userAnswer === solution[i]) {
        goodAns++;
      } else if (!checked) {
        unAns++;
      } else if (userAnswer != solution[i]) {
        wrongAns++;
      }
    }
    console.log("Right: " + goodAns + " Wrong: " + wrongAns + " Unaswered: " + unAns);
    gamePlay.results();
  },

  results: function() {
    trivia.hide();
    results.show();
    $("#goodAnswered").text("Correct: " + goodAns);
    $("#wrongAnswered").text("Wrong: " + wrongAns);
    $("#unAnswered").text("Unaswered: " + unAns);
  },

  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  },
}

gamePlay.reset();

startBtn.on('click', function() {
  gamePlay.play();
});

submitBtn.on('click', function() {
  gamePlay.submit();
});
