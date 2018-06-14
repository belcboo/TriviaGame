# TriviaGame

Assigment #5: Simple quiz with timer from scratch. 

The goal is to have a quiz with multichoice and only one option to pick, the system needs to evaluate which was the answer selected by the user and check if it was the correct answer or not. In case of not picking one option the system will save that question as 'unanswered'.

The system used to evaluate the questions is a double for loop.

var solution = ["Mercury", "Saturn", "Venus", "Gravity", "Russia"];
var questions = ["choice0", "choice1", "choice2", "choice3", "choice4"];

evaluator: function() {

    for (i = 0; i < solution.length; i++) { //This loop runs for each of the questions

      var radios = document.getElementsByName(questions[i]);
      var checked = false;
      var userAnswer;

      for (j = 0; j < radios.length; j++) { //This loop verify the answer checked by user.
        if (radios[j].checked) {
          checked = true;
          userAnswer = radios[j].value;
        }
      }

      if (userAnswer === solution[i]) {
        goodAns++;
      } else if (!checked) {
        unAns++;
      } else {
        wrongAns++;
      }
    }

Each question is inside an input tag, to that tag an attribute called name is asigned, that value works as an identified for each question and is stored inside an array, also all the right answers are store inside an array. 

The first loop evaluate the questions one by one, The second loop is in charge of check which answer the user selected. Then that answer is compared with the answer inside the 'solutions' array. After that a series of if statemnts decides if the anwer was correct, wrong or unanswered.
